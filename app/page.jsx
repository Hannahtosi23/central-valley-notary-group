export default function HomePage() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #F8F6F1;
          color: #111;
          font-family: Arial, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        .hero {
          min-height: 100vh;
          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,.98) 0%,
              rgba(255,255,255,.92) 45%,
              rgba(255,255,255,.30) 75%
            ),
            url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600');
          background-size: cover;
          background-position: center;
          padding: 110px 8%;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          width: 100%;
        }

        .eyebrow {
          color: #B7833A;
          letter-spacing: .34em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 30px;
          font-size: 13px;
        }

        h1, h2, h3 {
          font-family: Georgia, serif;
        }

        h1 {
          font-size: clamp(62px, 8vw, 115px);
          line-height: .92;
          max-width: 900px;
          margin: 0 0 25px;
          letter-spacing: -2px;
        }

        h2 {
          font-size: clamp(38px, 5vw, 58px);
          margin: 0 0 20px;
          line-height: 1;
        }

        .gold {
          color: #B7833A;
          letter-spacing: .28em;
          text-transform: uppercase;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 35px;
        }

        .line {
          width: 90px;
          height: 2px;
          background: #B7833A;
          margin-bottom: 35px;
        }

        .subtext {
          max-width: 650px;
          font-size: 22px;
          line-height: 1.7;
          margin-bottom: 45px;
          color: #333;
        }

        .buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 70px;
        }

        .btn {
          padding: 20px 32px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: .2s ease;
          font-size: 13px;
        }

        .btn-dark {
          background: #050505;
          color: white;
        }

        .btn-dark:hover {
          background: #1a1a1a;
        }

        .btn-light {
          background: rgba(255,255,255,.9);
          color: #8B5A20;
          border: 1px solid #B7833A;
        }

        .btn-light:hover {
          background: #F3E5D1;
        }

        .feature-bar {
          background: #090909;
          color: white;
          border-radius: 18px;
          padding: 38px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 28px;
          box-shadow: 0 20px 50px rgba(0,0,0,.22);
        }

        .feature h3 {
          font-family: Arial, sans-serif;
          color: white;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .feature p {
          color: #d2d2d2;
          line-height: 1.6;
          font-size: 15px;
        }

        section {
          padding: 100px 8%;
        }

        .center {
          max-width: 760px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .section-label {
          color: #B7833A;
          text-transform: uppercase;
          letter-spacing: .28em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .grid4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .card {
          background: white;
          border: 1px solid #e3e3e3;
          border-radius: 8px;
          padding: 34px;
          box-shadow: 0 10px 28px rgba(0,0,0,.04);
        }

        .card h3 {
          font-size: 28px;
          margin-top: 0;
          margin-bottom: 18px;
          line-height: 1.1;
        }

        .card p {
          color: #555;
          line-height: 1.8;
        }

        .price {
          margin-top: 30px;
          text-transform: uppercase;
          letter-spacing: .15em;
          font-size: 12px;
          font-weight: 700;
        }

        .price span {
          font-size: 28px;
          letter-spacing: 0;
        }

        .trust {
          background: #050505;
          color: white;
          padding: 40px 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 13px;
          font-weight: 700;
        }

        .docs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .doc {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 20px;
          text-align: center;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: start;
        }

        .faq {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .faq-item {
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 30px;
        }

        .faq-item h3 {
          margin-top: 0;
          font-size: 30px;
          margin-bottom: 12px;
        }

        .dark {
          background: #050505;
          color: white;
        }

        .dark p {
          color: #d0d0d0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .footer-note {
          border-top: 1px solid rgba(255,255,255,.12);
          margin-top: 60px;
          padding-top: 35px;
          color: #aaa;
          font-size: 14px;
          line-height: 1.8;
        }

        @media (max-width: 1000px) {
          .feature-bar,
          .grid4,
          .trust,
          .docs,
          .split,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 80px 24px;
          }

          section {
            padding: 80px 24px;
          }

          .subtext {
            font-size: 19px;
          }

          .feature-bar {
            padding: 28px;
          }

          h1 {
            font-size: 64px;
          }
        }
      `}</style>

      <main>

        <section className="hero">
          <div className="hero-inner">

            <p className="eyebrow">
              Professional. Reliable. Discreet.
            </p>

            <h1>
              Mobile Notary & Loan Signing Services
            </h1>

            <p className="gold">
              Delivered To You.
            </p>

            <div className="line"></div>

            <p className="subtext">
              Convenient, professional, and accurate mobile notary and loan signing services throughout Fresno County and the Central Valley.
            </p>

            <div className="buttons">
              <a
                className="btn btn-dark"
                href="https://calendly.com/"
              >
                Schedule Appointment
              </a>

              <a
                className="btn btn-light"
                href="sms:14158065811"
              >
                Text (415) 806-5811
              </a>
            </div>

            <div className="feature-bar">

              <div className="feature">
                <h3>Same-Day Appointments</h3>
                <p>When you need it, we’re there.</p>
              </div>

              <div className="feature">
                <h3>Bonded & Insured</h3>
                <p>Your peace of mind is our priority.</p>
              </div>

              <div className="feature">
                <h3>We Travel To You</h3>
                <p>Homes, offices, hospitals, jails & more.</p>
              </div>

              <div className="feature">
                <h3>Evening & Weekend Availability</h3>
                <p>Flexible scheduling to fit your needs.</p>
              </div>

              <div className="feature">
                <h3>Last-Minute Signings Welcome</h3>
                <p>We’re here when you’re in a rush.</p>
              </div>

            </div>
          </div>
        </section>

        <section>

          <div className="center">
            <p className="section-label">Services</p>
            <h2>Professional Notary Services</h2>
          </div>

          <div className="grid4">

            <div className="card">
              <h3>Loan Signing Services</h3>
              <p>
                Refinance packages, HELOCs, seller packages, buyer closings, and real estate loan documents.
              </p>
              <div className="price">
                Starting at <span>$125</span>
              </div>
            </div>

            <div className="card">
              <h3>Apostille Services</h3>
              <p>
                Birth certificates, marriage certificates, power of attorney documents, and international paperwork.
              </p>
              <div className="price">
                Starting at <span>$145</span>
              </div>
            </div>

            <div className="card">
              <h3>Jail Notarizations</h3>
              <p>
                Power of attorney forms, inmate authorization forms, legal affidavits, and custody-related documents.
              </p>
              <div className="price">
                Starting at <span>$165</span>
              </div>
            </div>

            <div className="card">
              <h3>General Notary Services</h3>
              <p>
                Power of attorney forms, affidavits, travel consent forms, trusts, and healthcare directives.
              </p>
              <div className="price">
                Starting at <span>$45</span>
              </div>
            </div>

          </div>
        </section>

        <div className="trust">
          <div>Commissioned California Notary Public</div>
          <div>Bonded & Insured</div>
          <div>Loan Signing Support</div>
          <div>Serving Fresno & Clovis</div>
        </div>

        <section>

          <div className="center">
            <p className="section-label">Common Documents</p>
            <h2>Documents Commonly Notarized</h2>

            <p>
              Personal, legal, medical, and real estate-related documents throughout Fresno and surrounding Central Valley communities.
            </p>
          </div>

          <div className="docs">

            <div className="doc">Power of Attorney</div>
            <div className="doc">Trust Documents</div>
            <div className="doc">Real Estate Closings</div>
            <div className="doc">HELOC Documents</div>
            <div className="doc">Healthcare Directives</div>
            <div className="doc">Travel Consent Forms</div>
            <div className="doc">Affidavits</div>
            <div className="doc">Grant Deeds</div>
            <div className="doc">Loan Packages</div>
            <div className="doc">Estate Planning Documents</div>
            <div className="doc">Jail Authorization Forms</div>
            <div className="doc">Business Agreements</div>

          </div>
        </section>

        <section className="split">

          <div>
            <p className="section-label">About Me</p>

            <h2>
              A Higher Standard of Mobile Notary Service
            </h2>

            <p>
              <strong>Hannah Tosi | Fresno Notary Public</strong>
            </p>

            <p>
              Central Valley Notary Group was built on professionalism, discretion, and reliability — offering a polished mobile notary experience for individuals, families, real estate professionals, attorneys, and businesses throughout Fresno and the surrounding Central Valley.
            </p>

            <p>
              Whether the appointment is at a home, office, hospital, care facility, or correctional facility, the goal is simple: make the process feel smooth, respectful, and stress-free.
            </p>
          </div>

          <div className="card">

            <p className="section-label">
              Before Your Appointment
            </p>

            <h3>
              What To Have Ready
            </h3>

            <p>Valid government-issued photo ID</p>
            <p>Unsigned documents ready for review</p>
            <p>All required signers present</p>
            <p>Witnesses available if your document requires them</p>

          </div>

        </section>

        <section>

          <div className="center">
            <p className="section-label">FAQ</p>
            <h2>Questions Clients Commonly Ask</h2>
          </div>

          <div className="faq">

            <div className="faq-item">
              <h3>What forms of ID are accepted?</h3>
              <p>
                A current government-issued photo ID such as a driver’s license, passport, or state ID is typically required.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you travel to hospitals and care facilities?</h3>
              <p>
                Yes. Mobile appointments are available for hospitals, assisted living facilities, rehabilitation centers, and care homes.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are evening or weekend appointments available?</h3>
              <p>
                Yes. Evening, weekend, and urgent same-day appointments may be available depending on scheduling.
              </p>
            </div>

          </div>

        </section>

        <section className="dark">

          <div className="center">
            <p className="section-label">Contact Me</p>
            <h2>Let’s Get Your Documents Notarized</h2>
          </div>

          <div className="contact-grid">

            <div>
              <h3>Schedule Online</h3>
              <p>
                Book an appointment in just a few clicks.
              </p>

              <a
                className="btn btn-light"
                href="https://calendly.com/"
              >
                Calendly
              </a>
            </div>

            <div>
              <h3>Text Me</h3>
              <p>
                The fastest way to reach me for availability and pricing.
              </p>

              <a
                className="btn btn-light"
                href="sms:14158065811"
              >
                Text Now
              </a>
            </div>

            <div>
              <h3>Email Me</h3>

              <p>
                Send questions, document details, or appointment requests.
              </p>

              <p>
                hello@centralvalleynotarygroup.com
              </p>
            </div>

          </div>

          <div className="footer-note">
            I am a Notary Public, not an attorney licensed to practice law. I may not give legal advice or accept fees for legal advice.
            <br /><br />
            © Central Valley Notary Group
          </div>

        </section>

      </main>
    </>
  );
}