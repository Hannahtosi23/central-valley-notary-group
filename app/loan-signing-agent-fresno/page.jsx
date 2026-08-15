import SiteHeader from "../components/SiteHeader";
import MobileBar from "../components/MobileBar";

export const metadata = {
  title: "Loan Signing Agent in Fresno | Refinance, HELOC & Closing Signings",
  description:
    "NNA Certified Loan Signing Agent serving Fresno and the Central Valley. Mobile refinance, HELOC, purchase, seller, and reverse mortgage signings. $150 for a single borrower, $200 when two people sign.",
  alternates: { canonical: "/loan-signing-agent-fresno" },
  openGraph: {
    title: "Loan Signing Agent in Fresno | Central Valley Notary Group",
    description:
      "Mobile loan signing services across Fresno and the Central Valley — refinance packages, HELOCs, purchase and seller closings, and reverse mortgages.",
    url: "https://centralvalleynotarygroup.com/loan-signing-agent-fresno",
    siteName: "Central Valley Notary Group",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Loan Signing Agent",
  name: "Mobile Loan Signing Services in Fresno",
  description:
    "Mobile notary loan signing services for refinance packages, HELOCs, purchase and seller closings, and reverse mortgages throughout Fresno and the Central Valley.",
  provider: {
    "@type": "LocalBusiness",
    name: "Central Valley Notary Group",
    telephone: "+1-559-392-7420",
    email: "book@centralvalleynotarygroup.com",
    url: "https://centralvalleynotarygroup.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fresno",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Fresno, CA",
    "Clovis, CA",
    "Madera, CA",
    "Sanger, CA",
    "Selma, CA",
    "Kerman, CA",
    "Reedley, CA",
    "Kingsburg, CA",
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "150",
    description:
      "$150 covers a single-borrower package; $200 when two people sign. Travel is quoted by distance from Fresno.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://centralvalleynotarygroup.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Loan Signing Agent in Fresno",
      item: "https://centralvalleynotarygroup.com/loan-signing-agent-fresno",
    },
  ],
};

export default function LoanSigningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <SiteHeader />

        <section className="lp-hero">
          <div className="lp-hero-inner">
            <p className="section-label">Loan Signings</p>
            <h1>Loan Signing Agent in Fresno &amp; the Central Valley</h1>
            <p>
              I&rsquo;m an NNA Certified Signing Agent, background screened, bonded, and
              carrying $100,000 in E&amp;O coverage. I bring the loan package to your
              kitchen table, your office, or wherever the signing needs to happen &mdash;
              evenings and weekends included.
            </p>
            <div className="lp-cta-row">
              <a
                className="lp-btn lp-btn-gold"
                href="https://calendly.com/appointments-centralvalleynotarygroup/30min"
              >
                Schedule a Signing
              </a>
              <a className="lp-btn lp-btn-ghost" href="sms:15593927420">
                Text (559) 392-7420
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="lp-body">
            <h2>Packages I Sign</h2>
            <p>
              Escrow officers, title companies, and lenders send me the package; I confirm
              the appointment directly with your borrower and handle it from there.
            </p>

            <div className="lp-list">
              <div className="lp-tile">
                <h3>Refinance</h3>
                <p>
                  Complete notarization and signing of refinance packages, including the
                  three-day right of rescission on owner-occupied properties.
                </p>
              </div>
              <div className="lp-tile">
                <h3>HELOC</h3>
                <p>
                  Home equity line of credit documents, with careful attention to
                  right-of-rescission timing and dating.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Purchase &amp; Seller</h3>
                <p>
                  On-site signing support for buyers and sellers closing a real estate
                  purchase, coordinated around your escrow timeline.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Reverse Mortgage</h3>
                <p>
                  Unhurried, patient signing service for reverse mortgage packages, which
                  are longer and deserve a slower pace.
                </p>
              </div>
            </div>

            <div className="lp-price-box">
              <div className="lp-amount">$150</div>
              <p>
                <strong>
                  $150 covers a single-borrower package; $200 when two people sign.
                </strong>{" "}
                Travel is quoted by distance from Fresno. Printing and scan-backs can be
                arranged &mdash; just let me know what the lender requires when you book.
              </p>
            </div>

            <h2>How a Signing Works</h2>
            <ol className="lp-steps">
              <li>
                <strong>You send the package</strong>
                Email the documents or arrange for them to be shipped. Tell me the
                deadline and whether scan-backs are needed.
              </li>
              <li>
                <strong>I contact the borrower</strong>
                I confirm the time and place directly with your signer, and remind them
                what ID to have ready.
              </li>
              <li>
                <strong>We sign</strong>
                I verify identity, witness every required signature, notarize what needs
                notarizing, and check the package page by page before leaving.
              </li>
              <li>
                <strong>Same-day drop or scan-back</strong>
                Documents go straight to the shipper, or get scanned back to you first if
                the lender wants eyes on them before the package ships.
              </li>
            </ol>

            <h2>Why Borrowers Aren&rsquo;t Rushed</h2>
            <p>
              A loan package is often the largest financial document a person ever signs,
              and a signing agent who hurries creates errors that cost everyone a
              redraw. I let people read. I can point out where a figure appears in the
              document &mdash; the rate, the payment, the closing costs &mdash; so they can
              find and check it themselves.
            </p>
            <p>
              What I can&rsquo;t do is explain what those terms mean or advise whether the
              loan is a good idea. I&rsquo;m a Notary Public, not an attorney or a loan
              officer, and questions about the terms belong with your lender or escrow
              officer. Being clear about that line is part of doing this job properly.
            </p>

            <h2>Where I Travel</h2>
            <p>
              Fresno and Clovis are my primary service area, and I regularly travel to
              Madera, Sanger, Selma, Kerman, Reedley, Kingsburg, Friant, Shaver Lake, and
              Auberry. Evening and weekend appointments are available, and same-day
              signings are often possible depending on scheduling.
            </p>

            <div className="lp-cta-row" style={{ justifyContent: "flex-start", marginTop: "34px" }}>
              <a
                className="lp-btn lp-btn-gold"
                href="https://calendly.com/appointments-centralvalleynotarygroup/30min"
              >
                Schedule a Signing
              </a>
              <a className="lp-btn lp-btn-ghost" style={{ color: "#8a6d24", borderColor: "#c9a24a" }} href="tel:15593927420">
                Call (559) 392-7420
              </a>
            </div>

            <a className="lp-back" href="/">
              &larr; Back to all notary services
            </a>
          </div>
        </section>

        <MobileBar />
      </main>
    </>
  );
}
