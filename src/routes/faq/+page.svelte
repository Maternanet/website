<script lang="ts">
  import { categories, filters, type FaqCategory } from '$lib/content/faq';

  let searchQuery = '';
  let activeFilter = 'all';
  let openItem: string | null = null;

  $: filteredCategories = categories.filter((cat) => {
    if (activeFilter !== 'all' && cat.id !== activeFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return cat.items.some((item) =>
      item.q.toLowerCase().includes(q) ||
      item.a.toLowerCase().includes(q)
    );
  });

  const visibleItems = (cat: FaqCategory) => {
    if (!searchQuery.trim()) return cat.items;
    const q = searchQuery.toLowerCase();
    return cat.items.filter((item) =>
      item.q.toLowerCase().includes(q) ||
      item.a.toLowerCase().includes(q)
    );
  };

  function toggleItem(id: string) {
    openItem = openItem === id ? null : id;
  }

  function setFilter(id: string) {
    activeFilter = id;
    openItem = null;
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<section class="faq-section">

  <!-- Hero Header -->
  <div class="faq-header">
    <div class="eyebrow">Frequently asked questions</div>
    <h2 class="section-title">The questions we get <em>most</em></h2>
    <p class="section-sub">For mothers, community health workers, clinicians, donors, NGO partners, and government stakeholders.</p>
  </div>

  <!-- Search -->
  <div class="search-wrap">
    <svg class="search-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input
      type="text"
      class="faq-search"
      placeholder="Search all questions…"
      bind:value={searchQuery}
      autocomplete="off"
    />
    {#if searchQuery}
      <button class="search-clear" on:click={() => searchQuery = ''} aria-label="Clear search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    {/if}
  </div>

  <!-- Filters -->
  <div class="filter-bar" role="tablist" aria-label="Filter FAQ by category">
    {#each filters as f}
      <button
        class="filter-btn"
        class:active={activeFilter === f.id}
        on:click={() => setFilter(f.id)}
        role="tab"
        aria-selected={activeFilter === f.id}
      >
        {f.label}
      </button>
    {/each}
  </div>

  <!-- FAQ Content -->
  <div class="faq-body">
    {#if filteredCategories.length === 0}
      <div class="no-results">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <p>No questions match <strong>"{searchQuery}"</strong></p>
        <button on:click={() => searchQuery = ''}>Clear search</button>
      </div>
    {:else}
      {#each filteredCategories as cat}
        {@const items = visibleItems(cat)}
        {#if items.length > 0}
          <div class="faq-category {cat.colorClass}">
            <div class="category-header">
              <div class="cat-label">
                <span class="cat-dot"></span>
                {cat.label}
              </div>
              <h3 class="cat-title">{cat.title}</h3>
            </div>
            <div class="faq-list">
              {#each items as item}
                <div class="faq-item" class:open={openItem === item.id}>
                  <button
                    class="faq-q"
                    on:click={() => toggleItem(item.id)}
                    aria-expanded={openItem === item.id}
                  >
                    <span class="q-num">{item.num}</span>
                    <span class="q-text">{item.q}</span>
                    <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  <div class="faq-a">
                    <div class="faq-a-inner">
                      {@html item.a}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>

  <!-- Schema note -->
  <div class="schema-note">
    <span class="schema-icon">i</span>
    <span>The content in this page is structured as an FAQ page and may include content that has since been updated.</span>
  </div>

</section>

<!-- CTA Band -->
<section class="cta-band">
  <div class="cta-inner">
    <h2>Still have questions? <em>Let's talk.</em></h2>
    <p>We respond to every message within 48 hours — and yes, a human reads every email.</p>
    <div class="cta-buttons">
      <a href="mailto:info@maternanet.com" class="btn-primary">Email our team</a>
      <a href="mailto:owinoaketch@maternanet.com" class="btn-ghost">Speak to our CEO</a>
    </div>
  </div>
</section>

<style>
  /* ── Variables ───────────────────────────────────────── */
  :root {
    --bg:          #f9f7f4;
    --bg-card:     #ffffff;
    --fg:          #1c1a17;
    --fg-mid:      #5a5248;
    --fg-light:    #9b9188;
    --border:      #e8e3dc;

    --green:       #0e5c48;
    --green-mid:   #1a7a60;
    --green-pale:  #eaf4f0;

    --gold:        #b8831e;
    --gold-pale:   #fdf6e8;

    --coral:       #c94a2e;
    --coral-pale:  #fdf0ed;

    --ink:         #2c3a4a;
    --ink-pale:    #eef1f5;

    --teal:        #1a7a8a;
    --teal-pale:   #eaf6f8;

    --radius:      12px;
    --radius-sm:   8px;
    --transition:  0.22s cubic-bezier(0.4, 0, 0.2, 1);

    --font-display: 'Lora', Georgia, serif;
    --font-body:    'Plus Jakarta Sans', system-ui, sans-serif;
  }

  /* ── Base ────────────────────────────────────────────── */
  .faq-section {
    max-width: 860px;
    margin: 0 auto;
    padding: 80px 24px 60px;
    font-family: var(--font-body);
    color: var(--fg);
  }

  /* ── Header ──────────────────────────────────────────── */
  .faq-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--green-mid);
    background: var(--green-pale);
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 20px;
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: var(--fg);
    margin: 0 0 18px;
  }

  .section-title em {
    font-style: italic;
    color: var(--green);
  }

  .section-sub {
    font-size: 1rem;
    color: var(--fg-mid);
    line-height: 1.65;
    max-width: 580px;
    margin: 0 auto;
  }

  /* ── Search ──────────────────────────────────────────── */
  .search-wrap {
    position: relative;
    margin-bottom: 24px;
  }

  .search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--fg-light);
    pointer-events: none;
    transition: color var(--transition);
  }

  .faq-search {
    width: 100%;
    height: 52px;
    padding: 0 48px 0 48px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg-card);
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--fg);
    outline: none;
    box-sizing: border-box;
    transition: border-color var(--transition), box-shadow var(--transition);
  }

  .faq-search::placeholder { color: var(--fg-light); }

  .faq-search:focus {
    border-color: var(--green);
    box-shadow: 0 0 0 3px rgba(14, 92, 72, 0.1);
  }

  .faq-search:focus + .search-icon,
  .search-wrap:focus-within .search-icon {
    color: var(--green);
  }

  .search-clear {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: var(--border);
    color: var(--fg-mid);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition), color var(--transition);
  }

  .search-clear:hover {
    background: var(--fg-light);
    color: white;
  }

  /* ── Filters ─────────────────────────────────────────── */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 48px;
  }

  .filter-btn {
    height: 36px;
    padding: 0 16px;
    border: 1.5px solid var(--border);
    border-radius: 100px;
    background: var(--bg-card);
    font-family: var(--font-body);
    font-size: 0.83rem;
    font-weight: 500;
    color: var(--fg-mid);
    cursor: pointer;
    transition: all var(--transition);
    white-space: nowrap;
  }

  .filter-btn:hover {
    border-color: var(--green);
    color: var(--green);
    background: var(--green-pale);
  }

  .filter-btn.active {
    background: var(--green);
    border-color: var(--green);
    color: #fff;
  }

  /* ── Category ────────────────────────────────────────── */
  .faq-category {
    margin-bottom: 56px;
  }

  .category-header {
    margin-bottom: 20px;
  }

  .cat-label {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .cat-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .cat-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--fg);
    margin: 0;
  }

  /* Category colour tokens */
  .cat-purple .cat-label { color: #7c4dff; }
  .cat-purple .cat-dot   { background: #7c4dff; }

  .cat-teal .cat-label   { color: var(--teal); }
  .cat-teal .cat-dot     { background: var(--teal); }

  .cat-gold .cat-label   { color: var(--gold); }
  .cat-gold .cat-dot     { background: var(--gold); }

  .cat-coral .cat-label  { color: var(--coral); }
  .cat-coral .cat-dot    { background: var(--coral); }

  .cat-ink .cat-label    { color: var(--ink); }
  .cat-ink .cat-dot      { background: var(--ink); }

  /* ── FAQ Items ───────────────────────────────────────── */
  .faq-list {
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--bg-card);
  }

  .faq-item {
    border-bottom: 1px solid var(--border);
  }

  .faq-item:last-child {
    border-bottom: none;
  }

  /* Question button */
  .faq-q {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 20px 22px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background var(--transition);
  }

  .faq-q:hover {
    background: var(--bg);
  }

  .faq-item.open .faq-q {
    background: var(--green-pale);
  }

  .q-num {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--border);
    color: var(--fg-mid);
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--transition), color var(--transition);
  }

  .faq-item.open .q-num {
    background: var(--green);
    color: #fff;
  }

  .q-text {
    flex: 1;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--fg);
    line-height: 1.45;
  }

  .chevron {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--fg-light);
    transform: rotate(0deg);
    transition: transform var(--transition), color var(--transition);
  }

  .faq-item.open .chevron {
    transform: rotate(180deg);
    color: var(--green);
  }

  /* Answer panel */
  .faq-a {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, padding 0.35s ease;
    background: #fbfcfe;
  }

  .faq-item.open .faq-a {
    max-height: 1200px;
    opacity: 1;
  }

  .faq-a-inner {
    overflow: hidden;
    padding: 0 22px 0 62px;
    transition: padding 0.35s ease;
  }

  .faq-item.open .faq-a-inner {
    padding-bottom: 24px;
  }

  /* Answer typography */
  :global(.faq-a-inner p) {
    font-size: 0.92rem;
    line-height: 1.72;
    color: var(--fg-mid);
    margin: 14px 0 0;
  }

  :global(.faq-a-inner p:first-child) {
    margin-top: 0;
  }

  :global(.faq-a-inner ul) {
    margin: 12px 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  :global(.faq-a-inner li) {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--fg-mid);
  }

  :global(.faq-a-inner strong) {
    color: var(--fg);
    font-weight: 600;
  }

  :global(.faq-a-inner a) {
    color: var(--green);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  :global(.faq-a-inner a:hover) {
    color: var(--green-mid);
  }

  /* Highlight box */
  :global(.highlight-box) {
    margin: 18px 0 0;
    padding: 14px 18px;
    background: var(--green-pale);
    border-left: 3px solid var(--green);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    font-size: 0.88rem;
    line-height: 1.65;
    color: var(--green);
    font-weight: 500;
  }

  /* Stat chips */
  :global(.stat-row) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0;
  }

  :global(.stat-chip) {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    font-size: 0.78rem;
    color: var(--fg-mid);
    font-weight: 500;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 90px;
  }

  :global(.stat-chip span) {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--green);
    display: block;
  }

  /* ── No Results ──────────────────────────────────────── */
  .no-results {
    text-align: center;
    padding: 64px 24px;
    color: var(--fg-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .no-results p {
    font-size: 1rem;
    color: var(--fg-mid);
    margin: 0;
  }

  .no-results button {
    padding: 8px 20px;
    border: 1.5px solid var(--green);
    border-radius: 100px;
    background: none;
    color: var(--green);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
  }

  .no-results button:hover {
    background: var(--green);
    color: #fff;
  }

  /* ── Schema note ─────────────────────────────────────── */
  .schema-note {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    background: var(--ink-pale);
    border-radius: var(--radius-sm);
    margin-top: 20px;
    font-size: 0.8rem;
    color: var(--fg-mid);
    line-height: 1.55;
  }

  .schema-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    background: var(--ink);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    margin-top: 1px;
  }

  :global(.schema-note code) {
    background: var(--border);
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 0.78rem;
  }

  /* ── CTA Band ────────────────────────────────────────── */
  .cta-band {
    background: var(--green);
    color: white;
    padding: 72px 24px;
    text-align: center;
  }

  .cta-inner {
    max-width: 600px;
    margin: 0 auto;
  }

  .cta-band h2 {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 700;
    margin: 0 0 12px;
    line-height: 1.2;
  }

  .cta-band h2 em {
    font-style: italic;
    color: rgba(255,255,255,0.75);
  }

  .cta-band p {
    font-size: 0.95rem;
    opacity: 0.8;
    margin: 0 0 32px;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    height: 48px;
    padding: 0 28px;
    background: #fff;
    color: var(--green);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 100px;
    text-decoration: none;
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    height: 48px;
    padding: 0 28px;
    background: transparent;
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.5);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 100px;
    text-decoration: none;
    transition: border-color var(--transition), background var(--transition);
  }

  .btn-ghost:hover {
    border-color: #fff;
    background: rgba(255,255,255,0.1);
  }

  /* ── Responsive ──────────────────────────────────────── */
  @media (max-width: 600px) {
    .faq-section { padding: 48px 16px 40px; }
    .faq-q { padding: 16px; gap: 10px; }
    .faq-a-inner { padding-left: 16px; }
    .faq-item.open .faq-a-inner { padding-bottom: 18px; }
    .q-num { width: 22px; height: 22px; font-size: 0.65rem; }
    .cat-title { font-size: 1.25rem; }
    .cta-band { padding: 48px 16px; }
  }
</style>
