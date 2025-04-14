<script>
    let email = "info@maternanet.com";
    let adminEmail = "admin@maternanet.com";
    let phone = "+2547 4135 4060";
    let address = "00100-30197, City Centre Nairobi, Kenya.";
    let website = "https://www.maternanet.com";
</script>

<main>
    <section>
        <h1>Our Services</h1>
        <p>
            Our services are designed to reduce maternal mortality, enhance
            healthcare accessibility, and provide mothers, healthcare providers,
            and developers with the necessary tools to improve maternal health
            outcomes.
        </p>
    </section>

    <section>
        <h2>For Patients</h2>
        <div class="service">
            <h3>Telemedicine & Virtual Consultations</h3>
            <p>
                Connect with certified healthcare professionals through
                real-time video or audio consultations from anywhere.
            </p>
            <ul>
                <li>Immediate medical advice without travel</li>
                <li>Reduced waiting times and lower costs</li>
                <li>Secure digital records for every session</li>
            </ul>
            <button aria-label="Consult a Doctor">Consult a Doctor</button>
        </div>

        <div class="service">
            <h3>Subscription-Based Premium Plans</h3>
            <p>A trimester-based plan offering enhanced maternal care.</p>
            <ul>
                <li>Unlimited consultations for peace of mind</li>
                <li>Reminders for appointments and medications</li>
                <li>Personalized healthcare recommendations</li>
                <li>Exclusive concierge services</li>
            </ul>
            <button aria-label="Book a Plan">Book a Plan</button>
        </div>
        <div class="service">
            <h3>AI-Powered Analytics & Risk Detection</h3>
            <p>
                Our intelligent algorithms analyze health data to detect early
                risks of maternal complications like preeclampsia, gestational
                diabetes, and postpartum hemorrhage.
            </p>
            <ul>
                <li>Proactive alerts for mothers and providers</li>
                <li>Timely interventions for improved health outcomes</li>
                <li>Personalized healthcare plans</li>
            </ul>
        </div>
        <div class="service">
            <h3>Offline Mode & SMS-Based Alerts</h3>
            <p>
                For regions with unreliable internet, we offer offline access to
                essential services.
            </p>
            <ul>
                <li>
                    SMS alerts for notifications, healthcare tips, and emergency
                    reminders
                </li>
                <li>
                    Critical updates/reminders even without an internet
                    connection
                </li>
                <li>Inclusivity for rural and low-connectivity areas</li>
            </ul>
        </div>
        <div class="service">
            <h3>Location-Based Emergency Services</h3>
            <p>
                A GPS-enabled feature that helps mothers quickly locate nearby
                healthcare facilities, providers, or ambulances in emergencies.
            </p>
            <ul>
                <li>Faster response times in critical situations</li>
            </ul>
        </div>
        <div class="service">
            <h3>“Care Now, Lipa Later” Payment Plan</h3>
            <p>
                Flexible payment options for maternal healthcare services
                through partnerships with insurers.
            </p>
            <ul>
                <li>Increased healthcare access without upfront costs</li>
                <li>Encourages timely medical consultations</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>For Healthcare Providers</h2>
        <div class="service">
            <h3>Patient Management Tools</h3>
            <p>
                A web-based system for efficient patient record-keeping and
                appointment scheduling.
            </p>
            <ul>
                <li>Streamlined workflow for healthcare providers</li>
                <li>
                    Easy access and tracking of patient history and visits
                    (medical records.)
                </li>
                <li>Seamless integration with EMRs</li>
            </ul>
        </div>
        <div class="service">
            <h3>Data Analytics for Providers</h3>
            <p>Access real-time dashboards with population-level insights.</p>
            <ul>
                <li>Evidence-based decision-making</li>
                <li>Improved resource allocation</li>
                <li>
                    Monitor patient progress across multiple facilities in
                    real-time.
                </li>
            </ul>
        </div>
        <div class="service">
            <h3>Secure Communication Channels</h3>
            <p>
                Direct and secure communication between providers and patients.
            </p>
            <ul>
                <li>Seamless doctor-patient interaction</li>
                <li>Enhanced maternal care coordination</li>
            </ul>
        </div>
        <div class="service">
            <h3>Integration Capabilities</h3>
            <p>
                Easily connect with existing hospital systems and electronic
                health records.
            </p>
            <ul>
                <li>
                    We provide developers with the necessary resources to build
                    and integrate maternal healthcare solutions.
                </li>
            </ul>
        </div>
    </section>

    <section>
        <h2>For Developers</h2>
        <div class="service">
            <h3>API Documentation</h3>
            <p>
                Access robust APIs to integrate Maternanet’s services into your
                applications.
            </p>
            <ul>
                <li>Secure and scalable infrastructure</li>
                <li>Easy-to-follow documentation</li>
            </ul>
        </div>
        <div class="service">
            <h3>Integration Guides</h3>
            <p>
                Step-by-step resources to help developers seamlessly integrate
                Maternanet’s services.
            </p>
            <ul>
                <li>Simplified onboarding for developers</li>
                <li>Compatibility with various platforms</li>
            </ul>
        </div>
        <div class="service">
            <h3>Developer Support</h3>
            <p>
                Get expert assistance and troubleshooting for technical
                challenges.
            </p>
            <ul>
                <li>Dedicated support team</li>
                <li>Regular updates and improvements</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>How to Get Started</h2>
        <p>
            Join the thousands of mothers who have already benefited from
            Maternanet’s services by signing up today.
        </p>
        <ul>
            <li><a href="">Sign up</a> on our platform</li>
            <li><a href="">Download the app</a> for easy access</li>
            <li>
                <a href="">Schedule a consultation</a> with a certified healthcare
                provider
            </li>
        </ul>
    </section>

    <section>
        <h2>Contact Us</h2>
        <p>For inquiries, support, or partnerships, reach out to us at:</p>
        <p>Emails: {email} | {adminEmail}</p>
        <p>(We respond within 24 hours).</p>
        <p>Tel: {phone}</p>
        <p>Address: {address}</p>
        <p>Website: <a href={website} target="_blank">{website}</a></p>
    </section>
</main>

<style>
    main {
        width: 80%;
        max-width: 1400px;
        margin: auto;
        overflow: hidden;
        background: white;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        font-size: clamp(0.9rem, 1rem, 1rem);
    }
    section {
        padding: 20px;
    }
    h1,
    h2,
    h3 {
        color: #2c3e50;
    }
    p {
        color: rgb(111, 110, 110);
    }
    .service {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background: #f9fafb;
    }
    ul {
        padding-left: 2rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }
    li {
        margin-top: 10px;
        color: rgb(111, 110, 110);
    }
    button {
        background: #ff6b6b;
        width: 100%;
        max-width: 100%;
        padding: 12px;
        font-size: 1rem;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    @media (min-width: 768px) {
        main {
            width: 85%;
            padding: 15px;
        }
        section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .service {
            padding: 10px;
        }
    }
</style>
