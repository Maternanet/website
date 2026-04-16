import posthog from 'posthog-js';
import { browser } from '$app/environment';

// PostHog is initialized in src/hooks.client.ts with opt_out_capturing_by_default: true.
// This module manages consent-based opt-in/opt-out.

export const analytics = {
  /**
   * Opts the user into analytics tracking (called when consent is granted).
   */
  init: () => {
    if (!browser) return;
    posthog.opt_in_capturing();
  },

  /**
   * Tracks a custom event
   */
  track: (eventName: string, properties?: Record<string, any>) => {
    if (!browser) return;
    posthog.capture(eventName, properties);
  },

  /**
   * Identifies a user
   */
  identify: (distinctId: string, properties?: Record<string, any>) => {
    if (!browser) return;
    posthog.identify(distinctId, properties);
  },

  /**
   * Opts the user out of tracking (called when consent is denied/withdrawn).
   */
  optOut: () => {
    if (!browser) return;
    posthog.opt_out_capturing();
  }
};
