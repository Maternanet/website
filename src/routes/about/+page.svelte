<script>
    import { onMount } from "svelte";

    onMount(() => {
        /* Reveal on scroll */
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
        );
        reveals.forEach((el) => observer.observe(el));
    });
</script>

<!-- Page Header Start -->
<div class="page-header">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <!-- Page Header Box Start -->
                <div class="page-header-box">
                    <h1 class="text-anime-style-3" data-cursor="-opaque">
                        About Us
                    </h1>
                </div>
                <!-- Page Header Box End -->
            </div>
        </div>
    </div>
</div>
<!-- Page Header End -->

<!-- About Us Section Start -->
<div class="about-us page-about-us">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <!-- About Image Start -->
                <div class="about-image">
                    <div class="about-img">
                        <figure class="image-anime">
                            <img src="images/age (7).jpeg" alt="" />
                        </figure>
                    </div>
                </div>
                <!-- About Image End -->
            </div>
            <div class="col-lg-6">
                <!-- About Us Content Start -->
                <div class="about-us-content">
                    <!-- Section Title Start -->
                    <div class="section-title">
                        <h3 class="wow fadeInUp">about us</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            Who We Are
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay="0.25s">
                            Maternanet is a pioneering health-tech organization
                            based in Nairobi, Kenya, dedicated to transforming
                            women's health through innovation, accessibility,
                            and community-driven solutions.
                            <br />Founded by Owino Aketch, a visionary and
                            software engineer with deep expertise in healthcare
                            systems, Maternanet was born out of a personal
                            mission to reduce maternal mortality and improve
                            healthcare access for expectant mothers in his rural
                            village.
                            <br />The mission got bigger and the vision
                            expanded. Our goal is to be the intelligence layer
                            for maternal health at the last mile. Kenya · Uganda
                            · East Africa.
                        </p>
                    </div>
                    <!-- Section Title End -->
                </div>
                <!-- About Us Content End -->
            </div>
        </div>
    </div>
</div>
<!-- About Us Section End -->

<!-- ═══════════════════════════════════════════════════════
     OUR STORY
═══════════════════════════════════════════════════════ -->
<section class="story section" id="story">
    <div class="wrap">
        <div class="story-grid">
            <div class="story-body">
                <div class="sec-label">Why we exist</div>
                <h2 class="sec-h2">
                    We built this because we<br />grew up here.
                </h2>

                <p>
                    Our founders aren't outsiders who discovered a problem on a
                    research trip or a lab. We are part of the community. We sat
                    with these women. We watched the same crisis repeat itself —
                    preventable death after preventable death — because most
                    women are essentially invisible to the healthcare system
                    until an emergency strikes and they are rushed to the
                    nearest hospital.
                </p>
                <p>
                    <strong>We asked a simple question:</strong> What if a Community
                    Health Provider — the most trusted person in our community —
                    had a tool that made her as medically informed as a clinician?
                    What if she could walk into any home and know, with the precision
                    required, which mother needed urgent attention and which was
                    thriving?
                </p>
                <p>
                    Maternanet is our zealous attempt to finding an answer. Not
                    an app. Not a project. A sustainable intelligence layer
                    woven into the fabric of maternal care — built by Africans,
                    for Africa, and designed from the ground up for the
                    realities of life here.
                </p>

                <a href="#team" class="btn btn-primary btn-arrow"
                    >Meet the team</a
                >
            </div>

            <div class="story-vis reveal">
                <div class="story-card">
                    <div class="story-quote">
                        She came to my door before I even knew something was
                        wrong. She had a small device. She checked my blood
                        pressure, asked me questions. She then got back in the
                        evening and told me I needed to go to the clinic
                        immediately. My baby is alive because of that morning.
                    </div>
                    <div class="story-attr">
                        Mother, Nairobi pilot cohort · 2024
                    </div>
                    <div class="story-float">
                        <div class="sf-n">12+</div>
                        <div class="sf-l">lives saved<br />this year.</div>
                    </div>
                </div>

                <div
                    style="background:var(--forest-l);border-radius:var(--r-md);padding:20px 22px;"
                >
                    <div
                        style="font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--forest-d);margin-bottom:8px"
                    >
                        The Maternanet difference
                    </div>
                    <div
                        style="font-size:14px;color:var(--forest-d);line-height:1.65"
                    >
                        We don't wait for the mother to come to the clinic. The
                        intelligence goes to her — at her door, in her home, in
                        her language, before the danger has a name.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     HOW IT WORKS
═══════════════════════════════════════════════════════ -->
<section class="how section" id="how">
    <div class="wrap">
        <div class="sec-label">How it works</div>
        <h2 class="sec-h2">
            Three things that work together<br />so no mother slips through.
        </h2>
        <p class="sec-deck">
            Each piece is powerful alone. Together, they create something the
            healthcare system has never had at the last mile: foresight.
        </p>

        <div class="pillars-grid">
            <!-- PILLAR 1: PREDICT -->
            <div class="pillar-card p1 reveal">
                <div class="pc-head">
                    <div class="pc-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="#C4572A"
                                stroke-width="1.5"
                            />
                            <path
                                d="M12 7v5l3 3"
                                stroke="#C4572A"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <circle cx="12" cy="12" r="2" fill="#C4572A" />
                        </svg>
                    </div>
                    <div class="pc-tag">Predict</div>
                    <div class="pc-title">
                        She knows<br />she's at risk<br />weeks early.
                    </div>
                </div>
                <div class="pc-deck">
                    Our predictive engine reads 85 signals — clinical, social,
                    environmental — and builds a live risk profile for every
                    mother. She doesn't need to understand the algorithm. She
                    just needs to know: go to the clinic this week or eat more
                    of this or that.
                </div>
                <div class="pc-items">
                    <div class="pc-item">
                        <strong
                            >Pre-eclampsia, gestational diabetes, preterm birth</strong
                        > — flagged weeks before symptoms appear.
                    </div>
                    <div class="pc-item">
                        <strong
                            >79% of high-risk pregnancies correctly identified</strong
                        > — a 21-point improvement over standard care.
                    </div>
                    <div class="pc-item">
                        <strong>Works offline at 2G speeds</strong> — because the
                        women who need it most are the furthest from the internet.
                    </div>
                </div>
                <div class="pc-cta">
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-primary"
                        style="font-size:13px;padding:10px 18px"
                        >Learn about the technology →</a
                    >
                </div>
            </div>

            <!-- PILLAR 2: CONNECT -->
            <div class="pillar-card p2 reveal">
                <div class="pc-head">
                    <div class="pc-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                                stroke="#1E5C42"
                                stroke-width="1.5"
                            />
                            <path
                                d="M12 3v4M8 12h8M8 16h5"
                                stroke="#1E5C42"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                    <div class="pc-tag">Connect</div>
                    <div class="pc-title">
                        Her community<br />health provider<br />becomes her
                        guardian.
                    </div>
                </div>
                <div class="pc-deck">
                    Kenya's 100,000 Community Health Promoters already walk
                    every neighbourhood. We give them the tools to match their
                    dedication — so the woman they visit on a Tuesday morning
                    gets the same intelligence that would take months to
                    accumulate in a hospital.
                </div>
                <div class="pc-items">
                    <div class="pc-item">
                        <strong
                            >Door-to-door care, powered by our predictive engine</strong
                        > — every home visit logged, every risk flag acted on.
                    </div>
                    <div class="pc-item">
                        <strong>Automatic referral and follow-up</strong> — when
                        the predictive engine flags a risk, the clinic is notified
                        and risk profile sharedbefore the mother even arrives.
                    </div>
                    <div class="pc-item">
                        <strong>Weekly check-ins by SMS, app, or voice</strong> —
                        however the mother prefers to be reached, she is reached.
                    </div>
                </div>
                <div class="pc-cta">
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-forest"
                        style="font-size:13px;padding:10px 18px"
                        >Become a Digital Doula →</a
                    >
                </div>
            </div>

            <!-- PILLAR 3: FINANCE -->
            <div class="pillar-card p3 reveal">
                <div class="pc-head">
                    <div class="pc-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <rect
                                x="3"
                                y="6"
                                width="18"
                                height="14"
                                rx="2"
                                stroke="#4A2355"
                                stroke-width="1.5"
                            />
                            <path
                                d="M7 6V4a1 1 0 011-1h8a1 1 0 011 1v2"
                                stroke="#4A2355"
                                stroke-width="1.5"
                            />
                            <path
                                d="M12 11v4M10 13h4"
                                stroke="#4A2355"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                    <div class="pc-tag">Finance</div>
                    <div class="pc-title">
                        A difficult birth<br />doesn't become<br />a financial
                        disaster.
                    </div>
                </div>
                <div class="pc-deck">
                    For most families, a pregnancy complication doesn't just
                    threaten a life — it empties their pockets. We remove that
                    barrier by connecting mothers to savings tools and emergency
                    financing before the crisis arrives, not after.
                </div>
                <div class="pc-items">
                    <div class="pc-item">
                        <strong>Save from Ksh 30 a week</strong> — micro-savings
                        toward delivery costs, linked to her ANC milestones.
                    </div>
                    <div class="pc-item">
                        <strong>Emergency care financing</strong> — credit for confirmed
                        high-risk interventions, activated by a Clinical Officer,
                        not left to chance.
                    </div>
                    <div class="pc-item">
                        <strong>Care costs fall 70%</strong> — early intervention
                        means simpler treatment. The math works for everyone.
                    </div>
                </div>
                <div class="pc-cta">
                    <a
                        href="/contacts#contactForm"
                        class="btn"
                        style="background:var(--plum);color:#fff;font-size:13px;padding:10px 18px"
                        >Explore financial care →</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     THE PEOPLE WE SERVE
═══════════════════════════════════════════════════════ -->
<section class="people section" id="people">
    <div class="wrap">
        <div class="sec-label">Who we serve</div>
        <h2 class="sec-h2">
            Three groups of people<br />whose lives we're here to change.
        </h2>
        <p class="sec-deck">
            The mother. The woman who cares for her. The partner who wants to
            reach both.
        </p>

        <div class="audience-grid reveal">
            <!-- MOTHER -->
            <div class="aud-card" id="mother">
                <div class="aud-icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <circle
                            cx="18"
                            cy="13"
                            r="6"
                            fill="var(--terra-l)"
                            stroke="var(--terra)"
                            stroke-width="1.5"
                        />
                        <path
                            d="M6 32c0-6.627 5.373-12 12-12s12 5.373 12 12"
                            stroke="var(--terra)"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <circle
                            cx="18"
                            cy="22"
                            r="5"
                            fill="var(--terra-l)"
                            stroke="var(--terra)"
                            stroke-width="1"
                        />
                    </svg>
                </div>
                <div class="aud-who">For mothers</div>
                <div class="aud-h">
                    Your pregnancy is<br />watched over —<br />even when you
                    aren't.
                </div>
                <div class="aud-body">
                    You shouldn't need to know you're at risk. You shouldn't
                    have to miss your day's work to make it to a clinic five
                    kilometres away. You deserve someone at your door with the
                    answers before you even know the questions.
                </div>
                <div class="aud-outcome">
                    <strong>What becomes possible:</strong> Knowing your baby is
                    safe. Having someone show up. Getting to the clinic before it
                    becomes an emergency — not after.
                </div>
                <a
                    href="/contacts#contactForm"
                    class="btn btn-primary btn-arrow"
                    style="font-size:13px;align-self:flex-start"
                    >Find a Maternanet CHP near you</a
                >
            </div>

            <!-- CHP -->
            <div class="aud-card" id="chp">
                <div class="aud-icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <circle
                            cx="18"
                            cy="11"
                            r="5"
                            fill="var(--forest-l)"
                            stroke="var(--forest)"
                            stroke-width="1.5"
                        />
                        <path
                            d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10"
                            stroke="var(--forest)"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M28 16v6M25 19h6"
                            stroke="var(--forest)"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div class="aud-who">For community health promoters</div>
                <div class="aud-h">
                    You already do<br />the most important job<br />in African
                    healthcare.
                </div>
                <div class="aud-body">
                    You walk into homes that no doctor has ever visited. You
                    build trust that no technology can replace. We don't want to
                    change that. We want to give you what you've always
                    deserved: a tool as powerful as your dedication.
                </div>
                <div class="aud-outcome">
                    <strong>What becomes possible:</strong> Knowing exactly which
                    mother needs you most today. Finishing your reports in seconds
                    instead of hours. Being recognised for the lives you save — with
                    data to prove it.
                </div>
                <a
                    href="/contacts#contactForm"
                    class="btn btn-forest btn-arrow"
                    style="font-size:13px;align-self:flex-start"
                    >Join as a Digital Doula</a
                >
            </div>

            <!-- PARTNER -->
            <div class="aud-card" id="partner">
                <div class="aud-icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect
                            x="4"
                            y="8"
                            width="28"
                            height="20"
                            rx="3"
                            fill="var(--plum-l)"
                            stroke="var(--plum)"
                            stroke-width="1.5"
                        />
                        <path
                            d="M4 15h28"
                            stroke="var(--plum)"
                            stroke-width="1.5"
                        />
                        <circle cx="18" cy="24" r="2" fill="var(--plum)" />
                        <path
                            d="M14 24h8"
                            stroke="var(--plum)"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div class="aud-who">For governments, NGOs & partners</div>
                <div class="aud-h">
                    The infrastructure<br />for women's health<br />is being
                    built now.
                </div>
                <div class="aud-body">
                    We are building the data rails for maternal care across East
                    Africa — validated clinical intelligence, community
                    distribution at scale, and government-grade compliance. The
                    window to shape this is open. It won't be forever.
                </div>
                <div class="aud-outcome">
                    <strong>What becomes possible:</strong> Population-level maternal
                    risk intelligence. Clinical trial recruitment. Policy decisions
                    grounded in real community data. A decade of competitive lead
                    for partners who move first.
                </div>
                <a
                    href="#get-involved"
                    class="btn btn-arrow"
                    style="background:var(--plum);color:#fff;font-size:13px;align-self:flex-start"
                    >Partner with Maternanet</a
                >
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     FLYWHEEL
═══════════════════════════════════════════════════════ -->
<section class="flywheel-sec section">
    <div class="wrap flywheel-inner">
        <div class="sec-label">Why this compounds</div>
        <h2 class="sec-h2" style="max-width:600px">
            Every mother we help<br />makes the next mother safer.
        </h2>
        <p class="sec-deck">
            This isn't a programme. It's a loop. Each visit generates data.
            Better data makes the model sharper. A sharper model catches more
            at-risk mothers earlier. Earlier intervention keeps costs down —
            which funds the care for the next thousand women.
        </p>

        <div class="fw-steps reveal">
            <div class="fw-step">
                <div class="fw-step-n">01</div>
                <div class="fw-step-title">Better care at the door</div>
                <div class="fw-step-desc">
                    A CHP with the right tool catches what would have been
                    missed. Mother and baby are safe.
                </div>
            </div>
            <div class="fw-step">
                <div class="fw-step-n">02</div>
                <div class="fw-step-title">Trust deepens</div>
                <div class="fw-step-desc">
                    She comes back for her next pregnancy. She tells her
                    neighbour. 77% of mothers stay active for 6+ months.
                </div>
            </div>
            <div class="fw-step">
                <div class="fw-step-n">03</div>
                <div class="fw-step-title">The model gets smarter</div>
                <div class="fw-step-desc">
                    More data. Better predictions. Fewer false alarms. More
                    lives caught before the crisis.
                </div>
            </div>
            <div class="fw-step">
                <div class="fw-step-n">04</div>
                <div class="fw-step-title">Our model sustains itself</div>
                <div class="fw-step-desc">
                    Better outcomes fund the next phase. Insurance partners,
                    pharma companies, and governments want in. The mission
                    scales.
                </div>
            </div>
        </div>

        <div class="fw-loop-note">
            ↻ A late arrival cannot compress this loop with capital. It can only
            be built by earning it.
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     IMPACT NUMBERS
═══════════════════════════════════════════════════════ -->
<section class="impact section" id="impact">
    <div class="wrap">
        <div class="sec-label">What it looks like so far</div>
        <h2 class="sec-h2">
            Real numbers.<br /><em>Real stories.</em> Real Lives Saved.
        </h2>
        <p class="sec-deck">
            These are not projections. They come from clinic registers, CHP
            logs, and county DHIS2 data. Independently validated.
        </p>

        <div class="impact-grid reveal">
            <div class="imp-card featured">
                <div class="imp-n">77<span class="accent">%</span></div>
                <div class="imp-label">Still here after 6 months</div>
                <div class="imp-note">
                    Mothers actively engaged, logging in or responding weekly.
                    Trust, not stickiness.
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n"><span class="accent">+</span>21pp</div>
                <div class="imp-label">More ANC visits completed</div>
                <div class="imp-note">
                    From 48% to 69% completion. Validated against county
                    baseline data (Nairobi, Narok, Kajiado).
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n">−15<span class="accent">pp</span></div>
                <div class="imp-label">Fewer missed appointments</div>
                <div class="imp-note">
                    Missed visits fell from 42% to 27% within one year of
                    CHP-led follow-up.
                </div>
            </div>
            <div class="imp-card">
                <div class="imp-n">12<span class="accent">+</span></div>
                <div class="imp-label">Maternal deaths prevented this year</div>
                <div class="imp-note">
                    Conservative estimate. 12 families that still have a mother
                    because of an early flag, a door knock, a referral that
                    happened in time.
                </div>
            </div>
        </div>

        <div
            style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px"
            class="reveal"
        >
            <div
                style="background:var(--white);border:1px solid var(--border-2);border-radius:var(--r-md);padding:22px 24px"
            >
                <div
                    style="font-family:'Fraunces',serif;font-size:36px;font-weight:600;color:var(--ink);line-height:1;margin-bottom:4px"
                >
                    11,000<span style="font-size:18px;color:var(--ink-3)"
                        >+</span
                    >
                </div>
                <div
                    style="font-size:14px;font-weight:500;color:var(--ink);margin-bottom:4px"
                >
                    Mothers currently in the network.
                </div>
                <div style="font-size:12px;color:var(--ink-4)">
                    Across 4 counties, 33 integrated clinics, 410 Digital Doulas
                </div>
            </div>
            <div
                style="background:var(--white);border:1px solid var(--border-2);border-radius:var(--r-md);padding:22px 24px"
            >
                <div
                    style="font-family:'Fraunces',serif;font-size:36px;font-weight:600;color:var(--ink);line-height:1;margin-bottom:4px"
                >
                    $8,100
                </div>
                <div
                    style="font-size:14px;font-weight:500;color:var(--ink);margin-bottom:4px"
                >
                    Cost per life saved today
                </div>
                <div style="font-size:12px;color:var(--ink-4)">
                    Falls to $650 by 2028 as scale compounds. For context:
                    $2,000–5,000 is considered excellent in African LMIC
                    contexts.
                </div>
            </div>
            <div
                style="background:var(--white);border:1px solid var(--border-2);border-radius:var(--r-md);padding:22px 24px"
            >
                <div
                    style="font-family:'Fraunces',serif;font-size:36px;font-weight:600;color:var(--ink);line-height:1;margin-bottom:4px"
                >
                    79<span style="font-size:18px;color:var(--ink-3)">%</span>
                </div>
                <div
                    style="font-size:14px;font-weight:500;color:var(--ink);margin-bottom:4px"
                >
                    High-risk pregnancies correctly identified.
                </div>
                <div style="font-size:12px;color:var(--ink-4)">
                    With 81% precision — providers are not overwhelmed with
                    false alarms. A +21 point improvement over standard WHO risk
                    scoring.
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     TEAM
═══════════════════════════════════════════════════════ -->
<section class="team-sec section" id="team">
    <div class="wrap">
        <div class="sec-label">Who we are</div>
        <h2 class="sec-h2">
            We didn't come here<br />to provide solutions. We are part of the
            community trying to solve our own challenges.
        </h2>
        <p class="team-intro">
            We are here because this is our problem too. Our founders are a
            health engineer, a Kenyatta National Hospital OB-GYN, a distributed
            systems architect who's shipped three offline-first health apps,
            and a programme manager who has worked in eight African countries.
            We understand the communities we build for because we are from them.
        </p>

        <div class="team-grid">
            <div class="team-card">
                <div
                    class="tc-avatar"
                    style="background:var(--terra-l);color:var(--terra-d)"
                >
                    OA
                </div>
                <div class="tc-body">
                    <div class="tc-name">Owino Aketch</div>
                    <div class="tc-role">CEO · Team Lead</div>
                    <div class="tc-note">
                        5+ years healthcare technology. Software Engineer,
                        2x Founder. Stanford Medicine 25 Program, 2024.
                    </div>
                </div>
            </div>
            <div class="team-card">
                <div
                    class="tc-avatar"
                    style="background:var(--forest-l);color:var(--forest-d)"
                >
                    JM
                </div>
                <div class="tc-body">
                    <div class="tc-name">Dr. Jane Vinic Moraa</div>
                    <div class="tc-role">Chief Medical Officer</div>
                    <div class="tc-note">
                        OB-GYN specialist. Former Clinical Officer, Kenyatta
                        National Hospital. MBChB, University of Nairobi.
                    </div>
                </div>
            </div>
            <div class="team-card">
                <div
                    class="tc-avatar"
                    style="background:var(--plum-l);color:var(--plum)"
                >
                    JK
                </div>
                <div class="tc-body">
                    <div class="tc-name">Janet Kemunto</div>
                    <div class="tc-role">Chief Technical Officer</div>
                    <div class="tc-note">
                        8+ years distributed systems. Former Senior Developer,
                        MedyLine. Three offline-first mHealth apps shipped.
                    </div>
                </div>
            </div>
            <div class="team-card">
                <div
                    class="tc-avatar"
                    style="background:#FDF3E0;color:var(--amber,#8C5A00)"
                >
                    LA
                </div>
                <div class="tc-body">
                    <div class="tc-name">Linet Akinyi</div>
                    <div class="tc-role">Chief Community Officer</div>
                    <div class="tc-note">
                        4+ years community health. Former AMREF Health Africa.
                        MPH, Kenya Methodist University. 15,000+ individuals, 8
                        counties.
                    </div>
                </div>
            </div>
        </div>

        <div class="insider-bar reveal">
            <div class="ib-text">
                <strong
                    >We are African innovators who understand both the cultural
                    nuances and technical requirements for sustainable impact.</strong
                > The communities we build for are not our users — they are our
                neighbours, our families, and in many cases, ourselves. That is
                not a marketing line. It is the single most important thing we
                bring to this problem.
            </div>
            <a
                href="/contacts#contactForm"
                class="btn btn-primary"
                style="white-space:nowrap;flex-shrink:0">Connect with us →</a
            >
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     SEGMENT CTAs
═══════════════════════════════════════════════════════ -->
<section class="segments section" id="get-involved">
    <div class="wrap">
        <div class="sec-label">Join us</div>
        <h2 class="sec-h2">How would you like<br />to be part of this?</h2>
        <p class="sec-deck">
            We are in the earliest chapters of a story that will take decades to
            finish. The people who join now will shape what it becomes.
        </p>

        <div class="seg-grid reveal">
            <div class="seg-card seg-mother">
                <div class="seg-eyebrow">For mothers & families</div>
                <div class="seg-h">
                    Find your nearest Digital Doula — or share Maternanet with
                    someone who needs it.
                </div>
                <div class="seg-body">
                    A community health worker trained by Maternanet may already
                    be working in your neighbourhood. If you're pregnant,
                    recently gave birth, or know someone who is — this matters.
                </div>
                <div class="seg-ctas">
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-ghost btn-arrow"
                        >Find a CHP near you</a
                    >
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-white-translucent"
                        >Talk to us</a
                    >
                </div>
            </div>

            <div class="seg-card seg-chp">
                <div class="seg-eyebrow">For community health workers</div>
                <div class="seg-h">
                    You're already doing the work. Let us give you the tools you
                    deserve.
                </div>
                <div class="seg-body">
                    Maternanet Digital Doulas carry a clinical-grade toolkit,
                    earn recognition for every life protected, and gain
                    continuous professional development — all while staying in
                    the communities they know and love.
                </div>
                <div class="seg-ctas">
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-ghost btn-arrow"
                        >Become a Digital Doula</a
                    >
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-white-translucent"
                        >Talk to us</a
                    >
                </div>
            </div>

            <div class="seg-card seg-partner">
                <div class="seg-eyebrow">For partners & investors</div>
                <div class="seg-h">
                    The data infrastructure for East African women's health is
                    open for partnership.
                </div>
                <div class="seg-body">
                    Government contracts, clinical research, pharmaceutical
                    distribution, insurance underwriting, impact investment —
                    the platform is ready. The window to shape the architecture
                    is now.
                </div>
                <div class="seg-ctas">
                    <a
                        href="mailto:careconnect.afrika@gmail.com"
                        class="btn btn-ghost btn-arrow"
                        >Start a conversation</a
                    >
                    <a
                        href="/contacts#contactForm"
                        class="btn btn-white-translucent"
                        >Request our brief</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<section class="trust section" id="trust">
    <div class="wrap">
        <div class="sec-label">Data & Safety as a Leverage</div>
        <h2 class="sec-h2">Building the rails for maternal care.</h2>
        <p class="sec-deck">
            We don't just ask for trust; we build the conditions for it through
            radical transparency, technical rigour, and deep community
            partnership.
        </p>

        <!-- Trust Pillars Grid -->
        <div class="pillar-grid reveal">
            <div class="tp-card">
                <div class="tp-icon">🔒</div>
                <div class="tp-content">
                    <h4 class="tp-title">Your Data, Your Ownership</h4>
                    <p class="tp-desc">
                        Mothers can export or delete their full health record
                        via USSD. Compliant with Kenya’s Data Protection
                        Act (2019).
                    </p>
                </div>
            </div>
            <div class="tp-card">
                <div class="tp-icon">🌍</div>
                <div class="tp-content">
                    <h4 class="tp-title">Designed for Rural Realities</h4>
                    <p class="tp-desc">
                        Works offline at 1kb/s on 2G networks. Built for $40
                        phones, precisely where 60% of our users live.
                    </p>
                </div>
            </div>
            <div class="tp-card">
                <div class="tp-icon">📊</div>
                <div class="tp-content">
                    <h4 class="tp-title">Independently Validated</h4>
                    <p class="tp-desc">
                        Metrics verified against clinic registers and DHIS2
                        data. We only publish what we can defend in peer-review.
                    </p>
                </div>
            </div>
            <div class="tp-card">
                <div class="tp-icon">🤝</div>
                <div class="tp-content">
                    <h4 class="tp-title">Deep Integration</h4>
                    <p class="tp-desc">
                        Signed MOUs with every county we enter. Auto-submits to
                        Kenya’s national health health system (DHIS2).
                    </p>
                </div>
            </div>
        </div>

        <!-- Technical & Partnerships Bar -->
        <div class="cred-bar reveal">
            <div class="compliance-badges">
                <div class="cb-label">Certifications</div>
                <div class="cb-items">
                    <span class="cb-pill">Kenya DPA 2019</span>
                    <span class="cb-pill">GDPR Standards</span>
                    <span class="cb-pill">KMPDC Underway</span>
                    <span class="cb-pill">DHIS2 Integrated</span>
                </div>
            </div>
            <div class="partner-line">
                <div class="pl-label">Active Partnerships</div>
                <div class="pl-items">
                    Nairobi · Narok · Kajiado · Kisumu · MOH- Maternal Health
                    Services · Social Health Authority
                </div>
            </div>
        </div>

        <!-- The Vision Card -->
        <div class="vision-card reveal">
            <div class="vc-tag">The Long View</div>
            <div class="vc-text">
                "By 2035, majority of pharmaceutical companys, insurers, or
                government ministries should be able to reach East African women
                at clinical precision with Maternanet's network. Not because
                we built a wall — but because we built something worth relying
                on."
            </div>
        </div>
    </div>
</section>

<style>
    /* Ported Design System from HTML */
    :root {
        --terra: #f36365; /* Unified with global accent */
        --terra-d: #d54b4d;
        --terra-l: #fff0f0;
        --terra-m: rgba(243, 99, 101, 0.1);
        --forest: #1e5c42;
        --forest-d: #134030;
        --forest-l: #e4f0eb;
        --forest-m: rgba(30, 92, 66, 0.1);
        --plum: #7c3c9c; /* Unified with global primary */
        --plum-l: #f3e8f7;
        --sand: #faf6f0;
        --sand-2: #f2ebe0;
        --sand-3: #e5d9c9;
        --ink: #7c3c9c; /* Use plum for headings to match Who We Are */
        --ink-2: #527282; /* Use global text color */
        --ink-3: #7a6558;
        --ink-4: #b0a090;
        --white: #ffffff;
        --border: rgba(60, 40, 25, 0.1);
        --border-2: rgba(60, 40, 25, 0.18);
        --r-sm: 8px;
        --r-md: 12px;
        --r-lg: 20px;
        --r-xl: 28px;
    }

    /* Scoped Utility Classes */
    .wrap {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .section {
        padding: 72px 0;
    }

    /* Scroll Reveal */
    :global(.reveal) {
        opacity: 0;
        transform: translateY(24px);
        transition:
            opacity 0.8s ease,
            transform 0.8s ease;
    }
    :global(.reveal.visible) {
        opacity: 1;
        transform: translateY(0);
    }

    /* Story Section */
    .story-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
    }
    .story-card {
        background: var(--sand);
        border: 1px solid var(--border-2);
        border-radius: var(--r-xl);
        padding: 32px;
        position: relative;
        overflow: hidden;
    }
    .story-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--terra), var(--forest));
    }
    .story-quote {
        font-family: "Fraunces", serif;
        font-size: 22px;
        font-weight: 400;
        font-style: italic;
        color: #3d2e25;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    .story-quote::before {
        content: "❝";
        display: block;
        font-size: 48px;
        color: var(--terra);
        line-height: 1;
        margin-bottom: 8px;
        font-style: normal;
    }
    .story-attr {
        font-size: 13px;
        color: var(--ink-3);
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .story-attr::before {
        content: "";
        width: 24px;
        height: 1px;
        background: var(--ink-3);
    }
    .story-float {
        position: absolute;
        bottom: -16px;
        right: -16px;
        background: var(--terra);
        border-radius: var(--r-md);
        padding: 14px 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        box-shadow: 0 4px 24px rgba(196, 87, 42, 0.25);
    }
    .story-float .sf-n {
        font-family: "Fraunces", serif;
        font-size: 28px;
        font-weight: 600;
        color: #fff;
        line-height: 1;
    }
    .story-float .sf-l {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.8);
    }

    /* Type & Headers */
    .sec-label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: normal;
        text-transform: capitalize;
        color: var(--terra);
        margin: 0 auto 12px;
        padding-left: 30px;
        width: fit-content;
        position: relative;
    }
    .sec-label::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background: url("/images/icon-sub-heading.svg") no-repeat;
        background-size: cover;
        width: 18px;
        height: 18px;
    }
    .sec-h2 {
        font-size: clamp(32px, 5vw, 40px);
        font-weight: 700;
        letter-spacing: -0.01em;
        line-height: 1.2;
        color: var(--ink);
        margin: 0 auto 14px;
        text-align: center;
        max-width: 800px;
    }
    .sec-deck {
        font-size: 17px;
        font-weight: 400;
        color: var(--ink-2);
        line-height: 1.8;
        max-width: 700px;
        margin: 0 auto 40px;
        text-align: center;
    }

    /* Pillars (How it works) */
    .pillars-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 40px;
    }
    .pillar-card {
        background: var(--white);
        border: 1px solid var(--border-2);
        border-radius: var(--r-lg);
        overflow: hidden;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
        display: flex;
        flex-direction: column;
    }
    .pillar-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 48px rgba(28, 20, 16, 0.08);
    }
    .pc-head {
        padding: 28px 28px 0;
    }
    .pc-icon {
        width: 48px;
        height: 48px;
        border-radius: var(--r-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        font-size: 22px;
    }
    .pc-tag {
        display: inline-block;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 3px 10px;
        border-radius: 20px;
        margin-bottom: 10px;
    }
    .pc-title {
        font-family: "Fraunces", serif;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: var(--ink);
        line-height: 1.2;
        margin-bottom: 10px;
    }
    .pc-deck {
        font-size: 14px;
        color: var(--ink-3);
        line-height: 1.65;
        padding: 0 28px 24px;
        flex: 1;
    }
    .pc-items {
        border-top: 1px solid var(--border);
        padding: 20px 28px 28px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .pc-item {
        display: flex;
        gap: 10px;
        font-size: 13.5px;
        color: var(--ink-2);
        line-height: 1.5;
    }
    .pc-item::before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 7px;
    }
    .pc-cta {
        padding: 0 28px 28px;
    }

    .pillar-card.p1 .pc-icon {
        background: var(--terra-l);
    }
    .pillar-card.p1 .pc-tag {
        background: var(--terra-l);
        color: var(--terra-d);
    }
    .pillar-card.p1 .pc-item::before {
        background: var(--terra);
    }
    .pillar-card.p2 .pc-icon {
        background: var(--forest-l);
    }
    .pillar-card.p2 .pc-tag {
        background: var(--forest-l);
        color: var(--forest-d);
    }
    .pillar-card.p2 .pc-item::before {
        background: var(--forest);
    }
    .pillar-card.p3 .pc-icon {
        background: var(--plum-l);
    }
    .pillar-card.p3 .pc-tag {
        background: var(--plum-l);
        color: var(--plum);
    }
    .pillar-card.p3 .pc-item::before {
        background: var(--plum);
    }

    /* Audience (Who we serve) */
    .audience-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2px;
        background: var(--border);
        border-radius: var(--r-lg);
        overflow: hidden;
        margin-top: 40px;
    }
    .aud-card {
        background: var(--white);
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
    }
    .aud-card:hover {
        background: var(--sand);
    }
    .aud-icon {
        font-size: 32px;
        margin-bottom: 16px;
        height: 48px;
        display: flex;
        align-items: center;
    }
    .aud-who {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: normal;
        text-transform: capitalize;
        color: var(--terra);
        margin-bottom: 8px;
    }
    .aud-h {
        font-size: 22px;
        font-weight: 700;
        color: var(--ink);
        line-height: 1.2;
        margin-bottom: 12px;
    }
    .aud-body {
        font-size: 14px;
        color: var(--ink-3);
        line-height: 1.65;
        margin-bottom: 20px;
        flex: 1;
    }
    .aud-outcome {
        background: var(--sand-2);
        border-radius: var(--r-sm);
        padding: 12px 14px;
        font-size: 13px;
        color: var(--ink-2);
        line-height: 1.5;
        border-left: 3px solid var(--terra);
        margin-bottom: 20px;
    }

    /* Flywheel */
    .flywheel-sec {
        background: var(--sand-2);
        color: var(--ink);
        position: relative;
        overflow: hidden;
    }
    .flywheel-sec::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
                ellipse at 0% 0%,
                rgba(196, 87, 42, 0.05) 0%,
                transparent 50%
            ),
            radial-gradient(
                ellipse at 100% 100%,
                rgba(30, 92, 66, 0.03) 0%,
                transparent 40%
            );
        pointer-events: none;
    }
    .flywheel-inner {
        position: relative;
        z-index: 1;
    }
    .fw-steps {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        background: transparent;
        border-radius: var(--r-lg);
        margin-top: 40px;
    }
    .fw-step {
        padding: 32px 24px;
        background: var(--white);
        border: 1px solid var(--border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        border-radius: var(--r-md);
        position: relative;
        transition: transform 0.3s ease;
    }
    .fw-step:hover {
        transform: translateY(-5px);
    }
    .fw-step-n {
        font-family: "Fraunces", serif;
        font-size: 48px;
        font-weight: 400;
        color: var(--forest-m);
        line-height: 1;
        margin-bottom: 12px;
    }
    .fw-step-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--ink);
        margin-bottom: 8px;
    }
    .fw-step-desc {
        font-size: 14px;
        color: var(--ink-2);
        line-height: 1.6;
    }
    .fw-loop-note {
        margin-top: 32px;
        font-size: 13px;
        color: var(--ink-3);
        font-style: italic;
        opacity: 0.8;
    }

    /* Impact & Teams */
    .imp-card {
        background: var(--white);
        border: 1px solid var(--border-2);
        border-radius: var(--r-lg);
        padding: 32px 24px;
        text-align: center;
        transition: transform 0.2s;
    }
    .imp-n {
        font-family: "Fraunces", serif;
        font-size: 46px;
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1;
        color: var(--ink);
        margin-bottom: 6px;
    }
    .imp-card.featured {
        background: var(--terra);
        border-color: var(--terra);
        color: #fff;
    }
    .imp-card.featured .imp-n {
        color: #fff;
    }
    .team-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 40px;
    }
    .team-card {
        background: var(--sand);
        border-radius: var(--r-lg);
        overflow: hidden;
        transition: transform 0.2s;
    }
    .tc-avatar {
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Fraunces", serif;
        font-size: 42px;
        font-weight: 600;
    }
    .tc-body {
        padding: 20px;
    }

    /* Join segments */
    .seg-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 40px;
    }
    .seg-card {
        border-radius: var(--r-xl);
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
        min-height: 480px;
    }
    .seg-h {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 16px;
    }
    .seg-body {
        font-size: 15px;
        line-height: 1.6;
        opacity: 0.9;
        margin-bottom: 32px;
        flex: 1;
    }
    .seg-ctas {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: auto;
    }
    .seg-card.seg-mother {
        background: var(--terra);
        color: #fff;
    }
    .seg-card.seg-chp {
        background: var(--forest);
        color: #fff;
    }
    .seg-card.seg-partner {
        background: var(--plum);
        color: #fff;
    }

    /* Trust Layer */
    .trust {
        background: var(--sand);
        position: relative;
        overflow: hidden;
    }
    .pillar-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 40px;
    }
    .tp-card {
        background: var(--white);
        padding: 32px;
        border-radius: var(--r-lg);
        border: 1px solid var(--border);
        display: flex;
        gap: 24px;
        transition: transform 0.3s ease;
    }
    .tp-card:hover {
        transform: translateY(-4px);
    }
    .tp-icon {
        font-size: 32px;
        flex-shrink: 0;
    }
    .tp-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 10px;
    }
    .tp-desc {
        font-size: 14px;
        color: var(--ink-2);
        line-height: 1.6;
    }

    .cred-bar {
        margin-top: 40px;
        padding: 32px;
        background: var(--white);
        border: 1px solid var(--border);
        border-radius: var(--r-xl);
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .compliance-badges,
    .partner-line {
        display: flex;
        align-items: center;
        gap: 32px;
    }
    .cb-label,
    .pl-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--ink-3);
        letter-spacing: 0.1em;
        width: 120px;
        flex-shrink: 0;
    }
    .cb-items {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
    .cb-pill {
        padding: 6px 14px;
        background: var(--sand-2);
        color: var(--ink);
        font-size: 12px;
        font-weight: 500;
        border-radius: 20px;
    }
    .pl-items {
        font-size: 15px;
        color: var(--ink-2);
        font-weight: 500;
    }

    .vision-card {
        margin-top: 40px;
        background: var(--plum);
        color: var(--white);
        padding: 48px 40px;
        border-radius: var(--r-xl);
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .vc-tag {
        font-size: 11px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-bottom: 24px;
        opacity: 0.6;
    }
    .vc-text {
        font-family: "Fraunces", serif;
        font-size: clamp(20px, 3vw, 26px);
        line-height: 1.5;
        font-style: italic;
        position: relative;
        z-index: 1;
        max-width: 800px;
    }

    /* Buttons (Adapted from HTML) */
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 600;
        padding: 14px 28px;
        border-radius: 14px;
        transition: all 0.5s ease-in-out;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .btn-primary {
        background: var(--terra);
        color: #fff;
    }
    .btn-forest {
        background: var(--forest);
        color: #fff;
    }
    .btn-ghost {
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.3);
    }
    .btn-white-translucent {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-size: 13px;
        padding: 10px 18px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .btn-white-translucent:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 900px) {
        .story-grid,
        .pillar-grid,
        .pillars-grid,
        .audience-grid,
        .seg-grid,
        .team-grid,
        .fw-steps {
            grid-template-columns: 1fr 1fr;
        }
        .cred-bar {
            padding: 24px;
        }
        .compliance-badges,
        .partner-line {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }
    }
    @media (max-width: 580px) {
        .story-grid,
        .pillar-grid,
        .pillars-grid,
        .audience-grid,
        .seg-grid,
        .team-grid,
        .fw-steps {
            grid-template-columns: 1fr;
        }
        .tp-card {
            flex-direction: column;
            gap: 16px;
        }
        .vision-card {
            padding: 40px 24px;
        }
    }
</style>
