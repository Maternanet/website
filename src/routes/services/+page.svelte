<script lang="ts">
    import { onMount } from "svelte";
    import { analytics } from "$lib/utils/analytics";

    function trackServicesCTA(label: string) {
        analytics.track('services_cta_click', { label, page: 'services' });
    }

    onMount(() => {
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener("click", (e) => {
                const targetId = a.getAttribute("href");
                if (!targetId || targetId === "#" || !targetId.startsWith("#"))
                    return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        });
    });
</script>

<div class="services-page-wrapper">
    <!-- HERO/LANDING SECTION -->
    <section
        class="hero bg-image"
        style="background-image: none; background-color: var(--primary-color); padding: 90px 0; overflow: hidden; position: relative;"
    >
        <!-- decorative orbs -->
        <div
            style="position: absolute; top: -100px; right: -80px; width: 420px; height: 420px; background: rgba(255, 255, 255, 0.05); border-radius: 50%; pointer-events: none;"
        ></div>
        <div
            style="position: absolute; bottom: -80px; left: 8%; width: 280px; height: 280px; background: rgba(246, 124, 78, 0.15); border-radius: 50%; pointer-events: none;"
        ></div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div
                        class="hero-content"
                        style="margin: 0 auto; text-align: center; position: relative;"
                    >
                        <div class="section-title">
                            <h3
                                class="wow fadeInUp"
                                style="color: #F67C4E; padding-left: 0; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;"
                            >
                                Kenya · 4 counties · 11,000+ mothers
                            </h3>
                            <h1
                                class="text-anime-style-3"
                                data-cursor="-opaque"
                                style="color: white; font-size: clamp(2rem, 4.5vw, 3.2rem); line-height: 1.2; max-width: 900px; margin: 0 auto;"
                            >
                                Care that finds you <em>before</em> the emergency
                                does.
                            </h1>
                            <p
                                class="wow fadeInUp"
                                data-wow-delay="0.25s"
                                style="color: rgba(255,255,255,0.85); max-width: 700px; margin: 25px auto 0; font-size: 18px; line-height: 1.7;"
                            >
                                Maternanet makes high-risk pregnancies visible
                                weeks before complications occur — for the
                                mothers that conventional healthcare has never
                                reached, and for the health systems trying to
                                serve them.
                            </p>
                        </div>

                        <div
                            class="hero-segment-pills wow fadeInUp"
                            data-wow-delay="0.5s"
                            style="display: flex; gap: 15px; margin-top: 35px; justify-content: center; flex-wrap: wrap;"
                        >
                            <a
                                href="#for-mothers"
                                class="btn-default"
                                style="padding: 16px 35px; font-size: 15px; background: #F67C4E; border: 1px solid #F67C4E; color: white; font-weight: 600; border-radius: 100px;"
                            >
                                For Mothers & Families <span class="btn-arrow"
                                    >&nbsp;&nbsp;→</span
                                >
                            </a>
                            <a
                                href="#for-health-systems"
                                class="btn-default btn-highlighted"
                                style="padding: 16px 35px; font-size: 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: white; border-radius: 100px;"
                            >
                                For Health Systems <span class="btn-arrow"
                                    >&nbsp;&nbsp;→</span
                                >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- STATS BAND -->
    <div
        class="stats-band"
        style="background: var(--secondary-color); padding: 40px 0; border-bottom: 1px solid var(--divider-color);"
    >
        <div class="container">
            <div class="row text-center">
                <div class="col-md-2 col-6 mb-3 mb-md-0">
                    <div
                        class="stat-n"
                        style="color: var(--primary-color); font-size: 1.8rem; font-weight: 700;"
                    >
                        11K+
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        Mothers enrolled
                    </div>
                </div>
                <div class="col-md-2 col-6 mb-3 mb-md-0">
                    <div
                        class="stat-n"
                        style="color: var(--primary-color); font-size: 1.8rem; font-weight: 700;"
                    >
                        410
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        Digital doulas
                    </div>
                </div>
                <div class="col-md-2 col-6 mb-3 mb-md-0">
                    <div
                        class="stat-n"
                        style="color: var(--primary-color); font-size: 1.8rem; font-weight: 700;"
                    >
                        +21pp
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        ANC completion
                    </div>
                </div>
                <div class="col-md-2 col-6 mb-3 mb-md-0">
                    <div
                        class="stat-n"
                        style="color: var(--primary-color); font-size: 1.8rem; font-weight: 700;"
                    >
                        77%
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        Retention
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div
                        class="stat-n"
                        style="color: #F67C4E; font-size: 1.8rem; font-weight: 700;"
                    >
                        12+
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        Lives saved / yr
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div
                        class="stat-n"
                        style="color: #F67C4E; font-size: 1.8rem; font-weight: 700;"
                    >
                        $8.1K
                    </div>
                    <div
                        class="stat-l"
                        style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); font-weight: 600;"
                    >
                        Cost / life saved
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- FOR MOTHERS -->
    <section
        class="section-padding"
        id="for-mothers"
        style="padding: 60px 0 30px 0;"
    >
        <div class="container">
            <div class="section-title text-center" style="margin-bottom: 40px;">
                <h3
                    class="wow fadeInUp"
                    style="color: #F67C4E; text-transform: uppercase; font-size: 14px; letter-spacing: 2px;"
                >
                    For pregnant mothers & families
                </h3>
                <h2
                    class="text-anime-style-3"
                    style="margin-top: 15px; font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: var(--primary-color);"
                >
                    You shouldn't have to travel 30 km to know <em
                        >you're at risk.</em
                    >
                </h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 mb-3">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 30px; border-radius: 12px; height: 100%; box-shadow: 0 5px 15px rgba(0,0,0,0.02);"
                    >
                        <div
                            class="service-card-icon"
                            style="width: 45px; height: 45px; background: rgba(246, 124, 78, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#F67C4E"
                                stroke-width="2"
                                ><circle cx="12" cy="12" r="10" /><path
                                    d="M12 8v4M12 16h.01"
                                /></svg
                            >
                        </div>
                        <h4
                            style="font-size: 1.2rem; color: var(--primary-color); font-weight: 700; margin-bottom: 10px;"
                        >
                            Risk Detection
                        </h4>
                        <p
                            style="font-size: 14px; color: var(--text-color); line-height: 1.6;"
                        >
                            We empower existing government CHPs to identify risks early using
                            predictive tools, facilitate fast
                            community-to-clinic linkages & referrals and offer
                            personalized continuous support. They essentially
                            act as a bridge, reaching you before complications
                            become emergencies, offering support to relieve
                            emotions of loneliness or anxiety and trigger timely
                            referrals to avert crises.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-3">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 30px; border-radius: 12px; height: 100%; box-shadow: 0 5px 15px rgba(0,0,0,0.02);"
                    >
                        <div
                            class="service-card-icon"
                            style="width: 45px; height: 45px; background: rgba(246, 124, 78, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#F67C4E"
                                stroke-width="2"
                                ><path
                                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                /><circle cx="9" cy="7" r="4" /></svg
                            >
                        </div>
                        <h4
                            style="font-size: 1.2rem; color: var(--primary-color); font-weight: 700; margin-bottom: 10px;"
                        >
                            Digital Doulas
                        </h4>
                        <p
                            style="font-size: 14px; color: var(--text-color); line-height: 1.6;"
                        >
                            We partner with CHPs in your community to offer you
                            personalized support from CHPs who know your
                            language and live in your neighborhood.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-3">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 30px; border-radius: 12px; height: 100%; box-shadow: 0 5px 15px rgba(0,0,0,0.02);"
                    >
                        <div
                            class="service-card-icon"
                            style="width: 45px; height: 45px; background: rgba(246, 124, 78, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#F67C4E"
                                stroke-width="2"
                                ><path
                                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                /></svg
                            >
                        </div>
                        <h4
                            style="font-size: 1.2rem; color: var(--primary-color); font-weight: 700; margin-bottom: 10px;"
                        >
                            Alerts & Reminders
                        </h4>
                        <p
                            style="font-size: 14px; color: var(--text-color); line-height: 1.6;"
                        >
                            SMS reminders and risk alerts tailored to your
                            trimester, arriving even without a smartphone or
                            data. However, these are not just automated
                            messages; they are informed by an analysis of your
                            health indicators, local weather patterns, and
                            clinic capacity to optimize your appointment timing
                            and suggest the best date to travel. No more long
                            queues/wait times or wasted journeys.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOR HEALTH SYSTEMS -->
    <section
        class="section-padding"
        id="for-health-systems"
        style="background: var(--secondary-color); padding: 30px 0 60px 0;"
    >
        <div class="container">
            <div class="section-title text-center" style="margin-bottom: 40px;">
                <h3
                    style="color: var(--primary-color); text-transform: uppercase; font-size: 14px; letter-spacing: 2px;"
                >
                    For health systems & partners
                </h3>
                <h2
                    style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-top: 15px;"
                >
                    Stop reacting to emergencies you could <em>predict.</em>
                </h2>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 35px; border-radius: 12px; height: 100%;"
                    >
                        <div
                            class="service-card-icon"
                            style="width: 50px; height: 50px; background: rgba(124, 60, 156, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px;"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary-color)"
                                stroke-width="2"
                                ><path d="M3 3v18h18" /><path
                                    d="m19 9-5 5-4-4-3 3"
                                /></svg
                            >
                        </div>
                        <h4
                            style="color: var(--primary-color); font-size: 1.25rem;"
                        >
                            Facility Dashboards
                        </h4>
                        <ul
                            style="color: var(--text-color); margin-top: 10px; font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                        >
                            <li>
                                Identify high-risk patients in your catchment
                                area before they arrive at the clinic.
                            </li>
                            <li>
                                Optimize your triage and resource allocation.
                            </li>
                            <li>
                                Get pre-filled registers, referral logs, and
                                SHA-ready claims
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 35px; border-radius: 12px; height: 100%;"
                    >
                        <div
                            class="service-card-icon"
                            style="width: 50px; height: 50px; background: rgba(124, 60, 156, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px;"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary-color)"
                                stroke-width="2"
                                ><circle cx="12" cy="12" r="10" /><path
                                    d="M12 16v-4M12 8h.01"
                                /></svg
                            >
                        </div>
                        <h4
                            style="color: var(--primary-color); font-size: 1.25rem;"
                        >
                            County Population Intelligence
                        </h4>
                        <ul
                            style="color: var(--text-color); margin-top: 10px; font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                        >
                            <li>
                                County-level dashboards showing ANC completion,
                                missed visits, and referral rates.
                            </li>
                            <li>
                                Gender-disaggregated data aligned with RMNCAH
                                frameworks.
                            </li>
                            <li>
                                Early warning system for emerging risk clusters.
                            </li>
                            <li>
                                Ministry of Health compatible — DHIS2 native
                                integration.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- DATA GOVERNANCE HORIZONTAL CARD -->
            <div class="row mt-4">
                <div class="col-lg-12">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 40px; border-radius: 12px; height: 100%; box-shadow: 0 5px 15px rgba(0,0,0,0.02);"
                    >
                        <div class="row align-items-center mb-4">
                            <div class="col-md-auto mb-3 mb-md-0">
                                <div
                                    class="service-card-icon"
                                    style="width: 50px; height: 50px; background: rgba(124, 60, 156, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center;"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--primary-color)"
                                        stroke-width="2"
                                    >
                                        <rect x="3" y="11" width="18" height="10" rx="2" />
                                        <circle cx="12" cy="5" r="2" />
                                        <path d="M12 7v4" />
                                        <line x1="8" y1="16" x2="8" y2="16" />
                                        <line x1="16" y1="16" x2="16" y2="16" />
                                    </svg>
                                </div>
                            </div>
                            <div class="col">
                                <h4
                                    style="color: var(--primary-color); font-size: 1.25rem;"
                                >
                                    Data Governance & Two-Channel Architecture
                                </h4>
                                <p
                                    style="color: var(--text-color); margin-top: 10px; font-size: 14px; margin-bottom: 0;"
                                >
                                    Protecting MOH data boundaries while securing proprietary longitudinal depth. Fully aligned with DPA 2019 compliance.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <ul
                                    style="color: var(--text-color); font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                                >
                                    <li>
                                        <strong>Channel A (OpenHIM):</strong> Clinical data routed directly to government eCHIS networks.
                                    </li>
                                    <li>
                                        <strong>Channel B (Maternanet Direct):</strong> Proprietary socioeconomic & depth data gathered via direct maternal consent.
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul
                                    style="color: var(--text-color); font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                                >
                                    <li>
                                        Mothers self-enroll (QR/USSD), taking ownership of their health records.
                                    </li>
                                    <li>
                                        <strong>On-Device Inference SDK</strong> guarantees connectivity-independent alerts, protecting data integrity offline.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- NGO & PARTNERS HORIZONTAL CARD -->
            <div class="row mt-4">
                <div class="col-lg-12">
                    <div
                        class="service-card"
                        style="background: white; border: 1px solid var(--divider-color); padding: 40px; border-radius: 12px; height: 100%; box-shadow: 0 5px 15px rgba(0,0,0,0.02);"
                    >
                        <div class="row align-items-center mb-4">
                            <div class="col-md-auto mb-3 mb-md-0">
                                <div
                                    class="service-card-icon"
                                    style="width: 50px; height: 50px; background: rgba(124, 60, 156, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center;"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--primary-color)"
                                        stroke-width="2"
                                    >
                                        <path
                                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                        />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="col">
                                <h4
                                    style="color: var(--primary-color); font-size: 1.25rem;"
                                >
                                    For NGOs & Development Partners
                                </h4>
                                <p
                                    style="color: var(--text-color); margin-top: 10px; font-size: 14px; margin-bottom: 0;"
                                >
                                    Programme evaluations no longer wait until
                                    the project ends — continuous impact
                                    evidence is generated and validated as you
                                    go, without commissioning separate data
                                    collection exercises.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <ul
                                    style="color: var(--text-color); font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                                >
                                    <li>
                                        Population health analytics dashboards —
                                        licensed from $25,000/project.
                                    </li>
                                    <li>
                                        Impact data validated against county
                                        DHIS2 records.
                                    </li>
                                    <li>
                                        Quasi-experimental evaluation
                                        methodology built in.
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul
                                    style="color: var(--text-color); font-size: 14px; padding-left: 20px; list-style-type: disc; line-height: 1.8;"
                                >
                                    <li>
                                        Co-authorship on evidence publications
                                        available to research partners.
                                    </li>
                                    <li>
                                        Pre-RCT pathway guidance included for
                                        academic partners.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA BUTTONS -->
            <div class="row mt-5 justify-content-center">
                <div class="col-auto mb-3">
                    <a
                        href="/contacts#contactForm"
                        class="btn-default"
                        style="padding: 16px 35px; font-size: 15px; background: #F67C4E; border: 1px solid #F67C4E; color: white; font-weight: 600; border-radius: 100px;"
                        on:click={() => trackServicesCTA('Join As a Community Partner')}
                    >
                        Join As a Community Partner <span class="btn-arrow"
                            >&nbsp;&nbsp;→</span
                        >
                    </a>
                </div>
                <div class="col-auto mb-3">
                    <a
                        href="/contacts#contactForm"
                        class="btn-default btn-highlighted"
                        style="padding: 16px 35px; font-size: 15px; background: white; border: 1px solid var(--divider-color); color: var(--primary-color); border-radius: 100px;"
                        on:click={() => trackServicesCTA('I represent health system or NGO')}
                    >
                        I represent health system or NGO <span class="btn-arrow"
                            >&nbsp;&nbsp;→</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- PRICING -->
    <section class="section-padding" id="pricing" style="padding: 70px 0;">
        <div class="container">
            <div class="section-title text-center" style="margin-bottom: 40px;">
                <h3
                    style="color: #F67C4E; text-transform: uppercase; font-size: 14px; letter-spacing: 2px;"
                >
                    Pricing
                </h3>
                <h2
                    style="color: var(--primary-color); font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-top: 15px;"
                >
                    Transparent & Scalable
                </h2>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-3">
                    <div
                        class="service-card text-center"
                        style="padding: 35px; border: 1px solid var(--divider-color); border-radius: 12px;"
                    >
                        <span
                            style="font-size: 12px; text-transform: uppercase; color: var(--text-color);"
                            >Mothers</span
                        >
                        <h4 style="font-size: 2.2rem; margin: 15px 0;">FREE</h4>
                        <p style="color: var(--text-color); font-size: 14px;">
                            Always. Subsidized by B2B licensing.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div
                        class="service-card text-center"
                        style="padding: 35px; border: 2px solid #F67C4E; border-radius: 12px;"
                    >
                        <span
                            style="font-size: 12px; text-transform: uppercase; color: #F67C4E;"
                            >Facilities</span
                        >
                        <h4 style="font-size: 2.2rem; margin: 15px 0;">
                            $399<span style="font-size: 0.9rem;">/mo</span>
                        </h4>
                        <p style="color: var(--text-color); font-size: 14px;">
                            Full dashboard & integration per clinic.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div
                        class="service-card text-center"
                        style="padding: 35px; border: 1px solid var(--divider-color); border-radius: 12px;"
                    >
                        <span
                            style="font-size: 12px; text-transform: uppercase; color: var(--text-color);"
                            >County/NGO</span
                        >
                        <h4 style="font-size: 2.2rem; margin: 15px 0;">
                            Custom<span style="font-size: 0.9rem;">/yr</span>
                        </h4>
                        <p style="color: var(--text-color); font-size: 14px;">
                            Population health analytics & evaluation.
                        </p>
                    </div>
                </div>
            </div>

            <!-- CTA BUTTONS -->
            <div class="row mt-5 justify-content-center">
                <div class="col-auto mb-3">
                    <a
                        href="/contacts#contactForm"
                        class="btn-default btn-highlighted"
                        style="padding: 16px 35px; font-size: 15px; background: white; border: 1px solid var(--divider-color); color: var(--primary-color); border-radius: 100px;"
                        on:click={() => trackServicesCTA('Integrate with Your Facility')}
                    >
                        Integrate with Your Facility <span class="btn-arrow"
                            >&nbsp;&nbsp;→</span
                        >
                    </a>
                </div>
                <div class="col-auto mb-3">
                    <a
                        href="/contacts#contactForm"
                        class="btn-default"
                        style="padding: 16px 35px; font-size: 15px; background: #F67C4E; border: 1px solid #F67C4E; color: white; font-weight: 600; border-radius: 100px;"
                        on:click={() => trackServicesCTA('Request Data Partnership Brief')}
                    >
                        Request Data Partnership Brief <span class="btn-arrow"
                            >&nbsp;&nbsp;→</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- TRUST -->
    <section
        class="section-padding"
        id="why-maternanet"
        style="background: var(--plum); padding: 80px 0; color: white; text-align: center;"
    >
        <div class="container">
            <h2
                style="color: white; margin-bottom: 25px; font-size: clamp(1.8rem, 3.5vw, 2.6rem);"
            >
                Why Maternanet?
            </h2>
            <p
                style="color: rgba(255,255,255,0.75); max-width: 750px; margin: 0 auto 40px; font-size: 16px;"
            >
                We provide the data-driven foundation that allows life-saving
                services to reach the last mile by generating the visibility
                required for effective decision-making at every level. Think of
                us as the digital rails for maternal care.
            </p>
            <div class="row">
                <div class="col-md-4">
                    <div style="padding: 15px;">
                        <h4 style="color: #F67C4E; font-size: 1.3rem;">
                            Validated
                        </h4>
                        <p
                            style="color: rgba(255,255,255,0.6); font-size: 13px;"
                        >
                            Cross-referenced against national DHIS2 records.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div style="padding: 15px;">
                        <h4 style="color: #F67C4E; font-size: 1.3rem;">
                            On-Device SDK
                        </h4>
                        <p
                            style="color: rgba(255,255,255,0.6); font-size: 13px;"
                        >
                            Proprietary on-device inference model optimized for 2G
                            feature phones, ensuring CHPs get offline alerts.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div style="padding: 15px;">
                        <h4 style="color: #F67C4E; font-size: 1.3rem;">
                            Sustainable
                        </h4>
                        <p
                            style="color: rgba(255,255,255,0.6); font-size: 13px;"
                        >
                            Utilizing B2B/B2G revenue to subsidize maternal care
                            at the last mile, ensuring mothers get quality care
                            at no extra cost.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .services-page-wrapper {
        font-family: var(--default-font);
        --plum: #1c2348;
    }
    .service-card {
        background: white;
        transition: transform 0.3s ease;
    }
    .service-card:hover {
        transform: translateY(-5px);
    }
    em {
        font-style: italic;
        color: #f67c4e;
    }

    .btn-arrow {
        font-size: 20px;
        display: inline-block;
        transition: transform 0.2s;
    }
    .btn-default:hover .btn-arrow {
        transform: translateX(6px);
    }
</style>
