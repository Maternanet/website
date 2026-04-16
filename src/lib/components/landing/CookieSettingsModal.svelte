<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  let preferences = {
    essential: true,
    analytics: true,
    marketing: false
  };

  onMount(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (saved) {
      preferences = { ...preferences, ...JSON.parse(saved) };
    }
  });

  function save() {
    dispatch('save', preferences);
  }

  function close() {
    dispatch('close');
  }
</script>

<div 
  class="modal-backdrop fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
  transition:fade={{ duration: 200 }}
  on:click|self={close}
  on:keydown={(e) => e.key === 'Escape' && close()}
  role="button"
  tabindex="-1"
  aria-label="Close modal backdrop"
>
  <div 
    class="modal-content card shadow-lg p-0 overflow-hidden"
    transition:fly={{ y: 20, duration: 300 }}
  >
    <div class="modal-header p-4 border-0 d-flex justify-content-between align-items-center">
      <h3 class="h5 mb-0 fw-bold">Privacy Preferences</h3>
      <button class="btn-close" on:click={close} aria-label="Close"></button>
    </div>

    <div class="modal-body p-4 pt-0">
      <p class="text-muted small mb-4">
        We value your privacy. Select the types of cookies you're comfortable with. You can always change these settings later in our Privacy Policy.
      </p>

      <div class="preference-list border rounded-3 overflow-hidden">
        <!-- Essential -->
        <div class="preference-item p-3 border-bottom d-flex align-items-start gap-3 bg-light">
          <div class="form-check form-switch mt-1">
            <input class="form-check-input" type="checkbox" checked disabled>
          </div>
          <div>
            <div class="d-flex align-items-center gap-2">
              <span class="fw-bold text-dark">Essential Cookies</span>
              <span class="badge bg-secondary-soft text-secondary rounded-pill smaller">Required</span>
            </div>
            <p class="mb-0 text-muted smaller">Necessary for the website to function properly. They cannot be disabled.</p>
          </div>
        </div>

        <!-- Analytics -->
        <div class="preference-item p-3 border-bottom d-flex align-items-start gap-3 transition-colors">
          <div class="form-check form-switch mt-1">
            <input 
              class="form-check-input" 
              type="checkbox" 
              bind:checked={preferences.analytics}
              id="analytics-cookies"
            >
          </div>
          <label for="analytics-cookies" class="cursor-pointer">
            <span class="fw-bold text-dark d-block">Performance & Analytics</span>
            <p class="mb-0 text-muted smaller">Help us understand how visitors interact with the site, so we can improve the experience.</p>
          </label>
        </div>

        <!-- Marketing -->
        <div class="preference-item p-3 d-flex align-items-start gap-3 transition-colors">
          <div class="form-check form-switch mt-1">
            <input 
              class="form-check-input" 
              type="checkbox" 
              bind:checked={preferences.marketing}
              id="marketing-cookies"
            >
          </div>
          <label for="marketing-cookies" class="cursor-pointer">
            <span class="fw-bold text-dark d-block">Personalization</span>
            <p class="mb-0 text-muted smaller">Allows us to remember your preferences and show you more relevant content.</p>
          </label>
        </div>
      </div>
    </div>

    <div class="modal-footer p-4 border-0 d-flex gap-3">
      <button class="btn btn-outline-secondary flex-grow-1" on:click={close}>Cancel</button>
      <button class="btn btn-primary flex-grow-1 fw-bold" on:click={save}>Save Settings</button>
    </div>
  </div>
</div>

<style>
  .modal-backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 2000;
  }

  .modal-content {
    max-width: 500px;
    width: 100%;
    border-radius: 24px;
    border: none;
    background: white;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .smaller {
    font-size: 0.85rem;
  }

  .bg-secondary-soft {
    background-color: rgba(103, 119, 136, 0.1);
  }

  .form-check-input:checked {
    background-color: #377dff;
    border-color: #377dff;
  }

  .preference-item:hover:not(.bg-light) {
    background-color: #f8fafd;
  }

  .transition-colors {
    transition: background-color 0.2s ease;
  }

  .btn {
    border-radius: 12px;
    padding: 0.75rem 1rem;
  }
</style>
