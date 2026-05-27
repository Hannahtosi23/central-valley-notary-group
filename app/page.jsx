export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.92) 45%, rgba(255,255,255,.25) 75%), url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 32px",
        color: "#111",
      }}
    >
      <p style={{ color: "#B7833A", letterSpacing: "6px", fontWeight: "bold" }}>
        PROFESSIONAL. RELIABLE. DISCREET.
      </p>

      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "64px",
          lineHeight: ".95",
          maxWidth: "800px",
        }}
      >
        Mobile Notary & Loan Signing Services
      </h1>

      <p style={{ color: "#B7833A", letterSpacing: "5px", fontSize: "24px" }}>
        DELIVERED TO YOU.
      </p>

      <p style={{ fontSize: "22px", lineHeight: "1.6", maxWidth: "650px" }}>
        Convenient, professional, and accurate notary and loan signing services
        throughout Fresno County and the Central Valley.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a
          href="https://calendly.com/"
          style={{
            background: "#050505",
            color: "white",
            padding: "18px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Schedule Appointment
        </a>

        <a
          href="sms:14158065811"
          style={{
            background: "white",
            color: "#8B5A20",
            border: "1px solid #B7833A",
            padding: "18px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Text (415) 806-5811
        </a>
      </div>
    </main>
  );
}