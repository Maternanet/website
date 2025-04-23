<!-- /home/aketch/Desktop/website/website/src/routes/about/+page.svelte -->
<script>
  // No specific JavaScript logic needed for this static content page yet.
</script>

<section class="section-padding">
  <div class="container">

    <!-- Page Title -->
    <div class="row mt-5 mb-5">
      <div class="col-md-12 text-center">
        <h1 class="heading-title">About Us</h1>
      </div>
    </div> 

    <!-- Vision Section -->
    <div class="row content-section mb-5"> 
      <div class="col-md-10 offset-md-1"> 
        <h2 class="mb-3">Our Vision</h2> 
        <p>
          We envision a world where every mother can access timely, personalized, and quality
          maternal care, regardless of geography or resources. We aim to harness AI, digital tools, and
          community collaborations to reduce maternal mortality from 533 to 100 per 100,000 live births,
          transforming maternal health outcomes across Africa and beyond.
        </p>
      </div>
    </div>

    <!-- Approach Section -->
    <div class="row content-section mb-5"> 
      <div class="col-md-10 offset-md-1">
        <h2 class="mb-4">Our Approach</h2> 
        <div class="row">
          <!-- Item 1: Community-Powered Design -->
          <div class="col-md-4 mb-3"> <!-- Use columns for layout -->
            <h3 class="h5">Community-Powered Design</h3> 
            <p>
              We co-create solutions with mothers, healthcare providers, and community leaders,
              ensuring our interventions address real-world needs and are context-specific.
            </p>
          </div>
          <!-- Item 2: AI-First Innovation -->
          <div class="col-md-4 mb-3">
            <h3 class="h5">AI-First Innovation</h3>
            <p>
              By embedding predictive analytics and data-driven insights into every touchpoint, we
              deliver proactive care recommendations, unique in maternal health.
            </p>
          </div>
          <!-- Item 3: Multi-channel Accessibility -->
          <div class="col-md-4 mb-3">
            <h3 class="h5">Multi-channel Accessibility</h3>
            <p>
              Our mobile, web, and SMS-based services bridge connectivity gaps, providing
              uninterrupted support even in low-bandwidth areas.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Maternanet? Section -->
    <!-- Corrected: Changed comment syntax -->
    <div class="row content-section mb-5"> <!-- Added margin-bottom -->
       <div class="col-md-10 offset-md-1">
        <h2 class="mb-4">Why Maternanet?</h2> <!-- Added margin-bottom -->
         <div class="row">
           <!-- Item 1: Scalable Architecture -->
           <div class="col-md-4 mb-3">
             <h3 class="h5">Scalable Architecture</h3>
             <p>
               Built on a secure, distributed system with CI/CD pipelines for rapid iteration and robust
               performance under load.
             </p>
           </div>
           <!-- Item 2: Proven Impact -->
           <div class="col-md-4 mb-3">
             <h3 class="h5">Proven Impact</h3>
             <p>
               Pilot programs have achieved a 21% increase in antenatal attendance and a 15% drop
               in missed appointments.
             </p>
           </div>
           <!-- Item 3: Holistic Care Model -->
           <div class="col-md-4 mb-3">
             <h3 class="h5">Holistic Care Model</h3>
             <p>
               From enrollment to postpartum support, our integrated care pathways ensure continuity
               and quality at every stage.
             </p>
           </div>
         </div>
       </div>
    </div>

    <!-- Values Section -->
    <div class="row content-section mb-5"> 
      <div class="col-md-10 offset-md-1">
        <h2 class="mb-4">Our Values</h2> 
        <p class="text-center lead mb-4"> 
          <strong>Bold. Creative. Kind.</strong>
        </p>
        <ul class="list-unstyled">
          <li class="mb-3"> 
            <strong>Trust & Transparency:</strong> We operate with openness, ensuring clarity in our processes and communications with users and partners. 
          </li>
          <li class="mb-3">
            <strong>Empathy and Respect:</strong> Every feature is carefully designed with deep respect for cultural contexts and individual user needs.
          </li>
          <li class="mb-3">
            <strong>Collaboration and Inclusion:</strong> We partner across sectors—governments, NGOs, tech firms—to drive collective impact and ensure diverse voices shape our solutions.
          </li>
        </ul>
      </div>
    </div>

    <!-- Call to Action Section -->
    <!-- Corrected: Changed comment syntax -->
    <div class="row cta-section text-center py-5 bg-light rounded"> 
      <div class="col-md-8 offset-md-2">
        <h2 class="mb-3">Join Us</h2>
        <p class="lead mb-4">
          Be part of the movement redefining maternal healthcare for a brighter future.
        </p>
         <a href="/learn-more" class="btn btn-primary btn-lg mx-2">Learn More</a>
         <a href="/partner" class="btn btn-secondary btn-lg mx-2">Partner with Us</a>
      </div>
    </div>

  </div>
</section>

<style>
  /* Add component-specific styles here if needed, */
  /* but prefer global styles for consistency. */

  section.section-padding {
    padding-top: 6rem;

  }
 
  h1, h2, h3 {
    font-weight: 600; 
  }


  .content-section {
     /* margin-bottom: 4rem; 
  }

 
  .cta-section {
    /* background-color: #f8f9fa; 
    /* border-radius: 8px; 
  }


  ul li strong {
      display: block; /* Makes the bold text appear on its own line or easier to style */
      margin-bottom: 0.25rem;
  }
</style>
