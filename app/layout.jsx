import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://centralvalleynotarygroup.com"),
  alternates: { canonical: "/" },
  title: "Fresno Mobile Notary & Loan Signing Agent | Central Valley Notary Group",
  description:
    "Fresno mobile notary and loan signing agent offering same-day, come-to-you appointments. Bonded and insured. Serving Fresno, Clovis, Madera, and the Central Valley.",
  keywords: [
    "mobile notary Fresno",
    "loan signing agent Fresno",
    "notary public Fresno",
    "mobile notary Clovis",
    "notary Madera",
    "same-day notary Fresno",
    "Central Valley notary",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Fresno Mobile Notary & Loan Signing Agent | Central Valley Notary Group",
    description:
      "Same-day, come-to-you mobile notary and loan signing services across Fresno, Clovis, Madera, and the Central Valley.",
    url: "https://centralvalleynotarygroup.com",
    siteName: "Central Valley Notary Group",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Central Valley Notary Group",
  description:
    "Mobile notary and loan signing agent serving Fresno and the Central Valley.",
  url: "https://centralvalleynotarygroup.com",
  telephone: "+1-559-392-7420",
  email: "hannah@cvnotarygroup.com",
  areaServed: [
    "Fresno, CA",
    "Clovis, CA",
    "Madera, CA",
    "Sanger, CA",
    "Selma, CA",
    "Kerman, CA",
    "Reedley, CA",
    "Kingsburg, CA",
    "Central Valley, CA",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
