<script lang="ts">
  import { page } from '$app/stores';
  import { categories } from '$lib/content/faq';

  // Find the exact FAQ item using the ID from the URL
  $: faqId = $page.params.id;
  $: faqItem = (() => {
    let item = null;
    let category = null;
    for (const cat of categories) {
      const found = cat.items.find((i) => i.id === faqId);
      if (found) {
        item = found;
        category = cat;
        break;
      }
    }
    return { item, category };
  })();
  
  // Also get some related questions
  $: relatedQuestions = (() => {
    if (!faqItem.category) return [];
    return faqItem.category.items.filter(i => i.id !== faqId).slice(0, 3);
  })();
</script>

<!-- Page Header Start -->
<div class="page-header">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <!-- Page Header Box Start -->
        <div class="page-header-box">
          <h1 class="text-anime-style-3" data-cursor="-opaque">FAQ Details</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/faq">FAQ</a></li>
              <li class="breadcrumb-item active" aria-current="page">Details</li>
            </ol>
          </nav>
        </div>
        <!-- Page Header Box End -->
      </div>
    </div>
  </div>
</div>
<!-- Page Header End -->

<!-- FAQ Detail Section Start -->
<div class="faq-detail-section page-faq-detail">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        {#if faqItem.item}
        <!-- FAQ Detail Content Start -->
        <div class="faq-detail-content">
          <!-- Back Button -->
          <div class="back-to-faq">
            <a href="/faq" class="btn-default">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right: 8px;">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back to FAQ
            </a>
          </div>

          <!-- FAQ Detail Card -->
          <div class="faq-detail-card">
            <div class="faq-detail-header">
              <div class="faq-category-badge">
                <span class="category-dot"></span>
                <span class="category-name">{faqItem.category?.title}</span>
              </div>
              <h2 class="faq-detail-title">{faqItem.item.q}</h2>
            </div>

            <div class="faq-detail-body">
              <div class="faq-detail-answer">
                <p>{faqItem.item.a}</p>
              </div>

              <!-- Related Questions -->
              {#if relatedQuestions.length > 0}
              <div class="related-questions">
                <h3>Related Questions</h3>
                <ul>
                  {#each relatedQuestions as related}
                    <li><a href="/faq/view/{related.id}">{related.q}</a></li>
                  {/each}
                </ul>
              </div>
              {/if}

              <!-- Share Section -->
              <div class="faq-share">
                <h4>Share this FAQ</h4>
                <div class="share-buttons">
                  <button class="share-btn" on:click={() => navigator.share({title: 'Maternanet FAQ', text: faqItem.item?.q, url: window.location.href})}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                    Share
                  </button>
                  <button class="share-btn" on:click={() => navigator.clipboard.writeText(window.location.href)}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="faq-detail-cta">
            <div class="cta-content">
              <h3>Still have questions?</h3>
              <p>Can't find what you're looking for? Our team is here to help.</p>
              <div class="cta-buttons">
                <a href="mailto:info@maternanet.com" class="btn-primary">Email our team</a>
                <a href="mailto:owinoaketch@maternanet.com" class="btn-ghost">Speak to our CEO</a>
              </div>
            </div>
          </div>
        </div>
        <!-- FAQ Detail Content End -->
        {:else}
          <div class="faq-detail-content text-center py-5" style="margin-top: 2rem;">
            <h2>FAQ Not Found</h2>
            <p>The question you are looking for does not exist.</p>
            <a href="/faq" class="btn-default mt-3" style="display:inline-block; margin-top:20px;">Return to FAQ</a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
<!-- FAQ Detail Section End -->
