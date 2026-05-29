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
          <path d="M9 4h6v7l3 4v5H6v-5l3-4z" />
          <path d="M8 20h8M9 11h6" />
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
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #F8F6F1;
          color: #111;
          font-family: Arial, sans-serif;
        }

        body {
          position: relative;
        }

        main {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        img,
        svg,
        div,
        section,
        header {
          max-width: 100%;
        }

        .svg-icon {
          width: 42px;
          height: 42px;
          color: #E8C27A;
          flex-shrink: 0;
        }

  .header {
  background: rgba(5, 5, 5, 0.97);
  color: white;
  padding: 14px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  border-bottom: 1px solid #2A2A2A;
  overflow: hidden;
  backdrop-filter: blur(10px);
}
        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .logo-mark {
          width: 54px;
          height: 54px;
          border: 2px solid #B7833A;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E8C27A;
          flex-shrink: 0;
        }

        .logo-mark .svg-icon {
          width: 28px;
          height: 28px;
        }

        .brand-title {
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 17px;
          line-height: 1.2;
        }

        .brand-subtitle {
          color: #E8C27A;
          text-transform: uppercase;
          letter-spacing: .18em;
          margin-top: 4px;
          font-size: 10px;
          line-height: 1.4;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav a {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .nav a:hover {
          color: #E8C27A;
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
          padding: 190px 8% 110px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-content {
          width: 100%;
          max-width: 1200px;
        }

        .eyebrow,
        .gold,
        .section-label {
          color: #B7833A;
          text-transform: uppercase;
          letter-spacing: .28em;
          font-weight: 700;
        }

        .eyebrow {
          margin-bottom: 30px;
          font-size: 13px;
        }

        h1,
        h2,
        h3 {
          font-family: Georgia, serif;
        }

        h1 {
          font-size: clamp(50px, 8vw, 115px);
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
          font-size: 28px;
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
  padding: 14px 22px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: .14em;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  text-align: center;
}

        .btn-dark {
          background: #050505;
          color: white;
        }

        .btn-light {
          background: rgba(255,255,255,.9);
          color: #8B5A20;
          border: 1px solid #B7833A;
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

        .feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature h3 {
          font-family: Arial, sans-serif;
          color: white;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 14px;
          margin: 0 0 12px;
        }

        .feature p {
          color: #d2d2d2;
          line-height: 1.6;
          font-size: 15px;
          margin: 0;
        }

        section {
          padding: 100px 8%;
          scroll-margin-top: 90px;
        }

        .center {
          max-width: 760px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .section-label {
          font-size: 12px;
          margin-bottom: 20px;
        }

        .grid4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

     .card {
  background: white;
  border: 1px solid #ddd;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

        .card .svg-icon {
          color: #B7833A;
          width: 54px;
          height: 54px;
          margin: 0 auto 24px;
        }

     .card h3 {
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 18px;
  line-height: 1.1;
  min-height: 95px;
}
        
.card p {
  min-height: 140px;
}

        .card-line {
          width: 52px;
          height: 2px;
          background: #B7833A;
          margin: 18px auto 24px;
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
          padding: 42px 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .trust div {
          display: flex;
          align-items: center;
          gap: 14px;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        .trust .svg-icon {
          width: 34px;
          height: 34px;
          color: #E8C27A;
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
          display: flex;
          align-items: center;
          gap: 14px;
          color: #333;
        }

        .doc .svg-icon {
          width: 24px;
          height: 24px;
          color: #B7833A;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: start;
        }

        .split p {
          font-size: 18px;
          color: #444;
          line-height: 1.8;
        }

        .ready-card {
          background: white;
          border: 1px solid #e3e3e3;
          border-radius: 8px;
          padding: 42px;
          box-shadow: 0 10px 28px rgba(0,0,0,.04);
        }

        .ready-list {
          display: grid;
          gap: 28px;
          margin-top: 28px;
        }

        .ready-item {
          display: flex;
          align-items: center;
          gap: 24px;
          color: #555;
          line-height: 1.7;
          font-size: 20px;
        }

        .circle-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid #eadcc8;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          flex-shrink: 0;
        }

        .circle-icon .svg-icon {
          width: 30px;
          height: 30px;
          color: #B7833A;
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

        .faq-item p {
          color: #555;
          line-height: 1.8;
        }

        .reviews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .review {
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 34px;
        }

        .review p {
          color: #555;
          line-height: 1.8;
        }

        .stars {
          color: #B7833A;
          letter-spacing: .1em;
          margin-bottom: 20px;
        }

        .dark {
          background: #050505;
          color: white;
        }

        .dark p {
          color: #d0d0d0;
        }

      .contact-grid {
  grid-template-columns: 1fr !important;
  width: 100%;
  max-width: 100%;
  gap: 42px;
  overflow: hidden;
}

.contact-card {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.contact-card > div:last-child {
  min-width: 0;
  max-width: 100%;
  overflow-wrap: break-word;
}

.contact-card h3 {
  font-size: 28px;
  margin: 0 0 10px;
}

.contact-card p {
  font-size: 18px;
  line-height: 1.55;
  margin: 0 0 14px;
}

.contact-card .btn {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-word;
  padding: 14px 12px;
  font-size: 10px;
  letter-spacing: .10em;
  line-height: 1.4;
}

.email-link {
  color: #E8C27A;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .02em;
  text-decoration: none;
  white-space: nowrap;
  overflow-x: auto;
  display: block;
  width: 100%;
  line-height: 1.4;
  -webkit-overflow-scrolling: touch;
}

.email-link:hover {
  text-decoration: underline;
}

.contact-bubble {
  width: 50px;
  height: 50px;
}

#contact {
  padding-bottom: 150px;
  overflow-x: hidden;
}

        .footer-note {
          border-top: 1px solid rgba(255,255,255,.12);
          margin-top: 60px;
          padding-top: 35px;
          color: #aaa;
          font-size: 14px;
          line-height: 1.8;
        }

        .mobile-bar {
          display: none;
        }

        @media (max-width: 1000px) {
          .header {
            padding: 14px 20px;
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .brand-title {
            font-size: 15px;
          }

          .brand-subtitle {
            font-size: 9px;
          }

          .logo-mark {
            width: 48px;
            height: 48px;
          }

          .nav {
            width: 100%;
            gap: 12px 14px;
            justify-content: flex-start;
          }

          .nav a {
            font-size: 10px;
            white-space: normal;
          }

          .feature-bar,
          .grid4,
          .trust,
          .docs,
          .split,
          .contact-grid,
          .reviews {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 70px 24px 120px;
            min-height: auto;
          }

          section {
            padding: 80px 24px;
            scroll-margin-top: 140px;
          }

          h1 {
            font-size: 52px;
            line-height: .95;
            max-width: 100%;
          }

          h2 {
            font-size: 42px;
          }

          .subtext {
            font-size: 18px;
          }

          .buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .feature-bar {
            padding: 28px;
          }

          .mobile-bar {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 200;
            background: #050505;
            padding: 14px 18px;
            border-top: 1px solid #B7833A;
          }

          .mobile-bar a {
            text-align: center;
            padding: 14px 8px;
            border-radius: 8px;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: .14em;
            font-weight: 700;
            font-size: 12px;
          }

          .mobile-text {
            background: #E8C27A;
            color: black;
          }

          .mobile-call {
            background: white;
            color: black;
          }

          .mobile-schedule {
            border: 1px solid #444;
            color: white;
          }
        }
      `}</style>

      <main>
        <header className="header">
          <div className="brand-wrap">
            <div className="logo-mark">
              <Icon type="stamp" />
            </div>

            <div>
              <div className="brand-title">Central Valley Notary Group</div>
              <div className="brand-subtitle">Fresno Mobile Notary & Loan Signing</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#documents">Documents</a>
            <a href="#service-area">Service Area</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Professional. Reliable. Discreet.</p>
            <h1>Mobile Notary & Loan Signing Services</h1>
            <p className="gold">Delivered To You.</p>
            <div className="line"></div>
            <p className="subtext">
              Convenient, professional, and accurate mobile notary and loan signing services throughout Fresno County and the Central Valley.
            </p>

            <div className="buttons">
              <a className="btn btn-dark" href="https://calendly.com/">Schedule Appointment</a>
              <a className="btn btn-light" href="sms:14158065811">Text (415) 806-5811</a>
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
            <div className="card"><Icon type="document" /><h3>Loan Signing Services</h3><div className="card-line"></div><p>Refinance packages, HELOCs, seller packages, buyer closings, and real estate loan documents.</p><div className="price">Starting at <span>$125</span></div></div>
            <div className="card"><Icon type="check" /><h3>Apostille Services</h3><div className="card-line"></div><p>Birth certificates, marriage certificates, power of attorney documents, and international paperwork.</p><div className="price">Starting at <span>$145</span></div></div>
            <div className="card"><Icon type="shield" /><h3>Jail Notarizations</h3><div className="card-line"></div><p>Power of attorney forms, inmate authorization forms, legal affidavits, and custody-related documents.</p><div className="price">Starting at <span>$165</span></div></div>
            <div className="card"><Icon type="pen" /><h3>General Notary Services</h3><div className="card-line"></div><p>Power of attorney forms, affidavits, travel consent forms, trusts, and healthcare directives.</p><div className="price">Starting at <span>$45</span></div></div>
          </div>
        </section>

        <div className="trust">
          <div><Icon type="check" />Commissioned California Notary Public</div>
          <div><Icon type="shield" />Bonded & Insured</div>
          <div><Icon type="pen" />Loan Signing Support</div>
          <div><Icon type="pin" />Serving Fresno & Clovis</div>
        </div>

        <section id="documents">
          <div className="center">
            <p className="section-label">Common Documents</p>
            <h2>Documents Commonly Notarized</h2>
            <p>Personal, legal, medical, and real estate-related documents throughout Fresno and surrounding Central Valley communities.</p>
          </div>

          <div className="docs">
            {["Power of Attorney","Trust Documents","Real Estate Closings","HELOC Documents","Healthcare Directives","Travel Consent Forms","Affidavits","Grant Deeds","Loan Packages","Estate Planning Documents","Jail Authorization Forms","Business Agreements"].map((item) => (
              <div className="doc" key={item}><Icon type="document" />{item}</div>
            ))}
          </div>
        </section>

        <section id="service-area">
          <div className="center">
            <p className="section-label">Service Area</p>
            <h2>Serving Fresno and the Central Valley</h2>
            <p>Mobile appointments are available throughout Fresno County and nearby communities.</p>
          </div>

          <div className="docs">
            {["Fresno","Clovis","Madera","Sanger","Selma","Kerman","Reedley","Kingsburg","Friant","Shaver Lake","Auberry","Nearby Central Valley Areas"].map((city) => (
              <div className="doc" key={city}><Icon type="pin" />{city}</div>
            ))}
          </div>
        </section>

     <section id="about" className="split">
          <div>
            <p className="section-label">About Me</p>
            <h2>A Higher Standard of Mobile Notary Service</h2>
            <p>
              <strong>Hannah Tosi | Fresno Notary Public</strong>
            </p>

            <p>
              Central Valley Notary Group was built on professionalism,
              discretion, and reliability — offering a polished mobile notary
              experience for individuals, families, real estate professionals,
              attorneys, and businesses throughout Fresno and the surrounding
              Central Valley.
            </p>

            <p>
              Whether the appointment is at a home, office, hospital, care
              facility, or correctional facility, the goal is simple: make the
              process feel smooth, respectful, and stress-free.
            </p>

            <p>
              Every signing is handled with attention to detail, punctual
              communication, and a commitment to exceptional service. From
              routine notarizations to time-sensitive signings, clients can
              expect a professional experience focused on accuracy,
              convenience, and peace of mind.
            </p>
          </div>

          <div className="ready-card">
            <p className="section-label">Before Your Appointment</p>
            <h3>What To Have Ready</h3>

            <div className="ready-list">
              <div className="ready-item">
                <div className="circle-icon">
                  <Icon type="id" />
                </div>
                Valid government-issued photo ID
              </div>

              <div className="ready-item">
                <div className="circle-icon">
                  <Icon type="document" />
                </div>
                Unsigned documents ready for review
              </div>

              <div className="ready-item">
                <div className="circle-icon">
                  <Icon type="users" />
                </div>
                All required signers present
              </div>

              <div className="ready-item">
                <div className="circle-icon">
                  <Icon type="check" />
                </div>
                Witnesses available if your document requires them
              </div>
            </div>
          </div>
        </section>

                <section id="faq">
          <div className="center">
            <p className="section-label">FAQ</p>
            <h2>Questions Clients Commonly Ask</h2>
          </div>

          <div className="faq">
            <div className="faq-item">
              <h3>What forms of ID are accepted?</h3>
              <p>
                A current government-issued photo ID such as a driver’s license,
                passport, or state ID is typically required.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you travel to hospitals and care facilities?</h3>
              <p>
                Yes. Mobile appointments are available for hospitals, assisted
                living facilities, rehabilitation centers, and care homes.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are evening or weekend appointments available?</h3>
              <p>
                Yes. Evening, weekend, and urgent same-day appointments may be
                available depending on scheduling.
              </p>
            </div>

            <div className="faq-item">
              <h3>How quickly can I get an appointment?</h3>
              <p>
                Same-day appointments may be available depending on your
                location, availability, and the type of document needing
                notarization.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do all signers need to be present?</h3>
              <p>
                Yes. Every person whose signature requires notarization must
                personally appear before the notary at the time of signing.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can documents be signed before the appointment?</h3>
              <p>
                No. Most notarized documents must be signed in front of the
                notary during the appointment.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can you provide witnesses?</h3>
              <p>
                Witness availability may be possible for certain appointments
                with advance notice. Additional fees may apply.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you travel to jails or correctional facilities?</h3>
              <p>
                Yes. Jail notarizations may be available depending on the
                facility’s policies, appointment rules, and scheduling
                availability.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can you notarize real estate or loan documents?</h3>
              <p>
                Yes. Loan signing services are available for refinance packages,
                HELOCs, buyer documents, seller packages, and other real estate
                signing appointments.
              </p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                Cash, Venmo, and other electronic payment methods may be
                accepted depending on the appointment type.
              </p>
            </div>

            <div className="faq-item">
              <h3>What areas do you travel to?</h3>
              <p>
                Mobile appointments are available throughout Fresno, Clovis, and
                surrounding Central Valley communities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="center">
            <p className="section-label">Client Reviews</p>
            <h2>Professional, Responsive, Reliable</h2>
          </div>

          <div className="reviews">
            <div className="review"><div className="stars">★★★★★</div><p>“Professional, punctual, and incredibly easy to work with. The signing process felt smooth from start to finish.”</p><strong>Escrow Client</strong></div>
            <div className="review"><div className="stars">★★★★★</div><p>“Hannah made a difficult situation feel calm and organized. Extremely responsive and respectful throughout the appointment.”</p><strong>Hospital Appointment</strong></div>
            <div className="review"><div className="stars">★★★★★</div><p>“Reliable, polished, and prepared. We will absolutely continue using Central Valley Notary Group for future signings.”</p><strong>Real Estate Signing</strong></div>
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
                <a className="btn btn-light contact-btn" href="https://calendly.com/">
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
                <a className="btn btn-light contact-btn" href="sms:14158065811">
                  Text (415) 806-5811
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
  href="mailto:appointments@centralvalleynotarygroup.com"
>
  appointments@centralvalleynotarygroup.com
</a>
              </div>
            </div>
          </div>

          <div className="footer-note">
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "#E8C27A", textTransform: "uppercase", letterSpacing: ".18em", fontSize: "12px" }}>
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
              © {new Date().getFullYear()} Central Valley Notary Group. All rights reserved.
            </p>
          </div>
        </section>

        <div className="mobile-bar">
          <a className="mobile-text" href="sms:14158065811">Text</a>
          <a className="mobile-call" href="tel:14158065811">Call</a>
          <a className="mobile-schedule" href="https://calendly.com/">Schedule</a>
        </div>
      </main>
    </>
  );
}
