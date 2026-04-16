<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Maternanet SvelteKit application. The integration includes client-side initialization via SvelteKit hooks, a server-side PostHog singleton with a reverse proxy to bypass ad blockers, consent-aware opt-in/opt-out, server-side event tracking on the contact form, client-side FAQ engagement events, and error tracking on both client and server.

## Summary of changes

| File | Change |
|------|--------|
| `src/hooks.client.ts` | **Created** — Initializes PostHog with `/ingest` reverse proxy, `opt_out_capturing_by_default: true`, and `capture_exceptions: true`. Exports `handleError` for automatic client-side exception capture. |
| `src/hooks.server.ts` | **Created** — Implements `/ingest` reverse proxy for PostHog (avoids ad blockers). Exports `handleError` to capture server-side exceptions with status/message. |
| `src/lib/server/posthog.ts` | **Created** — Server-side PostHog Node.js singleton used for server-rendered event capture. |
| `src/lib/utils/analytics.ts` | **Updated** — Replaced hardcoded keys and double-init logic with consent-aware `opt_in_capturing()` / `opt_out_capturing()`. PostHog is now initialized once in `hooks.client.ts`. |
| `svelte.config.js` | **Updated** — Added `paths.relative: false` (required for PostHog session replay with SSR). |
| `src/routes/faq/+page.svelte` | **Updated** — Added `faq_item_opened`, `faq_searched` (debounced), and `faq_filter_changed` event tracking. |
| `src/routes/contacts/+page.server.ts` | **Updated** — Added server-side `contact_form_submitted` event with `partnership_type` and `outcome` properties. |
| `src/lib/components/landing/CookieConsentBanner.svelte` | **Fixed** — Added missing `<script>` opening tag that was causing a parse error. |
| `src/routes/+page.svelte` | **Fixed** — Added missing `<script lang="ts">` tag and imported the `Testimonial` component. |
| `.env` | **Created** — `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` environment variables. |

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `faq_item_opened` | User opens a FAQ accordion item | `src/routes/faq/+page.svelte` |
| `faq_searched` | User searches in the FAQ (debounced 600ms) | `src/routes/faq/+page.svelte` |
| `faq_filter_changed` | User clicks a category filter on FAQ page | `src/routes/faq/+page.svelte` |
| `contact_form_submitted` | Server-side: contact form submitted (with `partnership_type` + `outcome`) | `src/routes/contacts/+page.server.ts` |
| `server_error` | Unhandled server-side error captured | `src/hooks.server.ts` |
| `form_submit_start` | Client: user submits the contact form | `src/routes/contacts/+page.svelte` (pre-existing) |
| `form_submit_success` | Client: contact form succeeded | `src/routes/contacts/+page.svelte` (pre-existing) |
| `form_submit_error` | Client: contact form failed | `src/routes/contacts/+page.svelte` (pre-existing) |
| `social_click` | User clicks a social media link | `src/routes/contacts/+page.svelte` (pre-existing) |
| `cta_click` | User clicks a CTA button on the home page | `src/routes/+page.svelte` (pre-existing) |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/384443/dashboard/1474479
- **Contact Form Submissions Over Time**: https://us.posthog.com/project/384443/insights/vWcXzBQZ
- **Partnership Type Breakdown**: https://us.posthog.com/project/384443/insights/Yvsai4a2
- **Contact Form Conversion Funnel**: https://us.posthog.com/project/384443/insights/plyJW3Ne
- **FAQ Engagement — Opens, Searches & Filter Changes**: https://us.posthog.com/project/384443/insights/1NqKg1BC
- **Social Media & CTA Clicks**: https://us.posthog.com/project/384443/insights/8GZnuQsp

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
