<script lang="ts">
    import ContactService from "$lib/api/contact.api";

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let statusMsg = "";
    let isError = false;
    let isSubmitting = false;

    async function handleSubmit() {
        if (isSubmitting) return;
        isSubmitting = true;
        statusMsg = "Sending message...";
        isError = false;

        try {
            const res = await ContactService.sendContact({ name, email, phone, message });
            if (res?.error) {
                isError = true;
                statusMsg = res.msg || "Unable to send form. Please try again later.";
            } else {
                statusMsg = "Message sent successfully! We will get back to you soon.";
                name = "";
                email = "";
                phone = "";
                message = "";
            }
        } catch (error) {
            isError = true;
            statusMsg = "An error occurred. Please try again.";
        } finally {
            isSubmitting = false;
        }
    }
</script>

<!-- Page Header Start -->
	<div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-12">
					<!-- Page Header Box Start -->
					<div class="page-header-box">
						<h1 class="text-anime-style-3" data-cursor="-opaque">Let's Reimagine Maternal Care Together</h1>
						<p style="font-size: 1.2rem; color: #666; margin-top: 1rem;">Whether you're an expecting mother, healthcare provider, government agency, or partner organization—there's a role for you in ending preventable maternal deaths.</p>
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
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                            <!-- Icon Box Start -->
                            <div class="icon-box">
                                <img src="images/icon-phone.svg" alt="">
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
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                            <!-- Icon Box Start -->
                            <div class="icon-box">
                                <img src="images/icon-location.svg" alt="">
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
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.75s">
                            <!-- Icon Box Start -->
                            <div class="icon-box">
                                <img src="images/icon-mail.svg" alt="">
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
                                <li><a href="#" aria-label="Facebook" on:click={e => e.preventDefault()}><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#" aria-label="Twitter" on:click={e => e.preventDefault()}><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#" aria-label="LinkedIn" on:click={e => e.preventDefault()}><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#" aria-label="Instagram" on:click={e => e.preventDefault()}><i class="fa-brands fa-instagram"></i></a></li>                                   
                            </ul>
                        </div>
                        <!-- Contact Info Social List End -->
                    </div>
                    <!-- Contact Info Box End -->
                </div>

                <div class="col-lg-7">
                    <!-- Contact Form Start -->
                    <div class="contact-us-form">
                        <!-- Form Intro -->
                        <div style="margin-bottom: 2rem;">
                            <h3 style="font-size: 1.5rem; color: #333; margin-bottom: 0.5rem;">Your Next Step</h3>
                            <p style="color: #666; font-size: 1rem;">Tell us about you and your role. We'll connect you with the right team member who can discuss how Maternanet can support your journey or partnership goals.</p>
                        </div>

                        <form id="contactForm" on:submit|preventDefault={handleSubmit} data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row">
                                <div class="form-group col-md-12 mb-4">
                                    <label for="fullname">full name</label>
                                    <input type="text" bind:value={name} name="fullname" class="form-control" id="fullname" placeholder="Enter Your Name" required>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-6 mb-4">
                                    <label for="email">your email</label>
                                    <input type="email" bind:value={email} name ="email" class="form-control" id="email" placeholder="Enter Your Email" required>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-6 mb-4">
                                    <label for="phone">phone number</label>
                                    <input type="text" bind:value={phone} name="phone" class="form-control" id="phone" placeholder="Enter Your Number" required>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group col-md-12 mb-4">
                                    <label for="message">message</label>
                                    <textarea bind:value={message} name="message" class="form-control" id="message" rows="7" placeholder="write Message..." required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-form-btn">
                                        <button type="submit" class="btn-default" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
                                        {#if statusMsg}
                                            <div id="msgSubmit" class="h5" class:text-danger={isError} class:text-success={!isError} style="margin-top: 1rem;">{statusMsg}</div>
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
                        <h2 class="text-anime-style-3" data-cursor="-opaque">Location</h2>
                    </div>
                    <!-- Section Title End -->
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <!-- Google Map Iframe Start -->
                    <div class="google-map-iframe">
                      <iframe title="Maternanet location on Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820919689199!2d36.813849273647136!3d-1.2811646356177835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2e51e23e1%3A0x3540e8c20460e444!2s100%20University%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1746031348525!5m2!1sen!2ske" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <!-- Google Map Iframe End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Google Map Ends -->