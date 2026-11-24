import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_POSTHOG_PROJECT_TOKEN: {
		public: true,
		schema: (value) => value
	},
	PUBLIC_POSTHOG_HOST: {
		public: true,
		schema: (value) => value
	},
	CONTACT_EMAIL: {
		schema: (value) => value
	},
	FORMSUBMIT_URL: {
		schema: (value) => value
	}
});
