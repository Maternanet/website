<script>
	import { onMount, onDestroy } from 'svelte';
	let current = 0;

	const testimonials = [
		{
			text: `I was 28km from the nearest clinic with no transport. I worried constantly about my baby. Maternanet's AI monitoring flagged a high-risk sign at 6 months — something I would have missed until it was too late. I got care immediately, and my baby is healthy.`,
			name: 'Lucy Mwangi',
			role: 'Market Trader',
			location: 'Nairobi',
			outcome: '✓ Detected complications early',
			image: '/images/testimonial1.jpg'
		},
		{
			text: `As a subsistence farmer, I couldn't afford the clinic visits. Maternanet's micro-savings wallet let me save $0.30/week without stress. When I went into pre-eclampsia, I had money saved and didn't have to choose between care and feeding my family.`,
			name: 'Janet Wahu',
			role: 'Subsistence Farmer',
			location: 'Kiambu',
			outcome: '✓ Eliminated financial barriers',
			image: '/images/testimonial2.jpg'
		},
		{
			text: `I didn't know if what I was experiencing was normal. My mother gave me different advice than my neighbor. Maternanet's personalized AI guidance on 2G network gave me medically accurate information I could trust. I finally understood my pregnancy.`,
			name: 'Beatrice Otieno',
			role: 'Student',
			location: 'Kajiado',
			outcome: '✓ Replaced confusion with confidence',
			image: '/images/testimonial3.jpg'
		},
		{
			text: `I'm a first-time mother in a remote area with no nearby clinics. A Digital Doula visited me at home every month, checked my vitals with AI guidance, and answered my questions. My baby is 2 months old now, healthy, and I avoided an unnecessary clinic trip that would have cost me weeks of income.`,
			name: 'Mary Soipan',
			role: 'Stay-at-home-mom',
			location: 'Narok',
			outcome: '✓ Care came to my doorstep',
			image: '/images/testimonial4.jpg'
		}
	];

	function next() {
		current = (current + 1) % testimonials.length;
	}

	function prev() {
		current = (current - 1 + testimonials.length) % testimonials.length;
	}

	let intervalId;

	onMount(() => {
		intervalId = setInterval(() => {
			next();
		}, 3000); // Change testimonial every 3 seconds (3000 milliseconds)

		return () => {
			clearInterval(intervalId); // Clear interval when component is destroyed
		};
	});

	// Optional: If you want to pause the slideshow on hover, you'd add more logic here.
</script>

<style>
	.section {
		text-align: center;
		padding: 5rem 1rem 3rem;
		background-color: #ffffff;
	}

	.section h3 {
		color: #f76c6c;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 0.5rem;
	}

	.section h2 {
		font-size: 2.75rem;
		font-weight: 800;
		margin-bottom: 1rem;
		background: linear-gradient(to right, #880ed4, #f76c6c);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.section p {
		color: #444;
		font-size: 1.125rem;
		max-width: 800px;
		margin: 0 auto 2rem;
		line-height: 1.7;
	}

	.card {
		background-color: #f5f7fa;
		padding: 2rem;
		border-radius: 2rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
		max-width: 1000px;
		margin: 2rem auto;
		min-height: 300px;
	}

	.testimonial-image {
		width: 100px; /* Adjust as needed */
		height: 100px; /* Adjust as needed */
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	.quote-icon {
		font-size: 3rem;
		color: #880ed4;
		margin-bottom: 1rem;
	}

	.text {
		font-size: 1.25rem;
		color: #333;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.name {
		font-weight: bold;
		color: #880ed4;
		font-size: 1.3rem;
	}

	.meta {
		color: #555;
		font-size: 1rem;
		line-height: 1.4;
	}

	.nav-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 2rem;
	}

	button {
		background: #ffffff;
		border: 2px solid #f76c6c;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: #f76c6c;
		font-size: 1.5rem;
		transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
	}

	.outcome-badge {
		display: inline-block;
		background-color: #53C4AB;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-weight: 600;
		font-size: 0.9rem;
		margin: 1rem 0;
	}

</style>

<section class="section">
	<h3>Real Impact, Real Lives</h3>
	<h2>Mothers like you transformed their pregnancies</h2>
	<p>
		Each story shows how Maternanet's solutions directly address the pain points mothers face — from distance and cost to fear and misinformation. See how mothers solved their biggest challenges.
	</p>

	<div class="card">
		<div class="quote-icon">❝</div>
		<img src={testimonials[current].image} alt={testimonials[current].name} class="testimonial-image" />
		<div class="text">{testimonials[current].text}</div>
		<div class="outcome-badge">{testimonials[current].outcome}</div>
		<div class="name">{testimonials[current].name}</div>
		<div class="meta">
			{testimonials[current].role}<br />
			{testimonials[current].location}
		</div>
	</div>

	<div class="nav-buttons">
		<button on:click={prev}>←</button>
		<button on:click={next}>→</button>
	</div>
</section>