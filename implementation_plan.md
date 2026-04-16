# Privacy Policy & Cookie Consent UI Reform

This plan addresses the friction caused by standard cookie banners and proposes a user-centric design that avoids dark patterns, aligns with the Maternanet brand, and transforms confusing legalese into clear, human-readable language.

## Analysis of Friction in Standard Cookie Banners
- **Confusing Copywriting**: Users are met with intimidating legal jargon that provides no clear indication of exactly *what* is being tracked.
- **Dark Patterns in Hierarchy**: "Accept All" is typically a massive, colorful button, while "Reject All" is either hidden behind multiple clicks ("Manage Preferences") or styled as a faint, easily missed link.
- **Overwhelming Information Density**: Displaying the entire cookie policy or an exhaustive list of trackers on the first interaction overwhelms the user, leading to blind acceptance (consent fatigue).
- **Brand Disconnect**: Cookie banners are often treated as third-party, out-of-the-box widgets that hover artificially over the UI, breaking the brand's aesthetic continuity and trust.

## Proposed Implementation Plan

### 1. New Cookie Consent UI Components

We will build custom Svelte components rather than using a generic third-party script. This gives us full control over spacing, typography, colors, and accessibility.

#### [NEW] `src/lib/components/landing/CookieConsentBanner.svelte`
- **Layer 1 (The Banner)**: A dismissable banner fixed to the bottom of the screen.
- **Copywriting**: Friendly, concise plain-english string: *"We use a few performance cookies to understand how Maternanet helps. You can accept these or stick to just the essentials."*
- **Visual Hierarchy (Anti-Dark Pattern)**: Two primary buttons displayed side-by-side with *equal* visual weight. E.g., `btn-outline-primary` for "Decline Optional" and `btn-primary` for "Accept All". 
- **Progressive Disclosure**: A visible "Manage Preferences" button that opens Layer 2.

#### [NEW] `src/lib/components/landing/CookieSettingsModal.svelte`
- **Layer 2 (The Modal)**: A clean modal offering granular control.
- **Categorization**: Group cookies into clear categories (Essential, Analytics, Marketing/Tracking).
- **Brand Integration**: Styled using Maternanet's existing component library (Bootstrap-based classes, rounded cards, branded icons).

### 2. Layout Integration

#### [MODIFY] `src/routes/+layout.svelte`
- Import and mount `<CookieConsentBanner />`. 
- Wrap it in rudimentary state logic (checking `localStorage` for consent choices) to only show it to new visitors.

### 3. Policy Page Modernization

The current policy pages (`/docs/privacy` and `/docs/terms`) are dense walls of text. We will restructure them to make them more approachable.

#### [MODIFY] `src/routes/docs/privacy/+page.svelte`
#### [MODIFY] `src/routes/docs/terms/+page.svelte`
- **TL;DR Sidebars / Callouts**: Extract key takeaways from each section into a "Human-Friendly Summary" card alongside the formal legal text.
- **Typography & Layout**: Implement vertical rhythm identical to the updated "About Us" and "Services" pages. Break up long paragraphs. Use icons to represent different policy sections.
- **Brand Continuity**: Update headers to use the Maternanet hero patterns instead of generic dark backgrounds.

## Open Questions

> [!IMPORTANT]
> **Consent Scope:** Are there any specific third-party analytics (e.g., Google Analytics, Meta Pixel) or embedded tools currently running on the site that we *must* categorize in the cookie preferences modal?

> [!IMPORTANT]
> **Legal Validation:** The proposed plain-language summaries will accompany the original text, but they serve as UX enhancements, not a legal replacement. Is there a legal contact who will need to review the "TL;DR" simplified text before final deployment?

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure all new Svelte components compile flawlessly.

### Manual Verification
- **Visual Hierarchy Validation**: Verify that the "Reject/Decline" button is just as actionable and visible as the "Accept" button.
- **State Management**: Test that rejecting or accepting correctly updates `localStorage` and hides the banner on page refresh.
- **Modal Functionality**: Verify that the "Manage Preferences" modal correctly toggles cookie states independently.
- **Responsive Design**: Ensure the banner and modal render cleanly on mobile devices without blocking critical UI.
