<script>
    import Testimonial from '$lib/components/facility/testimonials.svelte'

    let activeProfile = 'mothers';

    const fallbackProfileImage = '/images/404-error-img.png';

    function onProfileImageError(event) {
        event.target.src = fallbackProfileImage;
    }

    const profileCards = [
        {
            id: 'mothers',
            title: 'Expectant Mothers',
            image: '/images/mother.jpg',
            painPoints: [
                '25-30 km gap to clinic with no reliable transport',
                'Uncertainty about baby health and risk signs',
                'High out-of-pocket costs for emergency care'
            ],
            solutions: [
                'AI-backed remote monitoring and risk alerts via SMS/USSD',
                'Digital Doula home visits and local care coordination',
                'Micro-savings wallet + payment flexibility for safe delivery'
            ]
        },
        {
            id: 'clinics',
            title: 'Hospitals & Clinics',
            image: '/images/clinic.jpg',
            painPoints: [
                'Overwhelmed maternity wards with uncertain case loads',
                'Late referrals creating emergency pressure',
                'Limited visibility into community-level risk trends'
            ],
            solutions: [
                'Predictive dashboard for patient volume and risk',
                'Early triage to reduce unnecessary referrals',
                'Seamless EMR/DHIS2 integration for data-driven planning'
            ]
        },
        {
            id: 'policy',
            title: 'Government & Insurers',
            image: '/images/policy (2).jpg',
            painPoints: [
                'Inadequate data for budgeting and policy decisions',
                'Expensive emergency obstetric care for public systems',
                'Lack of measurable outcomes for maternal health programs'
            ],
            solutions: [
                'Real-time population health analytics for counties',
                'Cost-effectiveness evidence to justify investments',
                'Outcome tracking to validate impact in lives saved'
            ]
        }
    ];
</script>

<!-- Hero Section Start -->
<div class="hero">
  <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6">
                  <!-- Hero Content Start -->
                  <div class="hero-content">
                      <!-- Section Title Start -->
                      <div class="section-title">
                          <h1 class="text-anime-style-3" data-cursor="-opaque">No mother should <span style="color: #F67C4E;">die</span> giving <span style="color: #53C4AB;">life</span>.</h1>
                          <p class="wow fadeInUp" data-wow-delay="0.25s">You're carrying new life, but you're worried. Worried about whether your baby is healthy. Worried about affording care. Worried about the 25km journey to the nearest clinic. You shouldn't have to face this alone.</p>
                      </div>
                      <!-- Section Title End -->

                      <!-- Hero Content Body Start -->
                      <div class="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                          <a href="/contacts" class="btn-default btn-highlighted">Start Your Journey</a>

                      </div>
                      <!-- Hero Content Body End -->
                       
                      <!-- Hero Content Footer Start -->
                      <div class="hero-content-footer">
                          <!-- Hero Footer Box Start -->
                          <div class="hero-footer-box wow fadeInUp" data-wow-delay="0.25s">
                              <div class="icon-box">
                                  <img src="images/icon-hero-footer-1.svg" alt="">
                              </div>
                              <div class="hero-footer-box-content">
                                  <p>Personalized guidance</p>
                              </div>
                          </div>
                          <!-- Hero Footer Box End -->

                          <!-- Hero Footer Box Start -->
                          <div class="hero-footer-box wow fadeInUp" data-wow-delay="0.5s">
                              <div class="icon-box">
                                  <img src="images/icon-hero-footer-2.svg" alt="">
                              </div>
                              <div class="hero-footer-box-content">
                                  <p>Care at your doorstep</p>
                              </div>
                          </div>
                          <!-- Hero Footer Box End -->

                          <!-- Hero Footer Box Start -->
                          <div class="hero-footer-box wow fadeInUp" data-wow-delay="0.75s">
                              <div class="icon-box">
                                  <img src="images/icon-hero-footer-3.svg" alt="">
                              </div>
                              <div class="hero-footer-box-content">
                                  <p>Affordable & accessible</p>
                              </div>
                          </div>
                          <!-- Hero Footer Box End -->
                      </div>
                      <!-- Hero Content Footer End -->
                  </div>
                  <!-- Hero Content End -->
              </div>

              <div class="col-lg-6">
                  <!-- Hero Images Start -->
                  <div class="hero-images">
                      <!-- Hero Image Box Start -->
                      <div class="hero-image-box">
                          <!-- Hero Image Start -->
                          <div class="hero-img-1">
                              <figure class="image-anime ">
                                  <img src="/images/age.jpeg" alt="">
                              </figure>
                          </div>
                          <!-- Hero Image End -->

                          <!-- Hero Image Start -->
                          <div class="hero-img-2">
                              <figure class="image-anime ">
                                  <img src="images/age.png" alt="">
                              </figure>
                          </div>
                          <!-- Hero Image End -->
                      </div>
                      <!-- Hero Image Box End -->

                      <!-- Hero Image Box Start -->
                      <div class="hero-image-box">
                          <!-- Hero Image Start -->
                          <div class="hero-img-3">
                              <figure class="image-anime ">
                                  <img src="images/age (5).jpeg" alt="">
                              </figure>
                          </div>  
                          <!-- Hero Image End -->

                          <!-- Hero Image Start -->
                          <div class="hero-img-4">
                              <figure class="image-anime ">
                                  <img src="images/age (7).jpg" alt="">
                              </figure>
                          </div>  
                          <!-- Hero Image End -->
                      </div>
                      <!-- Hero Image Box End -->

                      <!-- Hero Image Box Start -->
                      <div class="hero-image-box">
                          <!-- Hero Image Start -->
                          <div class="hero-img-5">
                              <figure class="image-anime ">
                                  <img src="images/age (6).jpg" alt="">
                              </figure>
                          </div>
                          <!-- Hero Image End -->
                      </div>
                      <!-- Hero Image Box End -->
                  </div>
                  <!-- Hero Image End -->
              </div>
          </div>
      </div>
</div>
<!-- Hero Section End -->

<!-- Your Challenges Section Start -->
<div class="about-us">
  <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-6">
              <!-- About Image Start -->
              <div class="about-image">
                  <div class="about-img">
                      <figure class="image-anime">
                          <img src="images/age (2).webp" alt="">
                      </figure>
                  </div>

                  <!-- Happy Patients Counter Start -->
                  <div class="happy-patients-counter">
                      <div class="happy-patients-counter-box">
                          <div class="icon-box">
                              <img src="images/icon-happy-patients.svg" alt="">
                          </div>

                          <div class="happy-patients-counter-content">
                              <h3><span class="counter">11000</span>+</h3>
                              <p>mothers we've helped</p>
                          </div>
                      </div>
                  </div>
                  <!-- Happy Patients Counter End -->
              </div>
              <!-- About Image End -->
          </div>
          <div class="col-lg-6">
              <!-- About Us Content Start -->
               <div class="about-us-content">
                  <!-- Section Title Start -->
                  <div class="section-title">
                      <h3 class="wow fadeInUp">you're not alone</h3>
                      <h2 class="text-anime-style-3" data-cursor="-opaque">Why Mothers Like You Are Struggling</h2>
                      <p class="wow fadeInUp" data-wow-delay="0.25s">Every day, expecting mothers in Africa face a silent crisis. You want the best for your baby, but barriers stand in your way:</p>
                  </div>
                  <!-- Section Title End -->

                  <!-- About Content Body Start -->
                  <div class="about-content-body">
                      <div class="row align-items-center">
                          <div class="col-md-7">
                              <!-- About Content List Start -->
                              <div class="about-content-list wow fadeInUp" data-wow-delay="0.5s">
                                  <ul>
                                      <li><strong>60% of high-risk pregnancies go undetected</strong> — including yours, without proper monitoring</li>
                                      <li><strong>You're 25-30km away</strong> from the nearest clinic, with no transport and unpredictable roads</li>
                                      <li><strong>85% of care costs are out-of-pocket</strong> — forcing families to choose between care and survival</li>
                                      <li><strong>You don't know what's normal</strong> — conflicting advice from neighbors, family, and limited access to expert guidance</li>
                                  </ul>
                              </div>
                              <!-- About Content List End -->
                          </div>

                          <div class="col-md-5">
                              <!-- About Content Box Start -->
                              <div class="experience-counter wow fadeInUp" data-wow-delay="0.5s">
                                  <div class="icon-box">
                                      <img src="images/icon-experience-year2.svg" alt="">
                                  </div>
                                  <div class="experience-counter-content">
                                      <h3><span class="counter">530</span></h3>
                                      <p>mothers die every day in Africa from preventable causes</p>
                                  </div>
                              </div>
                              <!-- About Content Box End -->
                          </div>
                      </div>
                  </div>
                  <!-- About Content Body End -->

                  <!-- About Content Btn Start -->
                  <div class="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                      <a href="#how-we-help" class="btn-default">See how we help</a>
                  </div>
                  <!-- About Content Btn End -->
               </div>
              <!-- About Us Content End -->
          </div>
      </div>
  </div>
</div>
<!-- Your Challenges Section End -->

<!-- User Profiles Section Start -->
<div class="user-profile-section" style="background:#fff; padding:60px 0;">
    <div class="container">
        <div class="section-title text-center" style="margin-bottom:40px;">
            <h3 class="wow fadeInUp">Who We Serve</h3>
            <h2 class="text-anime-style-3" data-cursor="-opaque">Real Solutions for Every Role</h2>
            <p style="color:#666; max-width:720px; margin:0 auto;">Whether you are a mother, a clinic leader, or a policymaker, this is built around your real challenges and outcomes.</p>
        </div>

        <div class="profile-tabs" style="display:flex; justify-content:center; gap:12px; margin-bottom:30px; flex-wrap:wrap;">
            {#each profileCards as profile}
                <button
                    on:click={() => activeProfile = profile.id}
                    class="profile-tab"
                    style="padding:10px 20px; border-radius:30px; border:1px solid #e0e0e0; background:{activeProfile === profile.id ? '#1f5e8e' : '#fff'}; color:{activeProfile === profile.id ? '#fff' : '#1c2348'}; cursor:pointer; font-weight:700;">
                    {profile.title}
                </button>
            {/each}
        </div>

        <div class="profile-content" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px;">
            {#each profileCards as profile}
                {#if activeProfile === profile.id}
                    <div class="profile-card" style="display:flex; gap:18px; align-items:flex-start; padding:24px; border:1px solid #ececec; border-radius:16px; box-shadow:0 5px 20px rgba(0,0,0,0.05); background:#fff;">
                        {#if profile.image}
                            <div style="flex: 0 0 40%; max-width:40%;">
                                <img src={profile.image} alt={profile.title} style="width:100%; height:200px; object-fit:cover; border-radius:12px;" on:error={onProfileImageError} />
                            </div>
                        {/if}
                        <div style="flex: 1 1 60%;">
                            <h4 style="margin-bottom:12px;">{profile.title}</h4>
                            <div style="font-weight:700; color:#333; margin-bottom:8px;">Top Pain Points</div>
                            <ul style="margin-bottom:14px; padding-left:20px; color:#555;">
                                {#each profile.painPoints as pain}
                                    <li style="margin-bottom:8px;">{pain}</li>
                                {/each}
                            </ul>
                            <div style="font-weight:700; color:#333; margin-bottom:8px;">How Maternanet Helps</div>
                            <ul style="padding-left:20px; color:#555;">
                                {#each profile.solutions as sol}
                                    <li style="margin-bottom:8px;">{sol}</li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>
<!-- User Profiles Section End -->

<!-- What You Get Section Start -->
<div class="our-service">
  <div class="container">
      <div class="row section-row">
          <div class="col-lg-12">
              <!-- Section Title Start -->
              <div class="section-title">
                  <h3 class="wow fadeInUp">how we help</h3>
                  <h2 class="text-anime-style-3" data-cursor="-opaque">Everything you need to have a safe, healthy pregnancy — right where you are</h2>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">Designed for mothers in rural and remote areas where access to care has been impossible until now.</p>
              </div>
              <!-- Section Title End -->
          </div>
      </div>

      <div class="row">
          <div class="col-lg-3 col-md-6">
              <!-- Services Item Start -->
              <div class="service-item wow fadeInUp">
                  <div class="icon-box">
                      <img src="images/icon-experience-year1.svg" alt="">
                  </div>
                  <div class="service-content">
                      <h3>Know Your Baby is Safe 🤰</h3>
                      <p><strong>Solves:</strong> Not knowing if your baby is healthy<br><br>Get real-time AI monitoring of your pregnancy, spotting high-risk signs weeks before they become emergencies.</p>
                  </div>
                  <div class="service-btn">
                      <a href="/services" class="redmore-btn">learn more</a>
                  </div>
              </div>
              <!-- Services Item End -->
          </div>

          <div class="col-lg-3 col-md-6">
              <!-- Services Item Start -->
              <div class="service-item wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon-box">
                      <img src="images/icon-experience-year1.svg" alt="">
                  </div>
                  <div class="service-content">
                      <h3>Care Comes to You 🏥</h3>
                      <p><strong>Solves:</strong> The 25-30km journey to clinics<br><br>Community Health Workers trained with our AI visit you at home. No 6-hour journeys on bad roads.</p>
                  </div>
                  <div class="service-btn">
                      <a href="/services" class="redmore-btn">learn more</a>
                  </div>
              </div>
              <!-- Services Item End -->
          </div>

          <div class="col-lg-3 col-md-6">
              <!-- Services Item Start -->
              <div class="service-item wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon-box">
                      <img src="images/icon-experience-year1.svg" alt="">
                  </div>
                  <div class="service-content">
                      <h3>Affordable Care 💚</h3>
                      <p><strong>Solves:</strong> 85% out-of-pocket costs<br><br>Micro-savings wallets let you save as little as $0.30/week. No emergency debt when baby is born.</p>
                  </div>
                  <div class="service-btn">
                      <a href="/services" class="redmore-btn">learn more</a>
                  </div>
              </div>
              <!-- Services Item End -->
          </div>

          <div class="col-lg-3 col-md-6">
              <!-- Services Item Start -->
              <div class="service-item wow fadeInUp" data-wow-delay="0.6s">
                  <div class="icon-box">
                      <img src="images/icon-experience-year1.svg" alt="">
                  </div>
                  <div class="service-content">
                      <h3>Expert Guidance, Always 📱</h3>
                      <p><strong>Solves:</strong> Conflicting advice & misinformation<br><br>Personalized weekly insights from real doctors. Works on 2G networks, even offline.</p>

                  </div>
                  <div class="service-btn">
                      <a href="/services" class="redmore-btn">learn more</a>
                  </div>
              </div>
              <!-- Services Item End -->
          </div>
      </div>
  </div>
</div>
<!-- What You Get Section End -->

<!-- Your Journey Section Start -->
<div class="our-process">
  <div class="container">
      <div class="row">
          <div class="col-lg-6">
              <div class="our-process-content">
                  <!-- Section Title Start -->
                  <div class="section-title">
                      <h3 class="wow fadeInUp">just 3 steps</h3>
                      <h2 class="text-anime-style-3" data-cursor="-opaque">From Worry to Peace of Mind</h2>
                      <p class="wow fadeInUp" data-wow-delay="0.25s">Your path to safe, supported maternal care starts right here. No long clinic visits. No stress. Just you, your baby, and expert support whenever you need it.</p>
                  </div>
                  <!-- Section Title End -->

                  <!-- Section Button Start -->
                  <div class="section-btn wow fadeInUp" data-wow-delay="0.5s">
                      <a href="/contacts" class="btn-default">Join Now — It's Free</a>
                  </div>
                  <!-- Section Button End -->
              </div>
          </div>

          <div class="col-lg-6">
              <!-- Our Process List Start -->
              <div class="our-process-list wow fadeInUp" data-wow-delay="0.25s">
                  <!-- Process Item Start -->
                  <div class="our-process-item">
                      <div class="icon-box">
                          <figure>
                              <img src="images/icon-process-1.svg" alt="">
                          </figure>
                      </div>
                      <div class="process-item-content">
                          <h3>Step 1: Sign Up (30 seconds)</h3>
                          <p>Create your account and tell us about your pregnancy. It's free, and your information is completely private and secure.</p>
                      </div>
                  </div>
                  <!-- Process Item End -->

                  <!-- Process Item Start -->
                  <div class="our-process-item">
                      <div class="icon-box">
                          <figure>
                              <img src="images/icon-process-2.svg" alt="">
                          </figure>
                      </div>
                      <div class="process-item-content">
                          <h3>Step 2: Get Your AI Companion</h3>
                          <p>Start receiving personalized pregnancy insights, risk monitoring, and health tips. Real guidance from real doctors, tailored just for you.</p>
                      </div>
                  </div>
                  <!-- Process Item End -->

                  <!-- Process Item Start -->
                  <div class="our-process-item">
                      <div class="icon-box">
                          <figure>
                              <img src="images/icon-process-3.svg" alt="">
                          </figure>
                      </div>
                      <div class="process-item-content">
                          <h3>Step 3: Connect to Care</h3>
                          <p>When you need it, connect with trained Community Health Workers or clinics near you. Watch how one mother's worry turned into confidence.</p>
                      </div>
                  </div>
                  <!-- Process Item End -->
              </div>
              <!-- Our Process List End -->
          </div>
      </div>
  </div>
</div>
<!-- Your Journey Section End -->

<!-- Impact Stats Section Start -->
<div class="our-process" style="background-color: #f9f9f9; padding: 5rem 0;">
  <div class="container">
      <div class="row section-row">
          <div class="col-lg-12" style="text-align: center; margin-bottom: 3rem;">
              <div class="section-title">
                  <h3 class="wow fadeInUp">real impact, real lives</h3>
                  <h2 class="text-anime-style-3" data-cursor="-opaque">What This Means for Mothers Like You</h2>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">These aren't just org metrics—they're mothers who got their lives back.</p>
              </div>
          </div>
      </div>

      <div class="row" style="text-align: center;">
          <div class="col-lg-3 col-md-6" style="margin-bottom: 2rem;">
              <div class="wow fadeInUp">
                  <div style="font-size: 2.5rem; font-weight: 800; color: #F67C4E; margin-bottom: 0.5rem;">
                      <span class="counter">11000</span>+
                  </div>
                  <p style="font-size: 1.1rem; color: #555;">Mothers Served</p>
                  <p style="color: #888; font-size: 0.95rem;">Mothers who found their way out of the crisis</p>
              </div>
          </div>

          <div class="col-lg-3 col-md-6" style="margin-bottom: 2rem;">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div style="font-size: 2.5rem; font-weight: 800; color: #53C4AB; margin-bottom: 0.5rem;">
                      <span class="counter">410</span>+
                  </div>
                  <p style="font-size: 1.1rem; color: #555;">Active Digital Doulas</p>
                  <p style="color: #888; font-size: 0.95rem;">Trained community health workers bringing care home</p>
              </div>
          </div>

          <div class="col-lg-3 col-md-6" style="margin-bottom: 2rem;">
              <div class="wow fadeInUp" data-wow-delay="0.4s">
                  <div style="font-size: 2.5rem; font-weight: 800; color: #880ED4; margin-bottom: 0.5rem;">
                      <span class="counter">12</span>+
                  </div>
                  <p style="font-size: 1.1rem; color: #555;">Maternal Deaths Prevented/Year</p>
                  <p style="color: #888; font-size: 0.95rem;">Complications caught before they became emergencies</p>
              </div>
          </div>

          <div class="col-lg-3 col-md-6" style="margin-bottom: 2rem;">
              <div class="wow fadeInUp" data-wow-delay="0.6s">
                  <div style="font-size: 2.5rem; font-weight: 800; color: #F67C4E; margin-bottom: 0.5rem;">
                      <span class="counter">70</span>%
                  </div>
                  <p style="font-size: 1.1rem; color: #555;">Cost Reduction in Early Care</p>
                  <p style="color: #888; font-size: 0.95rem;">Catching problems early = fewer emergencies = less money spent</p>
              </div>
          </div>
      </div>

      <div class="row" style="margin-top: 3rem;">
          <div class="col-lg-12" style="text-align: center;">
              <p style="font-size: 1.1rem; color: #555; max-width: 700px; margin: 0 auto; line-height: 1.8;">
                  <strong>The real win:</strong> You get the care you deserve, without the financial burden. Your baby stays healthy. Your family stays whole. That's what Maternanet makes possible.
              </p>
          </div>
      </div>
  </div>
</div>
<!-- Impact Stats Section End -->

<!-- Our Testimonial Section Start -->
<Testimonial></Testimonial>
<!-- Our Testimonial Section End -->