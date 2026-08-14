export default function SiteHeader() {
  return (
    <header className="header">
      <div className="brand-wrap">
        <div>
          <a className="brand-link" href="/">
            <div className="brand-eyebrow">Central Valley</div>
            <div className="brand-name">Notary Group</div>
          </a>
          <div className="brand-rule"></div>
        </div>
      </div>

      <nav className="nav">
        <a href="/#top">Home</a>
        <a href="/#services">Services</a>
        <a href="/#before-appointment">What To Have Ready</a>
        <a href="/#service-area">Service Area</a>
        <a href="/#about">About</a>
        <a href="/#faq">FAQ</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
