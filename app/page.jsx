import SiteHeader from "./components/SiteHeader";
import MobileBar from "./components/MobileBar";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you give me legal advice or tell me which document I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. I am a Notary Public, not an attorney licensed to practice law. I cannot give legal advice, prepare legal documents, or advise which document you need. For any legal questions, please consult a licensed attorney. My role is to verify your identity and witness your signature."
      }
    },
    {
      "@type": "Question",
      "name": "What forms of ID are accepted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each signer must present a valid photo ID that is current or was issued within the past 5 years — a California driver’s license or DMV ID card, a U.S. passport or passport card, a driver’s license or ID from another state, a driver’s license from Canada or Mexico, a valid passport or consular ID from your country of citizenship, or a U.S. military ID. See the full list under “What To Have Ready.”"
      }
    },
    {
      "@type": "Question",
      "name": "Do you travel to hospitals and care facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile appointments are available for hospitals, assisted living facilities, rehabilitation centers, and care homes."
      }
    },
    {
      "@type": "Question",
      "name": "Are evening or weekend appointments available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Evening, weekend, and urgent same-day appointments may be available depending on scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Same-day appointments may be available depending on your location, availability, and the type of document needing notarization."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge extra for same-day, after-hours, or holiday appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Last-minute and same-day requests, appointments outside my posted hours, and major holidays carry an additional fee on top of the standard notarization and travel fees. The amount depends on the timing and how far I’m traveling. You will always be quoted the full cost before the appointment is booked."
      }
    },
    {
      "@type": "Question",
      "name": "Do all signers need to be present?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every person whose signature requires notarization must personally appear before the notary at the time of signing."
      }
    },
    {
      "@type": "Question",
      "name": "Can documents be signed before the appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Most notarized documents must be signed in front of the notary during the appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you travel to jails or correctional facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Jail notarizations may be available depending on the facility’s policies, appointment rules, and scheduling availability."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize real estate or loan documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Loan signing services are available for refinance packages, HELOCs, buyer documents, seller packages, and other real estate signing appointments."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For your convenience, I accept cash, card and Apple Pay (via Square), Venmo, PayPal, and Zelle. Payment is collected at the appointment."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you travel to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile appointments are available throughout Fresno, Clovis, and surrounding Central Valley communities."
      }
    }
  ]
};

export default function HomePage() {
  const Icon = ({ type }) => {
    const icons = {
      clock: (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </>
      ),
      shield: (
        <>
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </>
      ),
      car: (
        <>
          <path d="M5 14l1.5-4.5h11L19 14" />
          <path d="M5 14h14v4H5v-4z" />
          <circle cx="8" cy="18" r="1" />
          <circle cx="16" cy="18" r="1" />
        </>
      ),
      calendar: (
        <>
          <rect x="5" y="5" width="14" height="16" rx="1" />
          <path d="M8 3v4M16 3v4M5 9h14" />
          <path d="M8 13h2M12 13h2M16 13h1M8 17h2M12 17h2" />
        </>
      ),
      bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
      stamp: (
        <>
          <path d="M5 21h14" />
          <path d="M5 18h14v-1a3 3 0 0 0 -3 -3h-1.5l.5 -7a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2l.5 7h-1.5a3 3 0 0 0 -3 3v1z" />
        </>
      ),
      document: (
        <>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v6h5M10 14h6M10 17h5" />
        </>
      ),
      pen: (
        <>
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />
          <path d="M13 7l4 4M12 20h9" />
        </>
      ),
      check: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 12.5l2.5 2.5 5-5" />
        </>
      ),
      pin: (
        <>
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2" />
        </>
      ),
      message: <path d="M4 5h16v11H8l-4 4z" />,
      mail: (
        <>
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <path d="M4 7l8 6 8-6" />
        </>
      ),
      phone: (
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      ),
      id: (
        <>
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <path d="M8 10h4M8 14h8M15 10h2" />
        </>
      ),
      users: (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M17 11a2.5 2.5 0 1 0 0-5M15 15c3 0 5 2 5 5" />
        </>
      ),
    };

    return (
      <svg className="svg-icon" viewBox="0 0 24 24" fill="none">
        <g stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          {icons[type]}
        </g>
      </svg>
    );
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <SiteHeader />

        <section id="top" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Professional. Reliable. Discreet.</p>
            <h1>Fresno Mobile Notary & Loan Signing Services</h1>
            <p className="gold">Delivered To You.</p>
            <div className="line"></div>
            <p className="subtext">
              Convenient, professional, and accurate mobile notary and loan signing services throughout Fresno County and the Central Valley.
            </p>

            <div className="buttons">
              <a className="btn btn-dark" href="https://calendly.com/appointments-centralvalleynotarygroup/30min">Schedule Appointment</a>
              <a className="btn btn-light" href="sms:15593927420">Text (559) 392-7420</a>
            </div>

            <div className="feature-bar">
              <div className="feature"><Icon type="clock" /><div><h3>Same-Day Appointments</h3><p>When you need it, we’re there.</p></div></div>
              <div className="feature"><Icon type="shield" /><div><h3>Bonded & Insured</h3><p>Your peace of mind is our priority.</p></div></div>
              <div className="feature"><Icon type="car" /><div><h3>We Travel To You</h3><p>Homes, offices, hospitals, jails & more.</p></div></div>
              <div className="feature"><Icon type="calendar" /><div><h3>Evening & Weekend Availability</h3><p>Flexible scheduling to fit your needs.</p></div></div>
              <div className="feature"><Icon type="bolt" /><div><h3>Last-Minute Signings Welcome</h3><p>We’re here when you’re in a rush.</p></div></div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="center">
            <p className="section-label">Services</p>
            <h2>Professional Notary Services</h2>
          </div>

          <div className="grid4">
            <div className="card"><Icon type="document" /><h3>Loan Signing Services</h3><div className="card-line"></div><p>Refinance packages, HELOCs, seller packages, buyer closings, and real estate loan documents.</p><div className="price">Starting at <span>$150</span></div><div className="card-foot"><div className="price-note">$150 covers a single-borrower package; $200 when two people sign. Travel is quoted by distance.</div><a className="card-link" href="/loan-signing-agent-fresno">More about loan signings &rarr;</a></div></div>
            <div className="card"><Icon type="users" /><h3>Trust & Estate Signings</h3><div className="card-line"></div><p>Living trusts, pour-over wills, certifications of trust, powers of attorney, healthcare directives, and grant deeds.</p><div className="price">Starting at <span>$125</span></div><div className="price-note">$15 per notarized signature, plus travel. Most trust packages run 6 to 12 signatures.</div></div>
            <div className="card"><Icon type="shield" /><h3>Jail Notarizations</h3><div className="card-line"></div><p>Power of attorney forms, inmate authorization forms, legal affidavits, and custody-related documents.</p><div className="price">Starting at <span>$165</span></div><div className="price-note">Travel fee may apply by service area.</div></div>
            <div className="card"><Icon type="pen" /><h3>General Notary Services</h3><div className="card-line"></div><p>Power of attorney forms, affidavits, travel consent forms, trusts, and healthcare directives.</p><div className="price">Per signature <span>$15</span></div><div className="price-note">Plus a travel fee, based on where we're traveling to.</div></div>
          </div>
          <p className="pricing-note">
            <strong>California's notarization fee is $15 per notarized signature, plus travel.</strong> Each additional signature is $15, and a travel fee applies based on where we're traveling to. Loan signing and jail notarizations start at the rates shown above. You will always receive a clear, itemized quote before anything is signed.
          </p>
          <p className="pricing-note fee-note">
            <strong>Same-day, after-hours, and holiday appointments carry an additional fee.</strong> This applies to last-minute and rush requests, appointments outside my posted hours, and major holidays. The amount depends on the timing and how far the travel is &mdash; you&rsquo;ll be quoted the full cost when you book, and nothing is added afterward.
          </p>
        </section>

        <section id="all-services" className="svc-section">
          <div className="center">
            <p className="section-label">Full Range of Services</p>
            <h2>Everything We Notarize</h2>
            <p className="svc-intro">From a single acknowledgment to a full loan or estate package, here's the complete range of signings we handle — at your home, office, or facility.</p>
          </div>
          <div className="svc-list">
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Mobile / General Notarization</h3>
                <p>We travel to you to notarize acknowledgments, jurats, affidavits, and other documents at your home, office, or chosen location.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Loan Signing Agent Services</h3>
                <p>Full signing service for real estate transactions — document presentation, notarization, and return-shipping coordination with your lender or escrow.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Refinance Signings</h3>
                <p>Complete notarization and signing of refinance loan packages at your convenience.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Purchase &amp; Seller Signings</h3>
                <p>On-site signing support for buyers and sellers closing a real estate purchase.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>HELOC Signings</h3>
                <p>Notarization of home equity line of credit documents, including the right-of-rescission timing.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Reverse Mortgage Signings</h3>
                <p>Careful, unhurried signing service for reverse mortgage packages.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Trust &amp; Estate Signings</h3>
                <p>Notarization of living trusts, wills, and estate-planning packages, coordinated with your attorney or planner.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Powers of Attorney &amp; Advance Directives</h3>
                <p>Notarization of durable powers of attorney and advance healthcare directives.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Hospital &amp; Care Facility Notary</h3>
                <p>We come to hospitals, assisted living, and care facilities for patients and residents.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Jail &amp; Correctional Facility Notary</h3>
                <p>Notary service for inmates and their documents at local correctional facilities.</p>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-check" aria-hidden="true"></span>
              <div>
                <h3>Same-Day &amp; After-Hours Notary</h3>
                <p>Last-minute, evening, and weekend appointments when you need them.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="before-appointment">
          <div className="center">
            <p className="section-label">Before Your Appointment</p>
            <h2>What To Have Ready</h2>
          </div>

          <div className="ready-grid">
            <div className="ready-tile">
              <div className="circle-icon">
                <Icon type="id" />
              </div>
              <p>Valid government-issued photo ID</p>
            </div>

            <div className="ready-tile">
              <div className="circle-icon">
                <Icon type="document" />
              </div>
              <p>Unsigned documents ready for review</p>
            </div>

            <div className="ready-tile">
              <div className="circle-icon">
                <Icon type="users" />
              </div>
              <p>All required signers present</p>
            </div>

            <div className="ready-tile">
              <div className="circle-icon">
                <Icon type="check" />
              </div>
              <p>Witnesses available if your document requires them</p>
            </div>
          </div>

          <div className="id-list">
            <h3>Acceptable Photo ID</h3>
            <p className="id-intro">
              Each signer must present a valid photo ID that is current or was issued within the
              past 5 years, such as:
            </p>
            <ul>
              <li>California driver’s license or ID card issued by the DMV</li>
              <li>U.S. passport or U.S. passport card</li>
              <li>Driver’s license or ID card issued by another U.S. state</li>
              <li>Driver’s license issued by a Canadian or Mexican public agency</li>
              <li>Valid passport from your country of citizenship</li>
              <li>Consular ID issued by your country’s consulate</li>
              <li>U.S. military ID card</li>
              <li>Employee ID issued by a California state, city, or county agency</li>
              <li>ID card issued by a federally recognized tribal government</li>
              <li>Inmate ID issued by CDCR or a sheriff’s department (for in-custody signings)</li>
            </ul>
            <p className="id-note">
              IDs issued outside California must also include a photograph, physical description,
              signature, and an identifying number.
            </p>
          </div>
        </section>

        <section id="service-area" className="sa-band">
          <div className="sa-wrap">
            <svg
              className="sa-map"
              viewBox="0 0 300 620"
              role="img"
              aria-label="Map of California showing the Fresno service radius"
            >
              <path
                d="M168.5,443.8L170.1,444.0L172.9,445.5L174.9,446.1L175.0,446.8L176.6,448.6L176.1,449.8L174.8,449.1L172.3,448.9L171.7,447.9L171.7,445.8L169.7,445.3ZM168.4,458.6L169.3,458.5L171.5,461.8L175.4,465.5L174.5,465.4L173.4,466.0L171.7,464.8L170.4,462.7L169.0,459.4ZM155.9,443.4L156.7,443.2L156.8,444.4L155.7,444.2ZM145.6,425.5L146.4,426.0L147.5,425.6L147.5,426.5L145.8,426.6L144.9,426.0ZM141.5,450.4L142.9,450.2L144.9,451.2L145.7,452.1L144.4,452.5L142.4,451.9ZM132.1,423.9L133.9,424.1L135.2,424.8L136.7,424.6L138.5,425.8L140.4,426.0L141.1,424.8L143.1,425.4L142.0,426.6L139.2,427.0L137.6,427.8L133.4,427.2L133.3,425.4ZM123.1,426.4L125.3,426.2L126.1,425.6L127.4,425.8L128.7,425.3L128.7,426.7L130.5,427.0L130.6,428.4L126.5,430.0L125.0,428.9ZM117.5,425.2L119.1,424.8L119.7,424.0L120.3,425.0L121.6,425.7L119.5,425.9ZM13.5,145.5L28.8,145.6L29.7,145.4L37.4,145.4L42.9,145.1L45.7,145.3L57.1,145.2L60.8,145.1L70.2,145.1L74.7,145.3L89.9,145.5L101.2,145.7L120.8,145.7L129.9,145.6L129.9,145.6L129.9,191.4L130.0,192.5L130.0,216.1L129.9,228.2L129.8,228.6L129.8,242.7L129.7,246.4L129.9,254.5L132.5,256.8L143.9,266.9L155.2,277.1L161.5,282.6L171.3,291.6L183.7,302.9L189.8,308.5L202.4,320.2L233.5,349.5L256.7,371.8L263.6,378.6L278.2,392.9L278.1,397.2L279.7,398.8L280.4,400.8L282.7,402.6L285.3,409.5L285.1,411.2L286.3,411.4L289.4,414.3L290.8,414.8L291.9,416.4L292,417.8L289.5,419.6L289.4,420.2L287.7,420.8L286.7,421.9L284.5,422.8L283.7,423.6L283.7,425.6L280.9,428.9L281.6,429.4L281.8,431.0L281.2,431.2L281.1,432.7L281.8,434.5L282.0,436.6L281.2,436.9L280.8,440.1L281.2,441.4L280.3,442.1L277.5,446.0L275.6,446.3L276.4,447.7L275.5,449.5L277.0,450.7L276.8,454.7L276.1,456.6L277.5,458.6L277.8,458.1L279.1,458.8L279.8,458.4L281.4,458.7L282.9,462.5L282.8,464.7L281.0,466.5L281.2,467.6L278.7,468.4L276.3,468.0L275.8,468.9L234.6,472.4L209.4,474.9L209.1,472.2L208.2,470.4L207.4,469.9L206.0,470.5L205.7,468.7L205.8,466.7L205.0,465.5L205.9,463.8L205.0,459.2L203.7,455.6L202.8,454.1L198.9,448.6L196.4,446.9L195.4,445.4L193.9,444.4L193.0,444.4L191.1,441.7L188.5,440.0L187.1,439.6L185.2,438.0L182.7,435.5L180.3,434.4L180.1,435.7L178.0,436.4L176.2,436.0L175.2,435.3L173.8,435.1L173.4,434.0L174.3,433.0L174.4,431.8L173.0,428.5L171.9,426.6L170.2,425.2L166.7,425.2L164.5,425.4L162.9,426.4L161.6,425.4L158.8,424.9L155.1,423.2L153.9,423.1L151.5,421.6L149.9,417.6L148.9,417.3L147.2,415.8L146.8,415.9L144.8,414.0L142.7,413.3L142.1,412.7L138.9,412.6L137.4,413.3L135.6,412.5L133.4,412.8L129.7,411.1L127.4,411.1L125.9,410.7L121.6,410.9L116.8,411.5L116.7,410.6L115.4,408.7L113.8,407.9L112.7,408.0L112.1,407.0L113.3,402.9L112.3,401.2L113.0,397.7L111.4,396.2L112.3,392.9L112.4,388.8L110.6,387.2L109.2,387.0L108.9,387.6L106.2,386.0L105.1,384.6L106.1,380.8L105.9,379.3L104.8,377.8L102.1,377.4L99.5,374.4L97.7,371.4L95.3,370.7L93.6,368.8L93.1,366.4L91.5,365.0L90.8,363.9L89.4,362.9L88.8,360.0L88.3,359.0L86.4,358.1L84.9,355.1L82.4,352.3L79.1,350.4L78.0,349.1L77.2,346.8L77.3,345.5L76.2,342.5L76.4,339.8L75.4,339.3L76.3,337.2L78.1,338.3L79.0,337.4L79.7,335.6L80.5,331.4L78.4,327.0L77.2,325.7L76.2,325.4L75.4,326.2L71.7,326.2L68.9,324.1L66.7,321.1L65.3,320.6L65.1,319.6L63.5,317.9L63.1,316.0L63.5,312.2L62.4,309.5L62.2,307.9L61.0,307.5L60.4,306.5L60.3,304.6L60.8,303.8L61.0,301.5L60.4,297.5L61.8,296.6L63.4,296.4L63.9,297.1L64.6,299.8L63.7,300.0L64.8,303.2L64.6,304.1L67.3,304.7L70.0,307.1L70.8,307.0L72.2,308.9L73.4,308.8L72.8,307.6L71.6,307.0L70.6,304.4L69.9,301.1L67.8,299.5L67.6,298.1L65.4,297.4L66.3,295.1L65.6,293.1L64.1,293.1L62.8,291.1L63.5,291.3L64.4,290.6L64.4,289.4L66.3,289.4L67.3,288.2L66.3,286.1L63.7,284.8L62.5,285.7L61.1,285.9L61.3,287.3L60.8,288.7L62.3,290.2L61.1,291.0L60.7,292.3L62.6,294.0L61.9,294.4L60.8,293.5L61.5,295.6L60.0,296.1L59.1,295.0L56.5,293.2L55.2,293.5L52.9,291.5L51.9,289.9L50.3,288.9L48.7,288.7L46.7,289.7L48.1,285.8L48.4,284.4L47.2,281.6L47.9,281.0L46.3,278.9L45.2,279.2L45.1,277.2L43.4,273.9L41.4,272.4L40.0,271.8L37.9,269.9L34.2,264.5L32.8,263.6L32.0,262.4L28.9,259.7L26.6,256.1L27.9,253.7L27.8,252.4L26.5,248.6L24.9,244.8L24.2,241.6L24.5,238.6L25.8,234.5L25.3,232.9L25.3,230.9L23.9,228.1L23.5,224.7L21.9,223.6L21.3,221.9L17.8,217.8L17.1,217.6L17.1,216.3L16.3,214.9L14.2,213.9L9.3,209.2L9.7,207.3L9.3,205.1L8,202.8L8.9,199.7L10.3,196.3L14.4,188.0L15.5,185.0L16.2,181.3L15.0,180.1L14.9,177.1L15.3,177.0L16.4,173.9L17.6,166.2L17.1,162.2L15.6,158.1L14.8,155.1L14.0,155.2L12.3,153.5L13.3,151.1L13.8,147.6Z"
                fill="rgba(255,255,255,.035)"
                stroke="rgba(230,205,138,.45)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <circle cx="135.8" cy="333.7" r="37.4" fill="none" stroke="rgba(201,162,74,.30)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="135.8" cy="333.7" r="25" fill="rgba(201,162,74,.10)" stroke="rgba(201,162,74,.45)" strokeWidth="1" />
              <circle cx="135.8" cy="333.7" r="12.5" fill="rgba(201,162,74,.18)" stroke="rgba(201,162,74,.6)" strokeWidth="1" />
              <circle cx="135.8" cy="333.7" r="9" fill="none" stroke="rgba(201,162,74,.35)" strokeWidth="1" />
              <circle cx="135.8" cy="333.7" r="4.5" fill="#c9a24a" />
              <text x="184.2" y="338.7" fill="#ffffff" className="sa-map-label">Fresno</text>
            </svg>

            <div className="sa-head">
              <p className="section-label">Service Area</p>
              <h2>Serving Fresno and the Central Valley</h2>
            </div>

            <div className="sa-body">
              <p className="sa-lede">
                I come to you — home, office, hospital, care facility, or
                correctional facility — throughout Fresno County and the
                surrounding valley.
              </p>

              <p className="sa-tier">Primary Service Area</p>
              <div className="sa-primaries">
                {["Fresno", "Clovis"].map((city) => (
                  <div className="sa-pcard" key={city}>
                    <Icon type="pin" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <p className="sa-tier">Also Serving</p>
              <div className="sa-chips">
                {["Madera","Sanger","Selma","Kerman","Reedley","Kingsburg","Friant","Shaver Lake","Auberry"].map((city) => (
                  <span key={city}>{city}</span>
                ))}
              </div>

              <p className="sa-note">
                …and nearby Central Valley communities. Don&rsquo;t see your city?{" "}
                <a href="sms:15593927420">Text (559) 392-7420</a> — I likely still cover it.
              </p>
            </div>
          </div>
        </section>

     <section id="about" className="split">
          <div className="about-photo-col">
            <img
              src="/headshot.jpg.jpg"
              alt="Hannah Tosi, Fresno Notary Public and Certified Loan Signing Agent serving Fresno and the Central Valley"
              className="about-portrait"
            />
          </div>

          <div>
            <p className="section-label">About Me</p>
            <h2>A Higher Standard of Mobile Notary Service</h2>
            <p>
              <strong>Hannah Tosi | Fresno Notary Public</strong>
            </p>

            <p>
              With years of experience as a high-profile executive assistant to
              C-suite leaders, where precision, discretion, and reliability were
              essential, Hannah applies that same executive-level standard to
              every notarization and loan signing at Central Valley Notary
              Group. She serves individuals, families, real estate
              professionals, attorneys, and businesses throughout Fresno and the
              surrounding Central Valley.
            </p>

            <p>
              Whether the appointment takes place at a home, office, hospital,
              care facility, or correctional facility, each one is handled with
              meticulous attention to detail, punctual communication, and
              complete professionalism. From routine notarizations to time
              sensitive loan signings, clients can count on accuracy,
              discretion, and peace of mind.
            </p>
          </div>
        </section>

                  <section id="credentials" className="cred-band">
          <div className="center">
            <p className="section-label">Credentials &amp; Trust</p>
            <h2>Credentials You Can Count On</h2>
          </div>
          <div className="cred-row">
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>Commissioned California Notary Public</span>
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>Commission #2562963 &middot; Exp. 07/26/2030</span>
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>$100,000 E&amp;O Insured</span>
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>Bonded</span>
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>Background Screened</span>
            <span className="cred-badge"><span className="cred-ic" aria-hidden="true"></span>NNA Certified Signing Agent</span>
          </div>
        </section>

                <section id="faq">
          <div className="center">
            <p className="section-label">FAQ</p>
            <h2>Questions Clients Commonly Ask</h2>
          </div>

          <div className="faq">
            <details className="faq-item">
              <summary>
                <h3>Can you give me legal advice or tell me which document I need?</h3>
              </summary>
              <p>
                No. I am a Notary Public, not an attorney licensed to practice
                law. I cannot give legal advice, prepare legal documents, or
                advise which document you need. For any legal questions, please
                consult a licensed attorney. My role is to verify your identity
                and witness your signature.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>What forms of ID are accepted?</h3>
              </summary>
              <p>
                Each signer must present a valid photo ID that is current or was issued
                within the past 5 years — a California driver’s license or DMV ID card, a
                U.S. passport or passport card, a driver’s license or ID from another state,
                a driver’s license from Canada or Mexico, a valid passport or consular ID from
                your country of citizenship, or a U.S. military ID. See the full list under
                “What To Have Ready.”
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Do you travel to hospitals and care facilities?</h3>
              </summary>
              <p>
                Yes. Mobile appointments are available for hospitals, assisted
                living facilities, rehabilitation centers, and care homes.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Are evening or weekend appointments available?</h3>
              </summary>
              <p>
                Yes. Evening, weekend, and urgent same-day appointments may be
                available depending on scheduling.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>How quickly can I get an appointment?</h3>
              </summary>
              <p>
                Same-day appointments may be available depending on your
                location, availability, and the type of document needing
                notarization.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Do you charge extra for same-day, after-hours, or holiday appointments?</h3>
              </summary>
              <p>
                Yes. Last-minute and same-day requests, appointments outside my
                posted hours, and major holidays carry an additional fee on top
                of the standard notarization and travel fees. The amount depends
                on the timing and how far I&rsquo;m traveling. You will always be
                quoted the full cost before the appointment is booked.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Do all signers need to be present?</h3>
              </summary>
              <p>
                Yes. Every person whose signature requires notarization must
                personally appear before the notary at the time of signing.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Can documents be signed before the appointment?</h3>
              </summary>
              <p>
                No. Most notarized documents must be signed in front of the
                notary during the appointment.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Do you travel to jails or correctional facilities?</h3>
              </summary>
              <p>
                Yes. Jail notarizations may be available depending on the
                facility’s policies, appointment rules, and scheduling
                availability.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>Can you notarize real estate or loan documents?</h3>
              </summary>
              <p>
                Yes. Loan signing services are available for refinance packages,
                HELOCs, buyer documents, seller packages, and other real estate
                signing appointments.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>What payment methods do you accept?</h3>
              </summary>
              <p>
                For your convenience, I accept cash, card and Apple Pay (via Square), Venmo,
                PayPal, and Zelle. Payment is collected at the appointment.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                <h3>What areas do you travel to?</h3>
              </summary>
              <p>
                Mobile appointments are available throughout Fresno, Clovis, and
                surrounding Central Valley communities.
              </p>
            </details>
          </div>
        </section>

        <section id="contact" className="dark">
          <div className="center">
            <p className="section-label">Contact Me</p>
            <h2>Let’s Get Your Documents Notarized</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-bubble">
                <Icon type="calendar" />
              </div>
              <div>
                <h3>Schedule Online</h3>
                <p>Book an appointment in just a few clicks.</p>
                <a className="btn btn-light contact-btn" href="https://calendly.com/appointments-centralvalleynotarygroup/30min">
                  Schedule Appointment
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-bubble">
                <Icon type="message" />
              </div>
              <div>
                <h3>Text Me</h3>
                <p>The fastest way to reach me for same-day availability, pricing, and appointment details.</p>
                <a className="btn btn-light contact-btn" href="sms:15593927420">
                  Text (559) 392-7420
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-bubble">
                <Icon type="phone" />
              </div>
              <div>
                <h3>Call Me</h3>
                <p>Prefer to talk it through? Call directly for questions, quotes, or to book your appointment.</p>
                <a className="btn btn-light contact-btn" href="tel:15593927420">
                  Call (559) 392-7420
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-bubble">
                <Icon type="mail" />
              </div>
              <div>
                <h3>Email Me</h3>
                <p>Send questions, document details, or appointment requests.</p>
              <a
  className="email-link"
  href="mailto:book@centralvalleynotarygroup.com"
>
  book@centralvalleynotarygroup.com
</a>
              </div>
            </div>
          </div>

          <div className="footer-note">
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "#e6cd8a", textTransform: "uppercase", letterSpacing: ".18em", fontSize: "12px" }}>
                Business Hours
              </h3>

              <p>
                Monday: 7:00 AM – 7:00 PM<br />
                Tuesday: 7:00 AM – 7:00 PM<br />
                Wednesday: 7:00 AM – 7:00 PM<br />
                Thursday: 7:00 AM – 7:00 PM<br />
                Friday: 7:00 AM – 7:00 PM<br />
                Saturday: 10:00 AM – 6:00 PM<br />
                Sunday: 10:00 AM – 6:00 PM
              </p>
            </div>
<p>
              I am a Notary Public, not an attorney licensed to practice law. I may not give legal advice or accept fees for legal advice. I can only provide notarial services.
            </p>

            <p>
              Your privacy matters. All personal information and documents shared with Central Valley Notary Group are kept strictly confidential and used only to complete your requested notarial services.
            </p>

            <p>
              © {new Date().getFullYear()} Central Valley Notary Group. All rights reserved.
            </p>

            <div className="footer-pay">
              <p className="footer-pay-label">We Accept</p>
              <div className="footer-pay-row">
                <span className="pm pm-cash">Cash</span>
                <span className="pm pm-card">Card &amp; Apple Pay</span>
                <span className="pm pm-venmo">Venmo</span>
                <span className="pm pm-paypal">PayPal</span>
                <span className="pm pm-zelle">Zelle</span>
              </div>
            </div>
          </div>
        </section>

        <MobileBar />
      </main>
    </>
  );
}
