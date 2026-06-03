<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import CookieSettingsModal from './CookieSettingsModal.svelte';
  import { consent } from '$lib/stores/consent';
  import { analytics } from '$lib/utils/analytics';

  let showBanner = false;
  let showModal = false;

  onMount(() => {
    // Only show banner if there's no previous choice in localStorage (managed by store initialization)
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setTimeout(() => {
        showBanner = true;
      }, 1000);
    }
  });

  function acceptAll() {
    consent.updateConsent({
      essential: true,
      analytics: true,
      marketing: true
    });
    analytics.track('cookie_consent_accepted');
    showBanner = false;
  }

  function declineOptional() {
    consent.updateConsent({
      essential: true,
      analytics: false,
      marketing: false
    });
    analytics.track('cookie_consent_declined');
    showBanner = false;
  }

  function openSettings() {
    showModal = true;
  }

  /** @param {CustomEvent<any>} event */
  function handleModalSave(event) {
    consent.updateConsent(event.detail);
    showBanner = false;
    showModal = false;
  }
</script>


{#if showBanner}
  <div 
    class="cookie-banner fixed-bottom p-4"
    transition:fly={{ y: 100, duration: 600 }}
    role="region"
    aria-label="Cookie consent banner"
  >
    <div class="container pb-4">
      <div class="card shadow-xl border-0 bg-white overflow-hidden">
        <div class="card-body p-4 p-md-5">
          <div class="row align-items-center g-4">
            <div class="col-lg-7">
              <h3 class="h4 mb-2 fw-bold text-dark">We respect your privacy</h3>
              <p class="mb-0 text-muted">
                We use a few performance cookies to understand how Maternanet helps. You can accept these or stick to just the essentials for a simpler experience.
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <div class="d-flex flex-wrap gap-3 justify-content-lg-end">
                <button 
                  class="btn btn-ghost-secondary text-decoration-underline px-2 transition-all"
                  on:click={openSettings}
                >
                  Manage Preferences
                </button>
                <button 
                  class="btn btn-outline-primary px-4 fw-medium transition-all"
                  on:click={declineOptional}
                >
                  Decline Optional
                </button>
                <button 
                  class="btn btn-primary px-4 fw-bold shadow-sm transition-all"
                  on:click={acceptAll}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-accent-line"></div>
      </div>
    </div>
  </div>
{/if}

{#if showModal}
  <CookieSettingsModal 
    on:close={() => showModal = false} 
    on:save={handleModalSave}
  />
{/if}

<style>
  .cookie-banner {
    z-index: 1050;
    pointer-events: none; /* Let clicks pass through outside the card */
  }

  .cookie-banner .container {
    pointer-events: auto; /* Re-enable for the banner content */
  }

  .card {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.05) !important;
  }

  .banner-accent-line {
    height: 4px;
    background: linear-gradient(90deg, #377dff, #00d2ff);
    width: 100%;
  }

  .btn-ghost-secondary {
    background: transparent;
    border: none;
    color: #677788;
    font-size: 0.9rem;
  }

  .btn-ghost-secondary:hover {
    color: #377dff;
  }

  .transition-all {
    transition: all 0.2s ease-in-out;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .shadow-xl {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1) !important;
  }

  @media (max-width: 991.98px) {
    .btn {
      width: 100%;
    }
  }
</style>
