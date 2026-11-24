import { PostHog } from 'posthog-node';
import { PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_PROJECT_TOKEN } from '$app/env/public';

let posthogClient: PostHog | null = null;

export function getPostHogClient() {
	if (!PUBLIC_POSTHOG_PROJECT_TOKEN) {
		return {
			capture: (payload: any) => console.log('[PostHog Mock Capture]', payload),
			flush: async () => {},
			shutdown: async () => {}
		} as unknown as PostHog;
	}
	if (!posthogClient) {
		posthogClient = new PostHog(PUBLIC_POSTHOG_PROJECT_TOKEN, {
			host: PUBLIC_POSTHOG_HOST,
			flushAt: 1,
			flushInterval: 0
		});
	}
	return posthogClient;
}

export async function shutdownPostHog() {
	if (posthogClient) {
		await posthogClient.shutdown();
	}
}
