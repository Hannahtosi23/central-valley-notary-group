export default function HomePage() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #F8F6F1;
          color: #111;
          font-family: Arial, sans-serif;
        }

        .hero {
          min-height: 100vh;
          background:
            linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.92) 42%, rgba(255,255,255,.25) 75%),
            url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600');
          background-size: cover;
          background-position: center;
          padding: 120px 8%;
        }

        .eyebrow {
          color: #B7833A;
          letter-spacing: .34em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 30px;
        }

        h1 {
          font-family: Georgia, serif;
          font-size: clamp(56px, 8vw, 110px);
          line-height: .92;
          max-width: 850px;
          margin: 0 0 25px;
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
          margin-bottom: 40px;
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
        }

        .btn-dark {
          background: #050505;
          color: white;
        }

        .btn-light {
          background: white;
          color: #8B5A20;
          border: 1px solid #B7833A;
        }

        .feature-bar {
          background: #090909;
          color: white;
          border-radius: 16px;
          padding: 34px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          box-shadow: 0 20px 50px rgba(0,0,0,.25);
        }

        .feature h3 {
          color: white;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 15px;
          margin-bottom: 10px;
        }

        .feature p {
          color: #ccc;
          line-height: 1.6;
        }

        @media (max-width: 800px) {
          .hero {
            padding: 80px 24px;
          }

          .feature-bar {
            grid-template-columns: 1fr;
          }

          .subtext {
            font-size: 19px;
          }
        }
      `}</style>

      <section className="hero">
        <p className="eyebrow">Professional. Reliable. Discreet.</p>

        <h1>Mobile Notary & Loan Signing Services</h1>

        <p className="gold">Delivered To You.</p>

        <div className="line" />

        <p className="subtext">
          Convenient, professional, and accurate notary and loan signing services throughout Fresno County and the Central Valley.
        </p>

        <div className="buttons">
          <a className="btn btn-dark" href="https://calendly.com/">
            Schedule Appointment
          </a>

          <a className="btn btn-light" href="sms:14158065811">
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
      </section>
    </>
  );
}