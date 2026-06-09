import "./globals.css";

export const metadata = {
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
  openGraph: {
    title: "Fresno Mobile Notary & Loan Signing Agent | Central Valley Notary Group",
    description:
      "Same-day, come-to-you mobile notary and loan signing services across Fresno, Clovis, Madera, and the Central Valley.",
    url: "https://www.centralvalleynotarygroup.com",
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
  url: "https://www.centralvalleynotarygroup.com",
  telephone: "+1-415-806-5811",
  email: "appointments@centralvalleynotarygroup.com",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
