<script>
    import Header from "#lib/components/landing/header.svelte";
    import Footer from "#lib/components/landing/footer.svelte";
    import CookieConsentBanner from "#lib/components/landing/CookieConsentBanner.svelte";
    import { analytics } from "#lib/utils/analytics";
    import { consent } from "#lib/stores/consent";
    import { browser, dev } from '$app/env';
    import { injectAnalytics } from '@vercel/analytics/sveltekit-next';

    injectAnalytics({ mode: dev ? 'development' : 'production' });

    // Watch for consent changes
    $: if (browser && $consent.analytics) {
        analytics.init();
    } else if (browser && !$consent.analytics) {
        analytics.optOut();
    }
</script>

<Header></Header>
<slot />
<Footer />
<CookieConsentBanner />