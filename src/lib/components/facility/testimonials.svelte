<script lang="ts">
    import { fade } from "svelte/transition";
    import { onMount, onDestroy } from "svelte";

    let current = 0;
    const intervalTime = 3000;
    let interval: number;

    const testimonials = [
        {
            name: "Grace A.",
            role: "First-time mom",
            message:
                "Maternanet helped me navigate my first pregnancy with ease and confidence.",
            image: "../static/pregnantwoman1.webp",
        },
        {
            name: "Fatima K.",
            role: "Midwife & community health worker",
            message:
                "The resources here are accurate and culturally relevant. I share them often.",
            image: "../static/pregnantwoman2.avif",
        },
        {
            name: "Ngozi M.",
            role: "Mother of 3",
            message:
                "The community support on Maternanet is unlike anything else. I feel heard and supported.",
            image: "../static/pregnantwoman3.avif",
        },
    ];

    function prev() {
        current = (current - 1 + testimonials.length) % testimonials.length;
        resetInterval();
    }

    function next() {
        current = (current + 1) % testimonials.length;
        resetInterval();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(() => {
            current = (current + 1) % testimonials.length;
        }, intervalTime);
    }

    onMount(() => {
        interval = setInterval(() => {
            current = (current + 1) % testimonials.length;
        }, intervalTime);
    });

    onDestroy(() => clearInterval(interval));
</script>

<svelte:head>
    <title>Testimonials</title>
</svelte:head>

<section class="carousel-section">
    <h1>What People Are Saying</h1>
    <p class="intro">
        Stories from moms and professionals who use Maternanet every day.
    </p>

    <div
        class="carousel"
        on:mouseenter={() => clearInterval(interval)}
        on:mouseleave={resetInterval}
    >
        <button on:click={prev} class="nav left">&larr;</button>

        {#each testimonials as t, i}
            {#if i === current}
                <div class="testimonial-card" transition:fade>
                    <img src={t.image} alt={`Photo of ${t.name}`} />
                    <blockquote>"{t.message}"</blockquote>
                    <p class="name">{t.name}</p>
                    <p class="role">{t.role}</p>
                </div>
            {/if}
        {/each}

        <button on:click={next} class="nav right">&rarr;</button>
    </div>
</section>

<style>
    .carousel-section {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    .intro {
        margin-bottom: 2rem;
        color: #666;
    }

    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position: relative;
        min-height: 360px;
    }

    .testimonial-card {
        background: #fff;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
    }

    .testimonial-card img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    blockquote {
        font-style: italic;
        margin-bottom: 1rem;
    }

    .name {
        font-weight: bold;
        margin-bottom: 0.25rem;
    }

    .role {
        font-size: 0.875rem;
        color: #999;
    }

    .nav {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        padding: 0.5rem;
        transition: color 0.3s ease;
    }

    .nav:hover {
        color: #333;
    }

    @media (max-width: 500px) {
        .carousel {
            flex-direction: column;
        }

        .nav {
            font-size: 1.5rem;
        }
    }
</style>