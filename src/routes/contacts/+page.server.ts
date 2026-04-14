import { CONTACT_EMAIL, FORMSUBMIT_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch(`${FORMSUBMIT_URL}${CONTACT_EMAIL}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...data,
					_subject: 'New Partnership Contact from Maternanet Website',
					_template: 'table'
				})
			});

			if (!response.ok) throw new Error('Submission Failed');
			return { success: true, msg: 'Message sent successfully! We will get back to you soon.' };
		} catch (error) {
			console.error('[ContactForm Action Error]', error);
			return fail(500, {
				data: data as Record<string, string>,
				error: true,
				msg: 'Unable to send form. Please try again later.'
			});
		}
	}
};
