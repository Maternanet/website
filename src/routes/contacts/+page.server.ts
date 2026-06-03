import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { getPostHogClient } from '$lib/server/posthog';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const partnershipType = String(data.partnership_type ?? '');

		const contactEmail = env.CONTACT_EMAIL || 'careconnect.afrika@gmail.com';
		let formsubmitUrl = env.FORMSUBMIT_URL || 'https://formsubmit.co/ajax/';
		if (!formsubmitUrl.endsWith('/')) formsubmitUrl += '/';

		const submitterEmail = String(data.email ?? '');
		const distinctId = submitterEmail || 'anonymous';

		let reqOrigin = request.headers.get('origin') || 'https://maternanet.com';
		let reqReferer = request.headers.get('referer') || 'https://maternanet.com/contacts';

		// Normalize headers to the activated domain in production to avoid www / subdomain mismatches
		if (!reqOrigin.includes('localhost') && !reqOrigin.includes('127.0.0.1')) {
			reqOrigin = 'https://maternanet.com';
			reqReferer = 'https://maternanet.com/contacts';
		}

		try {
			const response = await fetch(`${formsubmitUrl}${contactEmail}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Origin': reqOrigin,
					'Referer': reqReferer,
					'User-Agent': request.headers.get('user-agent') || 'SvelteKit-Server'
				},
				body: JSON.stringify({
					...data,
					_subject: 'New Partnership Contact from Maternanet Website',
					_template: 'table'
				})
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Submission Failed (HTTP ${response.status}): ${errorText}`);
			}

			const responseData = await response.json().catch(() => ({}));
			if (responseData.success === "false" || responseData.success === false) {
				throw new Error(`FormSubmit API Error: ${responseData.message || JSON.stringify(responseData)}`);
			}

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId,
				event: 'contact_form_submitted',
				properties: {
					partnership_type: partnershipType,
					outcome: 'success',
					$set: {
						name: data.name,
						organization: data.organization,
						partnership_type: partnershipType
					}
				}
			});
			await posthog.flush();

			return { success: true, msg: 'Message sent successfully! We will get back to you soon.' };
		} catch (error) {
			console.error('[ContactForm Action Error]', error);

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId,
				event: 'contact_form_submitted',
				properties: { partnership_type: partnershipType, outcome: 'error' }
			});
			await posthog.flush();

			const errorMsg = error instanceof Error ? error.message : 'Unable to send form. Please try again later.';

			return fail(500, {
				data: data as Record<string, string>,
				error: true,
				msg: errorMsg
			});
		}
	}
};
