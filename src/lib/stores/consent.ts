import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface ConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_CONSENT: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false
};

function createConsentStore() {
  const initialValue = browser 
    ? JSON.parse(localStorage.getItem('cookie-consent') || JSON.stringify(DEFAULT_CONSENT))
    : DEFAULT_CONSENT;

  const { subscribe, set, update } = writable<ConsentState>(initialValue);

  return {
    subscribe,
    updateConsent: (newConsent: ConsentState) => {
      if (browser) {
        localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
      }
      set(newConsent);
    },
    reset: () => {
      if (browser) {
        localStorage.removeItem('cookie-consent');
      }
      set(DEFAULT_CONSENT);
    }
  };
}

export const consent = createConsentStore();
