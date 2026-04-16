import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { getPostHogClient } from '$lib/server/posthog';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const partnershipType = String(data.partnership_type ?? '');

		try {
			const response = await fetch(`${env.FORMSUBMIT_URL}${env.CONTACT_EMAIL}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...data,
					_subject: 'New Partnership Contact from Maternanet Website',
					_template: 'table'
				})
			});

			if (!response.ok) throw new Error('Submission Failed');

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId: 'anonymous',
				event: 'contact_form_submitted',
				properties: { partnership_type: partnershipType, outcome: 'success' }
			});
			await posthog.flush();

			return { success: true, msg: 'Message sent successfully! We will get back to you soon.' };
		} catch (error) {
			console.error('[ContactForm Action Error]', error);

			const posthog = getPostHogClient();
			posthog.capture({
				distinctId: 'anonymous',
				event: 'contact_form_submitted',
				properties: { partnership_type: partnershipType, outcome: 'error' }
			});
			await posthog.flush();

			return fail(500, {
				data: data as Record<string, string>,
				error: true,
				msg: 'Unable to send form. Please try again later.'
			});
		}
	}
};
