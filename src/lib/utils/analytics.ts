import { browser } from '$app/environment';

// PostHog is initialized in src/hooks.client.ts with opt_out_capturing_by_default: true.
// This module manages consent-based opt-in/opt-out.

let posthogClient: any = null;

if (browser) {
  import('posthog-js').then((mod) => {
    posthogClient = mod.default;
  });
}

export const analytics = {
  /**
   * Opts the user into analytics tracking (called when consent is granted).
   */
  init: () => {
    if (!browser) return;
    if (posthogClient) {
      posthogClient.opt_in_capturing();
    } else {
      import('posthog-js').then((mod) => {
        mod.default.opt_in_capturing();
      });
    }
  },

  /**
   * Tracks a custom event
   */
  track: (eventName: string, properties?: Record<string, any>) => {
    if (!browser) return;
    if (posthogClient) {
      posthogClient.capture(eventName, properties);
    } else {
      import('posthog-js').then((mod) => {
        mod.default.capture(eventName, properties);
      });
    }
  },

  /**
   * Identifies a user
   */
  identify: (distinctId: string, properties?: Record<string, any>) => {
    if (!browser) return;
    if (posthogClient) {
      posthogClient.identify(distinctId, properties);
    } else {
      import('posthog-js').then((mod) => {
        mod.default.identify(distinctId, properties);
      });
    }
  },

  /**
   * Opts the user out of tracking (called when consent is denied/withdrawn).
   */
  optOut: () => {
    if (!browser) return;
    if (posthogClient) {
      posthogClient.opt_out_capturing();
    } else {
      import('posthog-js').then((mod) => {
        mod.default.opt_out_capturing();
      });
    }
  }
};

