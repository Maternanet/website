<script>
	import { onMount, onDestroy } from 'svelte';
	let current = 0;

	const testimonials = [
		{
			text: `When I found out I was pregnant, I didn’t know where to turn. Maternanet gave me access to advice and check-up reminders without judgment. It helped me understand what was happening to my body and what to expect.`,
			name: 'Lucy Mwangi',
			role: 'Market Trader,',
			location: 'Nairobi',
			image: '/images/testimonial1.jpg'
		},
		{
			text: `Thanks to Maternanet, I felt less alone throughout my pregnancy. The platform connected me to resources I never knew existed.`,
			name: 'Janet Wahu',
			role: 'Subsistence Farmer,',
			location: 'Kiambu',
			image: '/images/testimonial2.jpg'
		},
		{
			text: `I appreciated how easy it was to get accurate information and reminders through my phone. It made a huge difference in my journey.`,
			name: 'Beatrice Otieno',
			role: 'Student,',
			location: 'Kajiado',
			image: '/images/testimonial3.jpg'
		},
		{
			text: `The emotional support and weekly advice kept me strong, especially as a first-time mother. I'm truly grateful.`,
			name: 'Mary Soipan',
			role: 'Stay-at-home-mom,',
			location: 'Narok',
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

	button:hover {
		background-color: #f76c6c;
		color: white;
	}
</style>

<section class="section">
	<h3>Testimonials</h3>
	<h2>Listen from our happy patients</h2>
	<p>
		Maternanet works hand-in-hand with community health workers, clinics, and mothers themselves
		to redesign maternal care from the ground up across Africa's hardest-hit regions.
	</p>

	<div class="card">
		<div class="quote-icon">❝</div>
		<img src={testimonials[current].image} alt={testimonials[current].name} class="testimonial-image" />
		<div class="text">{testimonials[current].text}</div>
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