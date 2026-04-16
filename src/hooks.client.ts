import posthog from 'posthog-js';
import { env } from '$env/dynamic/public';
import type { HandleClientError } from '@sveltejs/kit';

export async function init() {
	posthog.init(env.PUBLIC_POSTHOG_PROJECT_TOKEN as string, {
		api_host: '/ingest',
		ui_host: 'https://us.posthog.com',
		defaults: '2026-01-30',
		capture_exceptions: true,
		opt_out_capturing_by_default: true
	});
}

export const handleError: HandleClientError = async ({ error, status, message }) => {
	posthog.captureException(error);

	return {
		message,
		status
	};
};
