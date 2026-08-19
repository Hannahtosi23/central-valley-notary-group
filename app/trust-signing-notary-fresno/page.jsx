import SiteHeader from "../components/SiteHeader";
import MobileBar from "../components/MobileBar";

export const metadata = {
  title: "Trust & Estate Signing Notary in Fresno | Living Trusts & Deeds",
  description:
    "Mobile notary for living trusts, certifications of trust, powers of attorney, advance health care directives, and trust transfer deeds across Fresno and the Central Valley. From $125.",
  alternates: { canonical: "/trust-signing-notary-fresno" },
  openGraph: {
    title: "Trust & Estate Signing Notary in Fresno | Central Valley Notary Group",
    description:
      "Unhurried mobile notary service for living trusts, powers of attorney, advance directives, and trust transfer deeds throughout Fresno and the Central Valley.",
    url: "https://centralvalleynotarygroup.com/trust-signing-notary-fresno",
    siteName: "Central Valley Notary Group",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Trust and Estate Document Notarization",
  name: "Mobile Trust & Estate Signing Notary in Fresno",
  description:
    "Mobile notary service for living trusts, certifications of trust, powers of attorney, advance health care directives, trust amendments, and trust transfer deeds throughout Fresno and the Central Valley.",
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
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "125",
    description:
      "Trust and estate signings start at $125. California's notarial fee is $15 per notarized signature, plus travel. Most trust packages run 6 to 12 signatures.",
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
      name: "Trust & Estate Signing Notary in Fresno",
      item: "https://centralvalleynotarygroup.com/trust-signing-notary-fresno",
    },
  ],
};

export default function TrustSigningPage() {
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
            <p className="section-label">Trust &amp; Estate Signings</p>
            <h1>Trust &amp; Estate Signing Notary in Fresno</h1>
            <p>
              An estate plan is usually signed once, and it has to be right. I bring the
              notary work to your kitchen table, your attorney&rsquo;s office, or a care
              facility, and I take the time to go through a package page by page rather
              than rushing you through a stack of tabs.
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
            <h2>Documents I Notarize in an Estate Package</h2>
            <p>
              Most trust packages that come across my table contain some combination of
              these. Your attorney or document preparer will have flagged which pages need
              a notary.
            </p>

            <div className="lp-list">
              <div className="lp-tile">
                <h3>Living Trust</h3>
                <p>
                  The trust instrument itself, along with restatements and amendments.
                  Banks, title companies, and county recorders expect to see a notarized
                  signature page.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Certification of Trust</h3>
                <p>
                  The short form you hand a bank instead of the full trust. Notarized so a
                  financial institution will accept it without reading your whole estate
                  plan.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Powers of Attorney</h3>
                <p>
                  Durable and financial powers of attorney. Notarization is required when
                  the power will be used for real property, and it is the form most
                  institutions expect regardless.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Advance Health Care Directive</h3>
                <p>
                  California allows either a notary or two qualified witnesses on these.
                  If notarizing is the route your attorney chose, I handle it at the same
                  appointment.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Grant &amp; Trust Transfer Deeds</h3>
                <p>
                  The deed that actually moves your home into the trust. This one must be
                  notarized before the county will record it &mdash; a trust without the
                  deed often misses the point.
                </p>
              </div>
              <div className="lp-tile">
                <h3>Assignments &amp; Affidavits</h3>
                <p>
                  Assignments of personal property, affidavits of trust, and the
                  miscellaneous signature pages that ride along with an estate package.
                </p>
              </div>
            </div>

            <h2>What Gets Notarized &mdash; and What Doesn&rsquo;t</h2>
            <p>
              This is the single thing most people are surprised by, so it is worth saying
              plainly before your appointment rather than at your kitchen table.
            </p>
            <p>
              <strong>
                A will is not made valid by a notary in California. It is made valid by two
                witnesses.
              </strong>{" "}
              That includes the pour-over will that usually sits inside a trust package.
              California does not use the self-proving notarial affidavit that some other
              states do, and a will that has been notarized but not properly witnessed can
              be challenged in probate. If your package contains a will, plan on having two
              qualified adults present who are not receiving anything under it.
            </p>
            <p>
              Everything else in the list above &mdash; the trust, the certification, the
              powers of attorney, the deed &mdash; is notary work, and I will tell you which
              is which when you book so nobody is scrambling on the day.
            </p>
            <p>
              What I can&rsquo;t do is tell you which documents you need or what any
              provision means. I&rsquo;m a Notary Public, not an attorney, and questions
              about the substance of your estate plan belong with the lawyer or document
              preparer who drafted it. Being clear about that line is part of doing this
              job properly.
            </p>

            <div className="lp-price-box">
              <div className="lp-amount">$125+</div>
              <p>
                <strong>Trust and estate signings start at $125.</strong> California sets
                the notarial fee at $15 per notarized signature, plus travel, and most
                trust packages run between six and twelve signatures. Tell me roughly how
                many signature pages are tabbed when you book and you&rsquo;ll get an exact
                quote up front &mdash; nothing is added afterward.
              </p>
            </div>

            <h2>How a Trust Signing Works</h2>
            <ol className="lp-steps">
              <li>
                <strong>You tell me what&rsquo;s in the package</strong>
                Roughly how many notarized signatures, whether a deed is included, and
                whether anyone signing has mobility or health limitations.
              </li>
              <li>
                <strong>We pick a time and place</strong>
                Your home, your attorney&rsquo;s office, a hospital room, or a care
                facility. Every signer must be present in person and must be able to
                understand what they are signing.
              </li>
              <li>
                <strong>We go through it unhurried</strong>
                I verify identity, watch each signature, and complete the notarial
                certificates. I can point out where something appears in the document,
                though I can&rsquo;t explain what it means.
              </li>
              <li>
                <strong>You leave with a complete package</strong>
                I check every tabbed page before I go. If a deed needs recording, it goes
                back to you or your attorney ready to file with the county.
              </li>
            </ol>

            <h2>What To Have Ready</h2>
            <p>
              Every signer needs current photo identification &mdash; a California
              driver&rsquo;s license or DMV ID, a U.S. passport, an out-of-state license,
              or another government ID that is current or was issued within the past five
              years. Names should match the document; if your trust says Margaret and your
              license says Peggy, tell me beforehand so we can sort it out rather than
              stopping mid-signing.
            </p>
            <p>
              Leave signature lines blank until I arrive. A signature I did not witness
              can&rsquo;t be notarized, and re-signing a whole trust package is nobody&rsquo;s
              idea of a good afternoon.
            </p>

            <h2>Where I Travel</h2>
            <p>
              Fresno and Clovis are my primary service area, and I regularly travel to
              Madera, Sanger, Selma, Kerman, Reedley, Kingsburg, Friant, Shaver Lake, and
              Auberry. I also come to hospitals, assisted living facilities, rehabilitation
              centers, and care homes, which is often where estate documents get signed
              when time matters.
            </p>

            <div className="lp-cta-row" style={{ justifyContent: "flex-start", marginTop: "34px" }}>
              <a
                className="lp-btn lp-btn-gold"
                href="https://calendly.com/appointments-centralvalleynotarygroup/30min"
              >
                Schedule a Signing
              </a>
              <a className="lp-btn lp-btn-ghost" style={{ color: "#7b6425", borderColor: "#c9a24a" }} href="tel:15593927420">
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
