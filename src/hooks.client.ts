import posthog from 'posthog-js';
import { PUBLIC_POSTHOG_PROJECT_TOKEN } from '$app/env/public';
import type { HandleClientError } from '@sveltejs/kit/hooks';

export async function init() {
	posthog.init(PUBLIC_POSTHOG_PROJECT_TOKEN as string, {
		api_host: '/ingest',
		ui_host: 'https://us.posthog.com',
		defaults: '2026-01-30',
		capture_exceptions: true,
		opt_out_capturing_by_default: true
	});
}

export const handleError: HandleClientError = async (caughtError) => {
	const details =
		caughtError.kind === 'unknown'
			? { status: 500, message: 'Internal Error' }
			: caughtError.error;
	posthog.captureException(
		caughtError.kind === 'unknown' ? caughtError.error : new Error(details.message)
	);

	return details;
};
