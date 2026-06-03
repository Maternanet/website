<script lang="ts">
    import { enhance } from "$app/forms";
    import { analytics } from "$lib/utils/analytics";

    let statusMsg = "";
    let isError = false;
    let isSubmitting = false;

    function trackSocial(platform: string) {
        analytics.track('social_click', { platform });
    }
</script>

<!-- Page Header Start -->
<div class="page-header">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <!-- Page Header Box Start -->
                <div class="page-header-box">
                    <h1 class="text-anime-style-3" data-cursor="-opaque">
                        Let's Reimagine Maternal Care Together
                    </h1>
                    <p
                        style="font-size: 1.0rem; color: #FAFAFA; margin-top: 3rem; text-align: center;"
                    >
                        Whether you're an expecting mother, healthcare provider,
                        government agency, or partner organization—we empower
                        you with the data necessary to generate visibility at
                        the last-mile, that allows for essential services to
                        reach women who need them most.
                    </p>
                </div>
                <!-- Page Header Box End -->
            </div>
        </div>
    </div>
</div>
<!-- Page Header End -->

<!-- Page Contact Us Start -->
<div class="page-contact-us">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <!-- Contact Info Box Start -->
                <div class="contact-info-box page-contact-info-box">
                    <!-- Contact Info Item Start -->
                    <div
                        class="contact-info-item wow fadeInUp"
                        data-wow-delay="0.25s"
                    >
                        <!-- Icon Box Start -->
                        <div class="icon-box">
                            <img src="images/icon-phone.svg" alt="" />
                        </div>
                        <!-- Icon Box End -->

                        <!-- Contact Info Content Start -->
                        <div class="contact-info-content">
                            <h3>contact details</h3>
                            <p>+254 741 354 060</p>
                        </div>
                        <!-- Contact Info Content End -->
                    </div>
                    <!-- Contact Info Item End -->

                    <!-- Contact Info Item Start -->
                    <div
                        class="contact-info-item wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <!-- Icon Box Start -->
                        <div class="icon-box">
                            <img src="images/icon-location.svg" alt="" />
                        </div>
                        <!-- Icon Box End -->

                        <!-- Contact Info Content Start -->
                        <div class="contact-info-content">
                            <h3>address</h3>
                            <p>00100 - 30197, University Way, Nairobi, Kenya</p>
                        </div>
                        <!-- Contact Info Content End -->
                    </div>
                    <!-- Contact Info Item End -->

                    <!-- Contact Info Item Start -->
                    <div
                        class="contact-info-item wow fadeInUp"
                        data-wow-delay="0.75s"
                    >
                        <!-- Icon Box Start -->
                        <div class="icon-box">
                            <img src="images/icon-mail.svg" alt="" />
                        </div>
                        <!-- Icon Box End -->

                        <!-- Contact Info Content Start -->
                        <div class="contact-info-content">
                            <h3>email us</h3>
                            <p>info@maternanet.com</p>
                        </div>
                        <!-- Contact Info Content End -->
                    </div>
                    <!-- Contact Info Item End -->

                    <!-- Contact Info Social List Start -->
                    <div class="contact-info-social-list">
                        <span>follow us: </span>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/maternanetafrica/"
                                    aria-label="Facebook"
                                    on:click={() => trackSocial('Facebook')}
                                    ><i class="fa-brands fa-facebook-f"></i></a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://x.com/CareconnectA"
                                    aria-label="Twitter"
                                    on:click={() => trackSocial('Twitter')}
                                    ><i class="fa-brands fa-x-twitter"></i></a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/maternanet-africa-ltd/"
                                    aria-label="LinkedIn"
                                    on:click={() => trackSocial('LinkedIn')}
                                    ><i class="fa-brands fa-linkedin-in"></i></a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/maternanet_africa/"
                                    aria-label="Instagram"
                                    on:click={() => trackSocial('Instagram')}
                                    ><i class="fa-brands fa-instagram"></i></a
                                >
                            </li>
                        </ul>
                    </div>
                    <!-- Contact Info Social List End -->

                    <!-- Quantitative Proof Banner Start -->
                    <div
                        style="background-color: #1a2b4c; border-radius: 10px; padding: 20px; color: white; display: flex; align-items: center; gap: 15px; margin-top: 30px;"
                        class="wow fadeInUp"
                        data-wow-delay="1.0s"
                    >
                        <h2 style="color: #00d4ff; margin: 0; font-size: 2rem;">
                            $7x - $20x
                        </h2>
                        <div>
                            <p
                                style="margin: 0; font-weight: bold; font-size: 1.1rem; line-height: 1.2;"
                            >
                                Return on every $1 invested
                            </p>
                            <p
                                style="margin: 0; font-size: 0.9rem; color: #a0aec0; margin-top: 2px;"
                            >
                                in long-term economic benefits
                            </p>
                        </div>
                    </div>
                    <!-- Quantitative Proof Banner End -->
                </div>
                <!-- Contact Info Box End -->
            </div>

            <div class="col-lg-7">
                <!-- Contact Form Start -->
                <div class="contact-us-form">
                    <!-- Form Intro -->
                    <div style="margin-bottom: 2rem;">
                        <h3
                            style="font-size: 1.5rem; color: #333; margin-bottom: 0.5rem;"
                        >
                            Get In Touch
                        </h3>
                        <p style="color: #666; font-size: 1rem;">
                            Drop us a message and we'll get back to you as soon
                            as we can.
                        </p>
                    </div>

                    <form
                        id="contactForm"
                        method="POST"
                        use:enhance={({ formData }) => {
                            isSubmitting = true;
                            statusMsg = "Sending message...";
                            isError = false;

                            const partnershipType = formData.get('partnership_type');
                            const email = String(formData.get('email') ?? '');
                            const name = String(formData.get('name') ?? '');
                            const organization = String(formData.get('organization') ?? '');
                            analytics.track('form_submit_start', { partnershipType });

                            return async ({ result, update }) => {
                                isSubmitting = false;
                                if (result.type === "success") {
                                    if (email) {
                                        analytics.identify(email, { name, organization, partnership_type: partnershipType });
                                    }
                                    analytics.track('form_submit_success', { partnershipType });
                                    const data = result.data as
                                        | { msg?: string }
                                        | undefined;
                                    statusMsg =
                                        data?.msg ??
                                        "Message sent successfully!";
                                    isError = false;
                                    await update({ reset: true });
                                } else if (result.type === "failure") {
                                    analytics.track('form_submit_error', { 
                                        partnershipType,
                                        error: 'validation_failure'
                                    });
                                    const data = result.data as
                                        | { msg?: string }
                                        | undefined;
                                    statusMsg =
                                        data?.msg ??
                                        "Unable to send form. Please try again later.";
                                    isError = true;
                                } else {
                                    analytics.track('form_submit_error', { 
                                        partnershipType,
                                        error: 'system_error'
                                    });
                                    statusMsg =
                                        "An unexpected error occurred. Please try again.";
                                    isError = true;
                                }
                            };
                        }}
                        data-toggle="validator"
                        class="wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div class="row">
                            <div class="form-group col-md-12 mb-4">
                                <label for="fullname">full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="fullname"
                                    placeholder="Enter Your Name"
                                    required
                                />
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="email">your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="phone">phone number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    class="form-control"
                                    id="phone"
                                    placeholder="Enter Your Number"
                                    required
                                />
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="organization">organization</label>
                                <input
                                    type="text"
                                    name="organization"
                                    class="form-control"
                                    id="organization"
                                    placeholder="Your Organization"
                                />
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group col-md-12 mb-4">
                                <label for="partnership_type"
                                    >I'm interested as</label
                                >
                                <select
                                    name="partnership_type"
                                    class="form-control"
                                    id="partnership_type"
                                    required
                                    style="appearance: auto;"
                                >
                                    <option
                                        value="Healthcare Facility Partnership"
                                        >Healthcare Facility Partnership</option
                                    >
                                    <option value="Government / Policy Partner"
                                        >Government / Policy Partner</option
                                    >
                                    <option value="Investor / Funder"
                                        >Investor / Funder</option
                                    >
                                    <option value="NGO / Development Partner"
                                        >NGO / Development Partner</option
                                    >
                                    <option value="Expectant Mother"
                                        >Expectant Mother</option
                                    >
                                    <option value="Community Health Worker"
                                        >Community Health Worker</option
                                    >
                                    <option value="Other">Other</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group col-md-12 mb-4">
                                <label for="message">message</label>
                                <textarea
                                    name="message"
                                    class="form-control"
                                    id="message"
                                    rows="7"
                                    placeholder="write Message..."
                                    required
                                ></textarea>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-lg-12">
                                <div class="contact-form-btn">
                                    <button
                                        type="submit"
                                        class="btn-default"
                                        disabled={isSubmitting}
                                        >{isSubmitting
                                            ? "Sending..."
                                            : "Send"}</button
                                    >
                                    {#if statusMsg}
                                        <div
                                            id="msgSubmit"
                                            class="h5"
                                            class:text-danger={isError}
                                            class:text-success={!isError}
                                            style="margin-top: 1rem;"
                                        >
                                            {statusMsg}
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- Contact Form End -->
            </div>
        </div>
    </div>
</div>
<!-- Page Contact Us End -->

<!-- Google Map starts -->
<div class="google-map">
    <div class="container">
        <div class="row section-row">
            <div class="col-lg-12">
                <!-- Section Title Start -->
                <div class="section-title">
                    <h2 class="text-anime-style-3" data-cursor="-opaque">
                        Location
                    </h2>
                </div>
                <!-- Section Title End -->
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <!-- Google Map Iframe Start -->
                <div class="google-map-iframe">
                    <iframe
                        title="Maternanet location on Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820919689199!2d36.813849273647136!3d-1.2811646356177835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2e51e23e1%3A0x3540e8c20460e444!2s100%20University%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1746031348525!5m2!1sen!2ske"
                        width="600"
                        height="450"
                        style="border:0;"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <!-- Google Map Iframe End -->
            </div>
        </div>
    </div>
</div>
<!-- Google Map Ends -->
