<script lang="ts">
    import { analytics } from "$lib/utils/analytics";
    import Testimonial from "$lib/components/facility/testimonials.svelte";

    let activeProfile = "mothers";

    const fallbackProfileImage = "/images/404-error-img.png";

    function onProfileImageError(event: Event) {
        (event.target as HTMLImageElement).src = fallbackProfileImage;
    }

    function trackCTA(label: string) {
        analytics.track('cta_click', {
            label,
            page: 'home'
        });
    }

    const profileCards = [
        {
            id: "mothers",
            title: "Expectant Mothers",
            description:
                "We give you the tools and the financial support to have a safe and healthy pregnancy and delivery.",
            image: "/images/mother.jpg",
            painPoints: [
                "25-30 km gap to clinic with no reliable transport.",
                "Uncertainty/anxiety about baby health and risk signs.",
                "High out-of-pocket costs for emergency care.",
            ],
            solutions: [
                "Data-informed remote monitoring and risk alerts via SMS/USSD.",
                "Digital Doula home visits and fast community-to-clinic coordination.",
                "Micro-savings wallet + payment flexibility for safe delivery.",
            ],
            ctaLabel: "Check Availability in Your Region",
            ctaLink: "/contacts#contactForm",
        },
        {
            id: "clinics",
            title: "Hospitals & Clinics",
            description:
                "We provide the tools to save you time, reduce costs, and improve outcomes.",
            image: "/images/clinic.jpg",
            painPoints: [
                "Overwhelmed maternity wards with uncertain case loads.",
                "Late referrals creating emergency pressure.",
                "Limited visibility into community-level risk trends.",
            ],
            solutions: [
                "Predictive dashboard for patient volume and risk stratification.",
                "Early triage to reduce unnecessary referrals.",
                "Seamless EMR/DHIS2 integration for data-driven planning & reporting.",
            ],
            ctaLabel: "Request Integration Setup",
            ctaLink: "/contacts#contactForm",
        },
        {
            id: "policy",
            title: "Government & Insurers",
            description:
                "We provide the data and insights to make informed decisions and improve maternal health outcomes at scale.",
            image: "/images/policy.jpg",
            painPoints: [
                "Inadequate data for budgeting and policy decisions.",
                "Expensive emergency obstetric care for public systems.",
                "Lack of measurable outcomes for maternal health programs.",
            ],
            solutions: [
                "Real-time population health analytics for counties and maternal health programs.",
                "Cost-effectiveness evidence to justify investments and insights into maternal health population-level trends.",
                "Outcome tracking to validate impact in lives saved at scale.",
            ],
            ctaLabel: "Access Analytics Demo",
            ctaLink: "/contacts#contactForm",
        },
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
                        <h1 class="text-anime-style-3" data-cursor="-opaque">
                            No mother should <span style="color: #F67C4E;"
                                >die</span
                            >
                            while giving
                            <span style="color: #53C4AB;">life</span>.
                        </h1>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                            You're carrying new life, but you're worried.
                            Worried about whether your baby is healthy. Worried
                            about affording care. Worried about the 25km journey
                            to the nearest clinic. You shouldn't have to face
                            this alone.
                        </p>
                    </div>
                    <!-- Section Title End -->

                    <!-- Hero Content Body Start -->
                    <div
                        class="hero-content-body wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <a
                            href="/contacts#contactForm"
                            class="btn-default btn-highlighted"
                            on:click={() => trackCTA('Start Your Journey')}
                            >Start Your Journey</a
                        >
                    </div>
                    <!-- Hero Content Body End -->

                    <!-- Hero Content Footer Start -->
                    <div class="hero-content-footer">
                        <!-- Hero Footer Box Start -->
                        <div
                            class="hero-footer-box wow fadeInUp"
                            data-wow-delay="0.25s"
                        >
                            <div class="icon-box">
                                <img
                                    src="images/icon-hero-footer-1.svg"
                                    alt=""
                                />
                            </div>
                            <div class="hero-footer-box-content">
                                <p>Community-based guidance</p>
                            </div>
                        </div>
                        <!-- Hero Footer Box End -->

                        <!-- Hero Footer Box Start -->
                        <div
                            class="hero-footer-box wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div class="icon-box">
                                <img
                                    src="images/icon-hero-footer-2.svg"
                                    alt=""
                                />
                            </div>
                            <div class="hero-footer-box-content">
                                <p>Care at your doorstep</p>
                            </div>
                        </div>
                        <!-- Hero Footer Box End -->

                        <!-- Hero Footer Box Start -->
                        <div
                            class="hero-footer-box wow fadeInUp"
                            data-wow-delay="0.75s"
                        >
                            <div class="icon-box">
                                <img
                                    src="images/icon-hero-footer-3.svg"
                                    alt=""
                                />
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
                            <figure class="image-anime">
                                <img src="/images/age.jpeg" alt="" />
                            </figure>
                        </div>
                        <!-- Hero Image End -->

                        <!-- Hero Image Start -->
                        <div class="hero-img-2">
                            <figure class="image-anime">
                                <img src="images/age.png" alt="" />
                            </figure>
                        </div>
                        <!-- Hero Image End -->
                    </div>
                    <!-- Hero Image Box End -->

                    <!-- Hero Image Box Start -->
                    <div class="hero-image-box">
                        <!-- Hero Image Start -->
                        <div class="hero-img-3">
                            <figure class="image-anime">
                                <img src="images/age (5).jpeg" alt="" />
                            </figure>
                        </div>
                        <!-- Hero Image End -->

                        <!-- Hero Image Start -->
                        <div class="hero-img-4">
                            <figure class="image-anime">
                                <img src="images/age (7).jpg" alt="" />
                            </figure>
                        </div>
                        <!-- Hero Image End -->
                    </div>
                    <!-- Hero Image Box End -->

                    <!-- Hero Image Box Start -->
                    <div class="hero-image-box">
                        <!-- Hero Image Start -->
                        <div class="hero-img-5">
                            <figure class="image-anime">
                                <img src="images/age (6).jpg" alt="" />
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
                            <img src="images/age (2).webp" alt="" />
                        </figure>
                    </div>

                    <!-- Happy Patients Counter Start -->
                    <div class="happy-patients-counter">
                        <div class="happy-patients-counter-box">
                            <div class="icon-box">
                                <img
                                    src="images/icon-happy-patients.svg"
                                    alt=""
                                />
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
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            Why Are Mothers Still Struggling?
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                            Every day,
                            <span
                                style="display: inline-flex; align-items: center; justify-content: center; border: 2px solid #880ED4; border-radius: 50%; min-width: 2.2em; height: 2.2em; color: #880ED4; font-weight: 800; font-size: 1.1em; line-height: 1;"
                                >800</span
                            >
                            mothers in Sub-Saharan Africa face the disheartening
                            fate of preventable death. You want the best for your
                            baby, but barriers stand in your way:
                        </p>
                    </div>
                    <!-- Section Title End -->

                    <!-- About Content Body Start -->
                    <div class="about-content-body">
                        <div class="row g-3">
                            <!-- Card 1: Delay in Seeking Care -->
                            <div class="col-md-4">
                                <div
                                    class="problem-card"
                                    style="padding:22px; border:1px solid #e5e7eb; border-radius:16px; background:#ffffff; display:flex; flex-direction:column; height:100%; position:relative;"
                                >
                                    <!-- Number Badge -->
                                    <div
                                        style="width:32px; height:32px; border-radius:50%; background:#F67C4E; color:#fff; font-weight:800; font-size:0.9rem; display:flex; align-items:center; justify-content:center; margin-bottom:12px;"
                                    >
                                        1
                                    </div>
                                    <!-- Icon -->
                                    <div
                                        style="width:42px; height:42px; border-radius:50%; background:#fff5f0; display:flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:14px;"
                                    >
                                        🕐
                                    </div>
                                    <!-- Title -->
                                    <h4
                                        style="font-size:1rem; font-weight:700; color:#1c2348; margin-bottom:12px;"
                                    >
                                        Delay in Seeking Care
                                    </h4>
                                    <!-- Mother's Quote -->
                                    <blockquote
                                        style="border-left:3px solid #F67C4E; padding-left:10px; margin:0 0 12px; font-style:italic; font-size:0.88rem; color:#F67C4E; line-height:1.5;"
                                    >
                                        "I didn't know something was wrong until
                                        I got rushed to the hospital."
                                    </blockquote>
                                    <!-- Explanation -->
                                    <p
                                        style="font-size:0.85rem; color:#4b5563; line-height:1.6; flex:1; margin-bottom:16px;"
                                    >
                                        Mothers in rural communities often lack
                                        awareness of danger signs due to lack of
                                        diagnostic tools at the community-level.
                                        With 65% of high-risk pregnancies going
                                        undetected, many women don't seek help
                                        until a crisis hits.
                                    </p>
                                    <!-- Insights -->
                                    <div
                                        style="border-top:1px solid #f0f0f0; padding-top:12px; display:flex; flex-direction:column; gap:6px;"
                                    >
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >High-risk pregnancies
                                                undetected.</span
                                            >
                                            <span
                                                style="font-weight:450; color:#F67C4E;"
                                                >65%</span
                                            >
                                        </div>
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >Lack awareness of danger signs.</span
                                            >
                                            <span
                                                style="font-weight:450; color:#F67C4E;"
                                                >79%</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2: Delay in Reaching Care -->
                            <div class="col-md-4">
                                <div
                                    class="problem-card"
                                    style="padding:22px; border:1px solid #e5e7eb; border-radius:16px; background:#ffffff; display:flex; flex-direction:column; height:100%; position:relative;"
                                >
                                    <!-- Number Badge -->
                                    <div
                                        style="width:32px; height:32px; border-radius:50%; background:#53C4AB; color:#fff; font-weight:800; font-size:0.9rem; display:flex; align-items:center; justify-content:center; margin-bottom:12px;"
                                    >
                                        2
                                    </div>
                                    <!-- Icon -->
                                    <div
                                        style="width:42px; height:42px; border-radius:50%; background:#f0fdf9; display:flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:14px;"
                                    >
                                        📍
                                    </div>
                                    <!-- Title -->
                                    <h4
                                        style="font-size:1rem; font-weight:700; color:#1c2348; margin-bottom:12px;"
                                    >
                                        Delay in Reaching Care
                                    </h4>
                                    <!-- Mother's Quote -->
                                    <blockquote
                                        style="border-left:3px solid #53C4AB; padding-left:10px; margin:0 0 12px; font-style:italic; font-size:0.88rem; color:#2da88e; line-height:1.5;"
                                    >
                                        "The nearest clinic is 25 km away. With
                                        no ambulance, getting there is a
                                        nightmare when an emergency occurs."
                                    </blockquote>
                                    <!-- Explanation -->
                                    <p
                                        style="font-size:0.85rem; color:#4b5563; line-height:1.6; flex:1; margin-bottom:16px;"
                                    >
                                        When complications arise, mothers face
                                        treacherous journeys of 25–30 km to
                                        reach the nearest facility. Poor roads,
                                        no transport, and vast distances turn
                                        emergencies into tragedies.
                                    </p>
                                    <!-- Insights -->
                                    <div
                                        style="border-top:1px solid #f0f0f0; padding-top:12px; display:flex; flex-direction:column; gap:6px;"
                                    >
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >Average distance to facility.</span
                                            >
                                            <span
                                                style="font-weight:450; color:#53C4AB;"
                                                >25–30 km</span
                                            >
                                        </div>
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >Lack emergency transport</span
                                            >
                                            <span
                                                style="font-weight:300; color:#53C4AB;"
                                                >65%</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 3: Delay in Receiving Care -->
                            <div class="col-md-4">
                                <div
                                    class="problem-card"
                                    style="padding:22px; border:1px solid #e5e7eb; border-radius:16px; background:#ffffff; display:flex; flex-direction:column; height:100%; position:relative;"
                                >
                                    <!-- Number Badge -->
                                    <div
                                        style="width:32px; height:32px; border-radius:50%; background:#1c2348; color:#fff; font-weight:800; font-size:0.9rem; display:flex; align-items:center; justify-content:center; margin-bottom:12px;"
                                    >
                                        3
                                    </div>
                                    <!-- Icon -->
                                    <div
                                        style="width:42px; height:42px; border-radius:50%; background:#f5f6ff; display:flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:14px;"
                                    >
                                        🏥
                                    </div>
                                    <!-- Title -->
                                    <h4
                                        style="font-size:1rem; font-weight:700; color:#1c2348; margin-bottom:12px;"
                                    >
                                        Delay in Receiving Care
                                    </h4>
                                    <!-- Mother's Quote -->
                                    <blockquote
                                        style="border-left:3px solid #1f5e8e; padding-left:10px; margin:0 0 12px; font-style:italic; font-size:0.88rem; color:#1f5e8e; line-height:1.5;"
                                    >
                                        "We arrived, but with no insurance cover
                                        we were turned away until we could raise
                                        the admission fees."
                                    </blockquote>
                                    <!-- Explanation -->
                                    <p
                                        style="font-size:0.85rem; color:#4b5563; line-height:1.6; flex:1; margin-bottom:16px;"
                                    >
                                        Even when mothers reach a facility,
                                        overstretched hospitals with scarce
                                        resources, unnecessary referrals, and
                                        85% out-of-pocket costs create barriers
                                        that cost lives and push families into
                                        poverty.
                                    </p>
                                    <!-- Insights -->
                                    <div
                                        style="border-top:1px solid #f0f0f0; padding-top:12px; display:flex; flex-direction:column; gap:6px;"
                                    >
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >Healthcare costs out-of-pocket.</span
                                            >
                                            <span
                                                style="font-weight:450; color:#1f5e8e;"
                                                >85%</span
                                            >
                                        </div>
                                        <div
                                            style="display:flex; justify-content:space-between; font-size:0.6rem;"
                                        >
                                            <span style="color:#6b7280;"
                                                >Obstetric care costs vs normal
                                                care.</span
                                            >
                                            <span
                                                style="font-weight:450; color:#1f5e8e;"
                                                >4.5x</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- About Content Body End -->

                    <!-- About Content Btn Start -->
                    <div
                        class="about-content-btn wow fadeInUp"
                        data-wow-delay="0.75s"
                    >
                        <a href="#our-service" class="btn-default" on:click={() => trackCTA('See how we help')}
                            >See how we help</a
                        >
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
<div class="user-profile-section" style="background:#fff; padding:40px 0;">
    <div class="container">
        <div class="section-title text-center" style="margin-bottom:20px;">
            <h3 class="wow fadeInUp">Who We Serve</h3>
            <h2 class="text-anime-style-3" data-cursor="-opaque">
                Built Around People That Matter
            </h2>
            <p style="color:#666; max-width:720px; margin:0 auto;">
                We intervene before the emergency strikes, before the 25-30km
                journey, and before it's too late.
            </p>
        </div>

        <div
            class="profile-tabs"
            style="display:flex; justify-content:center; gap:12px; margin-bottom:30px; flex-wrap:wrap;"
        >
            {#each profileCards as profile}
                <button
                    on:click={() => (activeProfile = profile.id)}
                    class="profile-tab"
                    style="padding:10px 20px; border-radius:30px; border:1px solid #e0e0e0; background:{activeProfile ===
                    profile.id
                        ? '#1f5e8e'
                        : '#fff'}; color:{activeProfile === profile.id
                        ? '#fff'
                        : '#1c2348'}; cursor:pointer; font-weight:700;"
                >
                    {profile.title}
                </button>
            {/each}
        </div>

        <div
            class="profile-content"
            style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px;"
        >
            {#each profileCards as profile}
                {#if activeProfile === profile.id}
                    <div class="profile-card">
                        {#if profile.image}
                            <div class="profile-card-image">
                                <img
                                    src={profile.image}
                                    alt={profile.title}
                                    on:error={onProfileImageError}
                                />
                            </div>
                        {/if}
                        <div class="profile-card-content">
                            <h4 style="margin-bottom:12px;">{profile.title}</h4>
                            <p
                                style="color: #666; font-size: 0.95rem; line-height: 1.5; margin-bottom: 20px;"
                            >
                                {profile.description}
                            </p>
                            <div
                                style="font-weight:700; color:#333; margin-bottom:8px;"
                            >
                                Top Pain Points
                            </div>
                            <ul
                                style="margin-bottom:14px; padding-left:20px; color:#555;"
                            >
                                {#each profile.painPoints as pain}
                                    <li style="margin-bottom:8px;">{pain}</li>
                                {/each}
                            </ul>
                            <div
                                style="font-weight:700; color:#333; margin-bottom:8px;"
                            >
                                How Maternanet Helps
                            </div>
                            <ul
                                style="padding-left:20px; color:#555; margin-bottom:24px;"
                            >
                                {#each profile.solutions as sol}
                                    <li style="margin-bottom:8px;">{sol}</li>
                                {/each}
                            </ul>

                            <div class="profile-cta">
                                <a
                                    href={profile.ctaLink}
                                    class="btn-default"
                                    style="padding: 12px 78px 12px 23px; font-size: 0.95rem;"
                                    on:click={() => trackCTA(profile.ctaLabel)}
                                    >{profile.ctaLabel}</a
                                >
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>
<!-- User Profiles Section End -->

<!-- What You Get Section Start -->
<div id="our-service" class="our-service">
    <div class="container">
        <div class="row section-row">
            <div class="col-lg-12">
                <!-- Section Title Start -->
                <div class="section-title">
                    <h3 class="wow fadeInUp">how we help</h3>
                    <h2 class="text-anime-style-3" data-cursor="-opaque">
                        Everything you need to have a safe, healthy pregnancy —
                        right where you are
                    </h2>
                    <p class="wow fadeInUp" data-wow-delay="0.25s">
                        Designed for mothers in rural and remote areas where
                        access to care has been impossible until now.
                    </p>
                </div>
                <!-- Section Title End -->
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-6">
                <!-- Services Item Start -->
                <div class="service-item wow fadeInUp">
                    <div class="icon-box">
                        <img src="images/icon-experience-year1.svg" alt="" />
                    </div>
                    <div class="service-content">
                        <h3>Know Your Baby is Safe 🤰</h3>
                        <p>
                            <strong>Solves:</strong> Not knowing if your baby is
                            healthy<br /><br />Get real-time monitoring of your
                            pregnancy, spotting high-risk signs weeks before
                            they become emergencies.
                        </p>
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
                        <img src="images/icon-experience-year1.svg" alt="" />
                    </div>
                    <div class="service-content">
                        <h3>Care That Comes to You 🏥</h3>
                        <p>
                            <strong>Solves:</strong> The 25-30km journey to
                            clinics<br /><br />Community Health Workers trained
                            with our team offering home visits and follow-ups.
                            No 6-hour journeys on bad roads.
                        </p>
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
                        <img src="images/icon-experience-year1.svg" alt="" />
                    </div>
                    <div class="service-content">
                        <h3>Affordable Care 💚</h3>
                        <p>
                            <strong>Solves:</strong> 85% out-of-pocket costs.<br
                            /><br />Micro-savings wallets let you save as little
                            as $0.30/day and access instant micro-loans. No
                            emergency debt when baby is born.
                        </p>
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
                        <img src="images/icon-experience-year1.svg" alt="" />
                    </div>
                    <div class="service-content">
                        <h3>Expert Guidance, Always, at Your Fingertips 📱</h3>
                        <p>
                            <strong>Solves:</strong> Conflicting advice &
                            misinformation<br /><br />Personalized weekly
                            insights. Works on 2G networks, even offline.
                        </p>
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
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            From Worry to Peace of Mind
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                            Your path to safe, supported maternal care starts
                            right here. No long clinic visits. No stress. Just
                            you, your baby, and expert support and guidance
                            whenever you need it.
                        </p>
                    </div>
                    <!-- Section Title End -->

                    <!-- Section Button Start -->
                    <div class="section-btn wow fadeInUp" data-wow-delay="0.5s">
                        <a href="/contacts#contactForm" class="btn-default" on:click={() => trackCTA('Join Now')}
                            >Join Now — It's Free</a
                        >
                    </div>
                    <!-- Section Button End -->
                </div>
            </div>

            <div class="col-lg-6">
                <!-- Our Process List Start -->
                <div
                    class="our-process-list wow fadeInUp"
                    data-wow-delay="0.25s"
                >
                    <!-- Process Item Start -->
                    <div class="our-process-item">
                        <div class="icon-box">
                            <figure>
                                <img src="images/icon-process-1.svg" alt="" />
                            </figure>
                        </div>
                        <div class="process-item-content">
                            <h3>Step 1: Sign Up (30 seconds)</h3>
                            <p>
                                (Kindly take note: At the moment we are doing
                                community-based deployments. In other words, we
                                are coming to you to be able to experience your
                                painpoints first-hand. Be on the look-out we
                                might be in your community next. You can also
                                get in touch with us to reccommend where we
                                should be next.)
                            </p>
                        </div>
                    </div>
                    <!-- Process Item End -->

                    <!-- Process Item Start -->
                    <div class="our-process-item">
                        <div class="icon-box">
                            <figure>
                                <img src="images/icon-process-2.svg" alt="" />
                            </figure>
                        </div>
                        <div class="process-item-content">
                            <h3>Step 2: Get Your Pregnancy Companion</h3>
                            <p>
                                Get connected to a CHP in your community. Start
                                receiving personalized pregnancy insights, risk
                                monitoring, and health tips. Real guidance from
                                real people you trust, tailored just for you.
                            </p>
                        </div>
                    </div>
                    <!-- Process Item End -->

                    <!-- Process Item Start -->
                    <div class="our-process-item">
                        <div class="icon-box">
                            <figure>
                                <img src="images/icon-process-3.svg" alt="" />
                            </figure>
                        </div>
                        <div class="process-item-content">
                            <h3>Step 3: Connect to Care</h3>
                            <p>
                                When you need it, connect with trained Community
                                Health Workers or clinics near you. Watch how
                                your worries turn into confidence.
                            </p>
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
<div class="our-process" style="background-color: #f9f9f9; padding: 3rem 0;">
    <div class="container">
        <div class="row section-row">
            <div
                class="col-lg-12"
                style="text-align: center; margin-bottom: 3rem;"
            >
                <div class="section-title">
                    <h3 class="wow fadeInUp">
                        real impact, real lives, real progress.
                    </h3>
                    <h2 class="text-anime-style-3" data-cursor="-opaque">
                        What This Means for Mothers
                    </h2>
                    <p class="wow fadeInUp" data-wow-delay="0.25s">
                        These aren't just org metrics—they're mothers who got
                        their lives back.
                    </p>
                </div>
            </div>
        </div>

        <div class="impact-grid wow fadeInUp">
            <div class="imp-card featured">
                <div class="imp-n">
                    <span class="counter">11000</span><span class="accent"
                        >+</span
                    >
                </div>
                <div class="imp-label">Mothers currently supported</div>
                <div class="imp-note">
                    Across 4 counties, 33 integrated clinics, 410 Digital Doulas
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n">
                    <span class="counter">79</span><span class="accent">%</span>
                </div>
                <div class="imp-label">
                    High-risk pregnancies correctly identified
                </div>
                <div class="imp-note">
                    With 81% precision—providers are not overwhelmed with false
                    alarms.
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n">
                    <span class="counter">12</span><span class="accent">+</span>
                </div>
                <div class="imp-label">Maternal deaths prevented this year</div>
                <div class="imp-note">
                    Conservatively estimated families kept whole because of
                    proactive care.
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n">
                    <span class="counter">70</span><span class="accent">%</span>
                </div>
                <div class="imp-label">Reduction in early care costs</div>
                <div class="imp-note">
                    Catching problems early translates to fewer emergencies and
                    out-of-pocket costs.
                </div>
            </div>
        </div>

        <div class="row" style="margin-top: 2rem;">
            <div class="col-lg-12" style="text-align: center;">
                <a
                    href="/about#impact"
                    class="btn-default"
                    style="display: inline-block;"
                    >Explore More Detailed Impact Metrics →</a
                >
            </div>
        </div>

        <!-- Projected Impact Trajectory -->
        <div class="row mt-5 pt-3">
            <div
                class="col-lg-12"
                style="text-align: center; margin-bottom: 2.5rem;"
            >
                <h3 style="color: #1c2348; font-weight: 800; font-size: 2rem;">
                    Impact Trajectory
                </h3>
            </div>
        </div>

        <div
            class="row position-relative"
            style="margin-bottom: 2rem; align-items: center;"
        >
            <!-- Horizontal Line (Desktop) -->
            <div
                class="d-none d-lg-block"
                style="position: absolute; top: 50%; left: 5%; right: 5%; height: 2px; background-color: #53C4AB; z-index: 0; opacity: 0.8;"
            ></div>

            <!-- 2025 -->
            <div class="col-lg-3 col-md-6 mb-4" style="z-index: 1;">
                <div
                    style="background: #fff; border: 1px solid #f0f0f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); position: relative;"
                >
                    <div
                        style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem;"
                    >
                        <h4
                            style="font-size:1.8rem; font-weight:800; color:#F67C4E; margin:0;"
                        >
                            2025
                        </h4>
                        <div
                            style="width:14px; height:14px; border-radius:50%; border:3px solid #53C4AB;"
                        ></div>
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Mothers Served</span
                        >
                        <span style="font-weight:700; color:#1c2348;"
                            >11,000</span
                        >
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Lives Saved</span
                        >
                        <div style="display:flex; align-items:center; gap:8px;">
                            <div
                                style="width:12px; height:12px; border-radius:50%; background:#F67C4E;"
                            ></div>
                            <span style="font-weight:700; color:#53C4AB;"
                                >8-12</span
                            >
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Cost/Life Saved</span
                        >
                        <span style="font-weight:700; color:#F67C4E;"
                            >$8,100</span
                        >
                    </div>
                </div>
            </div>

            <!-- 2026 -->
            <div class="col-lg-3 col-md-6 mb-4 mt-lg-5" style="z-index: 1;">
                <div
                    style="background: #fff; border: 2px solid #ffe6de; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(246,124,78,0.1); position: relative;"
                >
                    <div
                        style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem;"
                    >
                        <h4
                            style="font-size:1.8rem; font-weight:800; color:#1c2348; margin:0;"
                        >
                            2026
                        </h4>
                        <span
                            style="background:#fff0eb; color:#F67C4E; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:20px;"
                            >NOW</span
                        >
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Mothers Served</span
                        >
                        <span style="font-weight:700; color:#1c2348;"
                            >33,000</span
                        >
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Lives Saved</span
                        >
                        <span style="font-weight:700; color:#53C4AB;"
                            >25-30</span
                        >
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Cost/Life Saved</span
                        >
                        <span style="font-weight:700; color:#F67C4E;"
                            >$4,250</span
                        >
                    </div>
                </div>
            </div>

            <!-- 2027 -->
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-5" style="z-index: 1;">
                <div
                    style="background: #fff; border: 1px solid #f0f0f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); position: relative;"
                >
                    <div
                        style="display:flex; align-items:center; margin-bottom:2rem;"
                    >
                        <h4
                            style="font-size:1.8rem; font-weight:800; color:#1c2348; margin:0;"
                        >
                            2027
                        </h4>
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Mothers Served</span
                        >
                        <span style="font-weight:700; color:#1c2348;"
                            >55,000</span
                        >
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Lives Saved</span
                        >
                        <div style="display:flex; align-items:center; gap:8px;">
                            <div
                                style="width:14px; height:14px; border-radius:50%; border:3px solid #53C4AB;"
                            ></div>
                            <span style="font-weight:700; color:#53C4AB;"
                                >45-60</span
                            >
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Cost/Life Saved</span
                        >
                        <span style="font-weight:700; color:#F67C4E;"
                            >$2,100</span
                        >
                    </div>
                </div>
            </div>

            <!-- 2028 -->
            <div class="col-lg-3 col-md-6 mb-4 mt-lg-5" style="z-index: 1;">
                <div
                    style="background: #fff; border: 1px solid #f0f0f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); position: relative;"
                >
                    <div
                        style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem;"
                    >
                        <h4
                            style="font-size:1.8rem; font-weight:800; color:#1c2348; margin:0;"
                        >
                            2028
                        </h4>
                        <div
                            style="width:14px; height:14px; border-radius:50%; border:3px solid #53C4AB;"
                        ></div>
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Mothers Served</span
                        >
                        <span style="font-weight:700; color:#1c2348;"
                            >85,000</span
                        >
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; margin-bottom:12px;"
                    >
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Lives Saved</span
                        >
                        <span style="font-weight:700; color:#53C4AB;"
                            >95-130</span
                        >
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:#6b7280; font-size:0.95rem;"
                            >Cost/Life Saved</span
                        >
                        <span style="font-weight:700; color:#F67C4E;">$975</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="margin-top: 2rem;">
            <div class="col-lg-12" style="text-align: center;">
                <p
                    style="font-size: 1.1rem; color: #555; max-width: 700px; margin: 0 auto; line-height: 1.8;"
                >
                    <strong>The real win:</strong> You get the care you deserve -
                    right on time, without the financial burden. Your baby stays
                    healthy. Your family stays whole. That's what Maternanet makes
                    possible.
                </p>
            </div>
        </div>
    </div>
</div>
<!-- Impact Stats Section End -->

<!-- Our Testimonial Section Start -->
<Testimonial></Testimonial>

<!-- Our Testimonial Section End -->

<style>
    /* Impact Presentation Grid */
    .impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 24px;
        margin-bottom: 24px;
    }
    .imp-card {
        background: #ffffff;
        border: 1px solid rgba(60, 40, 25, 0.18);
        border-radius: 20px;
        padding: 32px 24px;
        text-align: center;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
    }
    .imp-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
    }
    .imp-n {
        font-family: "Fraunces", serif;
        font-size: 46px;
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1;
        color: #7c3c9c;
        margin-bottom: 6px;
    }
    .imp-card.featured {
        background: #f36365;
        border-color: #f36365;
        color: #fff;
    }
    .imp-card.featured .imp-n {
        color: #fff;
    }
    .imp-label {
        font-size: 16px;
        font-weight: 600;
        color: inherit;
        margin-bottom: 8px;
    }
    .imp-note {
        font-size: 13px;
        color: #7a6558;
        line-height: 1.5;
    }
    .imp-card.featured .imp-note {
        color: rgba(255, 255, 255, 0.85);
    }
    .imp-card:not(.featured) .imp-label {
        color: #333;
    }
    @media (max-width: 900px) {
        .impact-grid {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 580px) {
        .impact-grid {
            grid-template-columns: 1fr;
        }
    }

    /* User Profile Cards Responsive Layout */
    .profile-card {
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: center;
        padding: 24px;
        border: 1px solid #ececec;
        border-radius: 16px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        background: #fff;
    }

    .profile-card-image {
        width: 100%;
        max-width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .profile-card-image img {
        width: 100%;
        height: auto;
        max-height: 250px;
        object-fit: cover;
        border-radius: 12px;
    }

    .profile-card-content {
        width: 100%;
    }

    @media (min-width: 768px) {
        .profile-card {
            flex-direction: row;
        }

        .profile-card-image {
            flex: 0 0 40%;
            max-width: 40%;
        }

        .profile-card-content {
            flex: 1 1 60%;
        }
    }
</style>
