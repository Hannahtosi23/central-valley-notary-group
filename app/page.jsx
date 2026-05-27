export default function HomePage() {
  return (
    <>
      <style>{`
        body { margin: 0; background: #F8F6F1; color: #111; font-family: Arial, sans-serif; }
        .hero { min-height: 100vh; background: linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.92) 45%, rgba(255,255,255,.25) 75%), url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover; background-position: center; padding: 110px 8%; }
        .eyebrow, .gold, .section-label { color: #B7833A; letter-spacing: .3em; text-transform: uppercase; font-weight: 700; }
        h1, h2, h3 { font-family: Georgia, serif; }
        h1 { font-size: clamp(58px, 8vw, 110px); line-height: .92; max-width: 850px; margin: 25px 0; }
        h2 { font-size: clamp(38px, 5vw, 58px); margin: 10px 0 25px; }
        p { line-height: 1.7; }
        .gold { font-size: 28px; margin-bottom: 30px; }
        .line { width: 90px; height: 2px; background: #B7833A; margin: 30px 0; }
        .subtext { max-width: 650px; font-size: 22px; margin-bottom: 40px; }
        .buttons { display: flex; gap: 18px; flex-wrap: wrap; margin-bottom: 70px; }
        .btn { padding: 20px 32px; border-radius: 6px; text-transform: uppercase; letter-spacing: .14em; font-weight: 700; text-decoration: none; display: inline-block; }
        .btn-dark { background: #050505; color: white; }
        .btn-light { background: white; color: #8B5A20; border: 1px solid #B7833A; }
        .feature-bar { background: #090909; color: white; border-radius: 16px; padding: 34px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 25px; box-shadow: 0 20px 50px rgba(0,0,0,.25); }
        .feature h3 { color: white; text-transform: uppercase; letter-spacing: .12em; font-family: Arial, sans-serif; font-size: 15px; }
        .feature p { color: #ccc; }
        section { padding: 90px 8%; }
        .center { text-align: center; max-width: 800px; margin: 0 auto 50px; }
        .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; }
        .card { background: white; border: 1px solid #ddd; padding: 32px; border-radius: 8px; box-shadow: 0 8px 25px rgba(0,0,0,.05); }
        .card h3 { font-size: 27px; margin-top: 0; }
        .price { text-transform: uppercase; letter-spacing: .14em; font-weight: bold; font-size: 13px; }
        .price span { font-size: 26px; letter-spacing: 0; }
        .trust { background: #050505; color: white; padding: 35px 8%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-transform: uppercase; letter-spacing: .12em; font-weight: bold; font-size: 14px; }
        .docs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .doc { background: #F8F6F1; border: 1px solid #ddd; padding: 18px; text-align: center; border-radius: 6px; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .dark { background: #050505; color: white; }
        .dark p { color: #ccc; }
        .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .footer-note { border-top: 1px solid rgba(255,255,255,.15); margin-top: 50px; padding-top: 35px; color: #aaa; font-size: 14px; }
        @media (max-width: 900px) {
          .hero { padding: 80px 24px; }
          .feature-bar, .grid4, .trust, .docs, .split, .contact-grid { grid-template-columns: 1fr; }
          .subtext { font-size: 19px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <p className="eyebrow">Professional. Reliable. Discreet.</p>
          <h1>Mobile Notary & Loan Signing Services</h1>
          <p className="gold">Delivered To You.</p>
          <div className="line" />
          <p className="subtext">
            Convenient, professional, and accurate notary and loan signing services throughout Fresno County and the Central Valley.
          </p>

          <div className="buttons">
            <a className="btn btn-dark" href="https://calendly.com/">Schedule Appointment</a>
            <a className="btn btn-light" href="sms:14158065811">Text (415) 806-5811</a>
          </div>

          <div className="feature-bar">
            <div className="feature"><h3>Same-Day Appointments</h3><p>When you need it, we’re there.</p></div>
            <div className="feature"><h3>Bonded & Insured</h3><p>Your peace of mind is our priority.</p></div>
            <div className="feature"><h3>We Travel To You</h3><p>Homes, offices, hospitals, jails & more.</p></div>
            <div className="feature"><h3>Evening & Weekend Availability</h3><p>Flexible scheduling to fit your needs.</p></div>
            <div className="feature"><h3>Last-Minute Signings Welcome</h3><p>We’re here when you’re in a rush.</p></div>
          </div>
        </section>

        <section>
          <div className="center">
            <p className="section-label">Services</p>
            <h2>Professional Notary Services</h2>
          </div>

          <div className="grid4">
            <div className="card"><h3>Loan Signing Services</h3><p>Refinance packages, HELOCs, seller packages, buyer closings, and real estate loan documents.</p><p className="price">Starting at <span>$125</span></p></div>
            <div className="card"><h3>Apostille Services</h3><p>Birth certificates, marriage certificates, power of attorney documents, and international paperwork.</p><p className="price">Starting at <span>$145</span></p></div>
            <div className="card"><h3>Jail Notarizations</h3><p>Power of attorney forms, inmate authorization forms, legal affidavits, and custody-related documents.</p><p className="price">Starting at <span>$165</span></p></div>
            <div className="card"><h3>General Notary Services</h3><p>Power of attorney forms, affidavits, travel consent forms, trusts, and healthcare directives.</p><p className="price">Starting at <span>$45</span></p></div>
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
            <p>Personal, legal, medical, and real estate-related documents throughout Fresno and surrounding Central Valley communities.</p>
          </div>

          <div className="docs">
            {["Power of Attorney","Trust Documents","Real Estate Closings","HELOC Documents","Healthcare Directives","Travel Consent Forms","Affidavits","Grant Deeds","Loan Packages","Estate Planning Documents","Jail Authorization Forms","Business Agreements"].map((item) => (
              <div className="doc" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="split">
          <div>
            <p className="section-label">About Me</p>
            <h2>A Higher Standard of Mobile Notary Service</h2>
            <p><strong>Hannah Tosi | Fresno Notary Public</strong></p>
            <p>Central Valley Notary Group was built on professionalism, discretion, and reliability — offering a polished mobile notary experience for individuals, families, real estate professionals, attorneys, and businesses throughout Fresno and the surrounding Central Valley.</p>
            <p>Whether the appointment is at a home, office, hospital, care facility, or correctional facility, the goal is simple: make the process feel smooth, respectful, and stress-free.</p>
          </div>

          <div className="card">
            <p className="section-label">Before Your Appointment</p>
            <h3>What To Have Ready</h3>
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

          <div className="card"><h3>What forms of ID are accepted?</h3><p>A current government-issued photo ID such as a driver’s license, passport, or state ID is typically required.</p></div>
          <br />
          <div className="card"><h3>Do you travel to hospitals and care facilities?</h3><p>Yes. Mobile appointments are available for hospitals, assisted living facilities, rehabilitation centers, and care homes.</p></div>
          <br />
          <div className="card"><h3>Are evening or weekend appointments available?</h3><p>Yes. Evening, weekend, and urgent same-day appointments may be available depending on scheduling.</p></div>
        </section>

        <section className="dark">
          <div className="center">
            <p className="section-label">Contact Me</p>
            <h2>Let’s Get Your Documents Notarized</h2>
          </div>

          <div className="contact-grid">
            <div><h3>Schedule Online</h3><p>Book an appointment in just a few clicks.</p><a className="btn btn-light" href="https://calendly.com/">Calendly</a></div>
            <div><h3>Text Me</h3><p>The fastest way to reach me for availability and pricing.</p><a className="btn btn-light" href="sms:14158065811">Text Now</a></div>
            <div><h3>Email Me</h3><p>Send questions, document details, or appointment requests.</p><p>hello@centralvalleynotarygroup.com</p></div>
          </div>

          <p className="footer-note">
            I am a Notary Public, not an attorney licensed to practice law. I may not give legal advice or accept fees for legal advice. © Central Valley Notary Group.
          </p>
        </section>
      </main>
    </>
  );
}