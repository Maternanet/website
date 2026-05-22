export type FaqCategory = {
  id: string;
  label: string;
  title: string;
  colorClass: string;
  items: {
    id: string;
    num: string;
    q: string;
    a: string;
  }[];
};

export const categories: FaqCategory[] = [
  {
    id: 'platform',
    label: 'The platform',
    title: 'How Maternanet works',
    colorClass: 'cat-purple',
    items: [
      {
        id: 'platform-1',
        num: '1',
        q: 'What exactly does Maternanet do — in plain language?',
        a: '<p>Maternanet helps the health system identify pregnant women who are at high risk of complications <strong>weeks before those complications occur</strong>. We do this by giving community health providers digital tools to screen mothers at home, running that data through a predictive risk model, and sending an automatic alert when a mother\'s risk profile crosses a threshold. The CHP then makes a priority visit or coordinates a timely clinic appointment before an emergency develops.</p><p>Think of it as a smoke detector for maternal health — except instead of detecting a fire already burning, it detects the conditions that make a fire likely. We also help remove the financial barrier to acting on that alert through our Care Now, Lipa Later microfinancing partnership.</p><div class="highlight-box">We are not a telemedicine app. We are not a symptom checker. We are the predictive intelligence layer that operates upstream of every other intervention.</div>'
      },
      {
        id: 'platform-2',
        num: '2',
        q: 'How does the predictive risk model work? What variables does it use?',
        a: '<p>Our Composite Women\'s Health Index™ synthesizes <strong>85 variables</strong> across three categories:</p><ul><li><strong>47 clinical variables</strong> — obstetric history, blood pressure, haemoglobin, gestational age, prior complications</li><li><strong>23 socio-economic variables</strong> — household income, insurance status, distance to facility, prior care-seeking behaviour</li><li><strong>15 environmental variables</strong> — county health infrastructure, seasonal road access, local clinic capacity</li></ul><p>Validated against clinical outcomes and WHO checklist-based scoring. Recall (sensitivity): <strong>79%</strong> — 21pp better than standard care. Precision: <strong>81%</strong> — providers are not overwhelmed by false alerts.</p><p>Critically, the model <strong>explains its reasoning</strong>. A provider sees which specific indicators are driving the score, enabling clinical confidence rather than blind algorithmic compliance.</p>'
      },
      {
        id: 'platform-3',
        num: '3',
        q: 'How does it work without internet? We operate in areas with no connectivity.',
        a: '<p>This is by design, not an afterthought. <strong>60% of our users access via SMS or USSD</strong> on feature phones with no data connection.</p><ul><li><strong>Edge computing:</strong> Compressed ML algorithms run locally on rugged tablets and clinic PCs — risk scoring without cloud access</li><li><strong>Data caching & Syncing:</strong> Screenings logged locally with timestamps, syncing bidirectionally when any connection — even 2G — becomes available</li><li><strong>SMS/USSD interface:</strong> Mothers receive risk alerts, reminders, and health nudges via basic text — no smartphone or data plan required</li><li><strong>79% recall</strong> — validated in field conditions below 1kb/second connectivity</li></ul><p>Patent filed: "Distributed Healthcare ML with Progressive Sync" — Kenya Patent Office, Application #2024/789.</p>'
      },
      {
        id: 'platform-4',
        num: '4',
        q: 'Does Maternanet replace doctors and nurses?',
        a: '<p>No. Maternanet operates on a strict <strong>human-in-the-loop principle</strong>. Our model only flags and recommends — it never decides or acts autonomously. Every alert generates a human action: a CHP visit, a clinical escalation, a facility appointment. The clinician always makes the final call.</p><p>In a context where Africa faces a shortage of 6.1 million healthcare workers, our goal is to make every CHP significantly more effective — helping them prioritise their caseloads intelligently and focus their limited time on the mothers who need them most.</p><div class="highlight-box">Our model explains why it flagged a mother — not just that it did. Trust is earned through transparency, not assumed through authority.</div>'
      },
      {
        id: 'platform-5',
        num: '5',
        q: 'How does Maternanet integrate with existing health systems — DHIS2, EMRs?',
        a: '<p>Maternanet operates on a <strong>Two-Channel Architecture</strong> to integrate natively with Kenya\'s national <strong>DHIS2</strong> system and EMRs while securing direct depth data:</p><ul><li><strong>Channel A (OpenHIM):</strong> Clinical data routes directly to government eCHIS networks without manual entry.</li><li><strong>Channel B (Maternanet Direct):</strong> Proprietary socioeconomic & depth data is gathered via direct maternal consent (QR/USSD).</li><li>County health departments access population-level dashboards. Generates automatic SHA claims reports.</li></ul><p><strong>Setup:</strong> 2–4 weeks including staff training. One-time $399 fee + $85/month facility licence. Contact info@maternanet.com for a free trial.</p>'
      }
    ]
  },
  {
    id: 'impact',
    label: 'Impact & evidence',
    title: 'What the data shows',
    colorClass: 'cat-teal',
    items: [
      {
        id: 'impact-1',
        num: '6',
        q: 'What results have you achieved? Are they independently validated?',
        a: '<p>Across 4 active Kenyan counties (Nairobi, Narok, Machakos, Kajiado) over 18 months of deployment:</p><div class="stat-row"><div class="stat-chip"><span>+21pp</span>ANC completion</div><div class="stat-chip"><span>−15%</span>Missed appointments</div><div class="stat-chip"><span>77%</span>6-month retention</div><div class="stat-chip"><span>12+</span>Lives saved/yr</div><div class="stat-chip"><span>$8,100</span>Cost per life saved</div></div><p><strong>Validation:</strong> ANC data cross-referenced against county DHIS2 records and independent clinic registers. Our quasi-experimental evaluation uses difference-in-differences methodology with matched comparison sites and continuous model improvement. A peer-reviewed paper is in preparation with a Kenyan university partner for Year 3–5 validation.</p>'
      },
      {
        id: 'impact-2',
        num: '7',
        q: 'How cost-effective is Maternanet compared to standard maternal health interventions?',
        a: '<p>Currently <strong>$8,100 per life saved</strong>, projected to fall to <strong>$650–$1,300 by 2028</strong> as scale increases. The WHO estimates skilled birth attendance programmes cost $4,000–$12,000 per maternal death prevented — our model is competitive now and improves dramatically with volume.</p><p>Early intervention also reduces average care costs by up to <strong>70%</strong> by treating complications early rather than managing emergencies.</p><div class="highlight-box">Every $1 invested in Maternanet generates $7–$20 in long-term economic benefits — reduced emergency care costs, maternal outcomes, and household poverty prevention.</div>'
      },
      {
        id: 'impact-3',
        num: '8',
        q: 'Can pre-eclampsia and other complications actually be predicted weeks in advance?',
        a: '<p>Yes — and this is the clinical foundation of Maternanet. Machine learning risk models for pre-eclampsia and obstetric complications have been validated in peer-reviewed literature (BioMed Central, WHO Digital Guidelines) showing clinically useful discrimination using routine maternal data. Risk profile simulation for prenatal risk monitoring is an emerging but evidence-supported methodology.</p><p>Our model identifies the <strong>combination of signals</strong> that, in aggregate, indicate elevated risk weeks before clinical symptoms manifest — giving CHPs and clinicians a window for intervention that standard screening misses entirely.</p>'
      }
    ]
  },
  {
    id: 'community',
    label: 'Community & CHPs',
    title: 'The Digital Doula network',
    colorClass: 'cat-gold',
    items: [
      {
        id: 'community-1',
        num: '9',
        q: 'What is a Digital Doula and how are they trained?',
        a: '<p>A Digital Doula is an existing community health provider (CHP) equipped by Maternanet to conduct community-level screenings, follow up on flagged high-risk mothers, and bridge the household-to-clinic gap where most maternal deaths happen.</p><ul><li><strong>10-day intensive bootcamp:</strong> clinical basics, app usage, device handling, escalation protocols</li><li><strong>Continuous digital refreshers</strong> accessible offline on tablet or SMS</li><li><strong>Quarterly in-person workshops</strong> for peer learning and protocol updates</li><li><strong>Maximum 45-60 mothers per CHP</strong> with performance-based incentives</li></ul><p>Currently <strong>410 active Digital Doulas</strong> across 4 counties, with a <strong>96% retention rate</strong>.</p>'
      },
      {
        id: 'community-2',
        num: '10',
        q: 'How do you ensure cultural sensitivity and community trust — especially with digital tools?',
        a: '<p>Most digital health interventions fail here. We built Maternanet from within the communities we serve — our founding team comes from these regions and understands that trust is earned through presence, not technology.</p><ul><li><strong>Co-design:</strong> Features shaped in local workshops before they are built, not after.</li><li><strong>Digital Doula ambassadors</strong> moderate peer forums — the platform is an extension of trusted social networks.</li><li><strong>Local language delivery:</strong> SMS nudges in Swahili and local dialects.</li><li><strong>Federated learning:</strong> models trained on-site without raw personal data leaving the community.</li><li><strong>Explainable Recommendations:</strong> Providers and mothers see why the model flagged a risk, not just that it did.</li></ul><p>Our 77% weekly engagement and retention rate — in communities with historically low digital health adoption — is the evidence this approach works.</p>'
      },
      {
        id: 'community-3',
        num: '11',
        q: 'What happens when a mother can\'t afford care after being flagged as high-risk?',
        a: '<p>Detecting risk without removing the barrier to acting on it is not a solution; fortunately we realized this earlier on. Maternanet addresses the financial barrier through two mechanisms:</p><ul><li><strong>Care Now, Lipa Later:</strong> Microfinance institution partnerships providing clinically-authorized emergency credit for predictively identified high-risk interventions — accessible at the point of the alert, but requiring mandatory Clinical Officer confirmation to prevent debt cycles.</li><li><strong>Micro-saving wallets:</strong> Mothers save incrementally via mobile wallet — as little as KSh 30 per deposit — earmarked for delivery costs, reducing reliance on emergency borrowing</li></ul><p>Our B2B revenue model subsidises care at the community level. The mother pays nothing extra. We take from the institutional top of the pyramid and give to the bottom.</p>'
      }
    ]
  },
  {
    id: 'partner',
    label: 'Partner & fund',
    title: 'Working with Maternanet',
    colorClass: 'cat-coral',
    items: [
      {
        id: 'partner-1',
        num: '12',
        q: 'How can our hospital, clinic, or county health department integrate with Maternanet?',
        a: '<p>Integration follows a four-step pathway:</p><ul><li><strong>Assessment (1–2 weeks):</strong> IT readiness, EMR/DHIS2 setup, catchment area characteristics</li><li><strong>Integration and setup (2–4 weeks):</strong> Technical integration, tablet/PC installation, staff training</li><li><strong>Digital Doula deployment:</strong> Existing CHPs from your community are equipped with our predictive tools</li><li><strong>Go-live:</strong> Real-time dashboard showing population risk distribution, referral rates, outcome tracking</li></ul><p><strong>Pricing:</strong> $85/month facility licence + $399 one-time setup. Revenue-sharing partnerships available. Contact info@maternanet.com.</p>'
      },
      {
        id: 'partner-2',
        num: '13',
        q: 'How can NGOs, development organisations, and international partners work with Maternanet?',
        a: '<p>Three primary partnership models:</p><ul><li><strong>Programme co-deployment:</strong> Embed Maternanet within your existing maternal health programmes as the predictive intelligence layer</li><li><strong>Population health analytics:</strong> License our data dashboards for evidence generation and policy advocacy — from $25,000/project</li><li><strong>Academic research:</strong> Partner on impact studies including our upcoming peer review literature — academic licensing from $15,000/study</li></ul><p>Early-mover partners in Uganda, Tanzania, Rwanda, Nigeria, and Ghana receive preferential data access and co-authorship opportunities on evidence outputs. Contact info@maternanet.com.</p>'
      },
      {
        id: 'partner-3',
        num: '14',
        q: 'What investment or funding opportunities exist? What are you currently raising?',
        a: '<p>Currently deploying a <strong>$550,000 strategic capital round</strong> (through Q1 2027) to build the data foundation that unlocks high-margin DaaS revenue streams at scale by 2028–2029:</p><ul><li>Technology enhancement — model refinement, autonomous agent pilots (36.8%)</li><li>First-mile logistics — CHP training and rural deployment (26.3%)</li><li>Partnership integration — county and facility expansion (15.8%)</li><li>Equipment and hardware — rugged tablets, diagnostic kits (10.5%)</li><li>Working capital (10.5%)</li></ul><p><strong>Trajectory:</strong> $95,897 actual 2025 revenue → $536,303 projected 2029. EBITDA break-even Q4 2026. ROI visible 18–25 months post-deployment. Contact owinoaketch@maternanet.com for the full investor pack.</p>'
      },
      {
        id: 'partner-4',
        num: '15',
        q: 'Is Maternanet grant-dependent? What does long-term sustainability look like?',
        a: '<p>No. Three diversified, reinforcing revenue streams:</p><ul><li><strong>B2B facility licensing</strong> — current primary revenue</li><li><strong>Data-as-a-Service</strong> — activating 2026, government and NGO analytics contracts</li><li><strong>Consumer and financial services</strong> — activating 2027, premium subscriptions and Care Now, Lipa Later revenue share</li></ul><p>Grants and impact investment accelerate deployment — they do not sustain it. 20%+ net margins projected by 2028. Commercial success and social impact grow in the same direction: more enrolled mothers → better model → lower cost per outcome.</p>'
      }
    ]
  },
  {
    id: 'data',
    label: 'Data & privacy',
    title: 'How we handle sensitive health data',
    colorClass: 'cat-ink',
    items: [
      {
        id: 'data-1',
        num: '16',
        q: 'How is mothers\' personal and health data protected?',
        a: '<ul><li><strong>End-to-end encryption</strong> across all data pipelines with local data sovereignty — data collected in Kenya stays in Kenya</li><li><strong>Federated learning:</strong> models trained on-site at local clinics without raw personal data leaving the facility</li><li><strong>Kenya Data Protection Act (2019) compliance:</strong> Full alignment including data minimisation, purpose limitation, and subject access rights</li><li><strong>GDPR-equivalent standards</strong> applied for all international data partnerships</li><li><strong>Community consent frameworks:</strong> Every enrolled mother and CHP consents explicitly, with clear explanations in local languages</li></ul><p>ODPC registration and DPIA approval in progress. KMPDC telehealth certification expected Q3 2026.</p>'
      },
      {
        id: 'data-2',
        num: '17',
        q: 'Is Maternanet\'s predictive model classified as a medical device? Are you regulated?',
        a: '<p>Whether our predictive tools qualify as Software as a Medical Device (SaMD) under Kenya PPB and WHO frameworks is a question we are actively working through — proactively, not reactively.</p><p>Current regulatory status:</p><ul><li>NACOSTI Research Permit — <strong>already obtained</strong></li><li>KMPDC digital health certification — <strong>in progress, expected Q3 2026</strong></li><li>ODPC Data Controller registration — <strong>in progress</strong></li><li>DHA Digital Health License — <strong>application underway</strong></li><li>Kenya Health Data Governance Framework (2024) — <strong>compliance in progress</strong></li></ul>'
      }
    ]
  },
  {
    id: 'scale',
    label: 'Scale & markets',
    title: 'Where Maternanet is going',
    colorClass: 'cat-purple',
    items: [
      {
        id: 'scale-1',
        num: '18',
        q: 'What is your expansion roadmap across Africa?',
        a: '<ul><li><strong>Phase 1: 0 to 1 (2025–2028) — Kenya data foundation:</strong> 8+ counties, 80+ facilities, 500+ CHPs. Build national policy evidence base.</li><li><strong>Phase 2: 1 to 100 (2028–2030) — National scale:</strong> Hub &amp; Spoke expansion across Kenya, full DHIS2 and EHR integration, county cost-sharing.</li><li><strong>Phase 3: 100 to Scale (2031–2035) — Pan-African entry:</strong> Uganda, Tanzania, Rwanda, Nigeria, Ghana.</li></ul><p>Long-term vision: 1M+ women across 5 countries, Kenya achieving fewer than 150 maternal deaths per 100,000 live births by 2030.</p>'
      },
      {
        id: 'scale-2',
        num: '19',
        q: 'Can Maternanet\'s model work in my country? What does deployment require?',
        a: '<p>Our model is transferable wherever three conditions exist: a community health worker structure, 2G mobile coverage (minimum), and a maternal mortality challenge driven by detection delays and access barriers. That describes most of sub-Saharan Africa.</p><p>Deployment requirements:</p><ul><li>A local implementation partner with existing community health networks</li><li>A Ministry or county health department willing to sandbox with us</li><li>6–12 months for predictive model localisation, consent framework adaptation, and regulatory clearance</li><li>Minimum cohort of 50 CHPs and 2 facility partners to build data density for model accuracy</li></ul><p>We are actively seeking early-mover partners in Uganda, Tanzania, Rwanda, Nigeria, and Ghana. Contact info@maternanet.com with your context.</p>'
      },
      {
        id: 'scale-3',
        num: '20',
        q: 'How does Maternanet align with UN SDG 3 and global maternal health commitments?',
        a: '<p>Maternanet is built to <em>demonstrate</em> SDG 3 achievement through a replicable, cost-effective model — not just aspire to it.</p><p><strong>Primary alignment:</strong> SDG 3 (Good Health and Well-being), SDG 5 (Gender Equality), SDG 10 (Reduced Inequalities)</p><p><strong>Secondary alignment:</strong> SDG 1 (No Poverty — reduced catastrophic healthcare costs), SDG 8 (Decent Work — CHP jobs), SDG 9 (Innovation and Infrastructure), SDG 17 (Partnerships)</p><div class="highlight-box">We are not making incremental improvements to a broken system. We are demonstrating that technology-enabled, community-driven care can achieve SDG 3 targets cost-effectively — and creating a replicable model for the global South.</div>'
      }
    ]
  }
];

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'platform', label: 'Platform' },
  { id: 'impact', label: 'Impact & Evidence' },
  { id: 'community', label: 'Community' },
  { id: 'partner', label: 'Partner & Fund' },
  { id: 'data', label: 'Data & Privacy' },
  { id: 'scale', label: 'Scale & Markets' }
];