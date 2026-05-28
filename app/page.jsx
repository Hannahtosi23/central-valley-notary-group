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
        <g
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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

        main {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .svg-icon {
          width: 42px;
          height: 42px;
          color: #E8C27A;
          flex-shrink: 0;
        }

        .header {
          background: #050505;
          color: white;
          padding: 14px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #2A2A2A;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
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
          gap: 22px;
          flex-wrap: wrap;
          overflow-x: hidden;
        }

        .nav a {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 11px;
          font-weight: 700;
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
          padding: 110px 8%;
          display: flex;
          align-items: center;
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
          padding: 20px 32px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          font-size: 13px;
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
          border: 1px solid #e3e3e3;
          border-radius: 8px;
          padding: 34px;
          box-shadow: 0 10px 28px rgba(0,0,0,.04);
          text-align: center;
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
        }

        .card p {
          color: #555;
          line-height: 1.8;
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
            width: 50px;
            height: 50px;
          }

          .nav {
            width: 100%;
            overflow-x: hidden;
            flex-wrap: wrap;
            gap: 14px;
          }

          .nav a {
            white-space: nowrap;
            font-size: 10px;
          }

          .feature-bar,
          .grid4,
          .trust {
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
            line-height: .95;
          }

          .gold {
            font-size: 24px;
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
              <div className="brand-title">
                Central Valley Signing Services
              </div>

              <div className="brand-subtitle">
                Fresno Mobile Notary & Loan Signing
              </div>
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
          <div>
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
              Convenient, professional, and accurate mobile
              notary and loan signing services throughout Fresno
              County and the Central Valley.
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
          </div>
        </section>
      </main>
    </>
  );
}