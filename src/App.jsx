import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="top-bar-content">
          <a href="tel:7903562657" className="top-bar-link">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 7903562657
          </a>
          <a href="https://www.instagram.com/rubisharma_makeovers?igsh=MXN5b2tyYzZ6ZWFiNg==" target="_blank" rel="noreferrer" className="top-bar-link">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Ruby<span>Makeovers</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-actions">
          <a href="https://www.instagram.com/rubisharma_makeovers?igsh=MXN5b2tyYzZ6ZWFiNg==" target="_blank" rel="noreferrer" className="btn btn-primary nav-book-desktop">
            Book Now
          </a>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
              ) : (
                <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="https://www.instagram.com/rubisharma_makeovers?igsh=MXN5b2tyYzZ6ZWFiNg==" target="_blank" rel="noreferrer" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: '2rem' }}>
            Book Now
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <img src="/images/hero_makeover_1771872528174.png" alt="Glamorous makeup model" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content animate-up">
            <span className="hero-subtitle">Premium Beauty Salon</span>
            <h1 className="hero-title">Discover Your <span>Inner Glow</span></h1>
            <p className="hero-description">
              Elevate your beauty with professional makeup artistry. From elegant bridal looks to glamorous party makeovers, we create customized experiences to make you feel extraordinary.
            </p>
            <div className="hero-btns delay-1">
              <a href="#services" className="btn btn-primary">Our Services</a>
              <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook / Inspiration Preview */}
      <section className="lookbook-preview">
        <div className="container">
          <div className="lookbook-grid">
            <div className="lookbook-item animate-up">
              <img src="https://i.pinimg.com/736x/9e/4a/7d/9e4a7dceccf2db4fa47a39cc6aad4554.jpg" alt="Soft Glam Makeup Portrait" />
              {/* <div className="lookbook-caption">Soft Glam</div> */}
            </div>
            <div className="lookbook-item animate-up delay-1">
          



              <img src="https://i.pinimg.com/736x/a6/b0/59/a6b0597e2d5518cdfdbdda693061852d.jpg" alt="Classic Beauty" />
              {/* <div className="lookbook-caption">Bold &amp; Dramatic</div> */}
            </div>
            <div className="lookbook-item animate-up delay-2">
              <img src="https://i.pinimg.com/736x/09/31/3a/09313a5319f34b8668c9c2276507d204.jpg" alt="Bridal Elegance" />
              {/* <div className="lookbook-caption">Bridal Elegance</div> */}
            </div>
            <div className="lookbook-item animate-up delay-3">
                  <img src="https://i.pinimg.com/736x/28/b1/a3/28b1a33bfe24d0ddcf2a57d2d885debe.jpg" alt="Bold & Dramatic Look" />
              {/* <div className="lookbook-caption">Classic Beauty</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="my-work" className="my-work-section">
        <div className="container">
          <h2 className="section-title">My <span>Work</span></h2>
          <div className="my-work-grid">
            {[
              '/mywork/p2.jpeg',
              '/mywork/p3.jpeg',
              '/mywork/p5.jpeg',
              '/mywork/p6.jpeg',
              '/mywork/p7.jpeg',
              '/mywork/pp1.jpeg'
            ].map((img, idx) => (
              <div key={idx} className={`my-work-item animate-up delay-${idx % 3}`}>
                <img src={img} alt={`Makeup Work ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="services-grid">

            <div className="service-card animate-up">
              <div className="service-icon">👑</div>
              <h3>Bridal Makeup</h3>
              <p className="service-subtitle">(Luxury Wedding Experience)</p>
              <ul className="service-list">
                <li>HD or Airbrush Makeup</li>
                <li>Complete Skin Preparation</li>
                <li>Custom Eye Makeup</li>
                <li>False Lashes</li>
                <li>Hairstyling</li>
                <li>Saree Draping</li>
                <li>Touch-Up Kit</li>
              </ul>
            </div>

            <div className="service-card animate-up delay-1">
              <div className="service-icon">💍</div>
              <h3>Engagement & Reception</h3>
              <ul className="service-list" style={{ marginTop: '2.4rem' }}>
                <li>HD Makeup</li>
                <li>Contouring</li>
                <li>Trend Eye Makeup</li>
                <li>Hairstyling</li>
              </ul>
            </div>

            <div className="service-card animate-up delay-2">
              <div className="service-icon">✨</div>
              <h3>Party & Event Makeup</h3>
              <ul className="service-list" style={{ marginTop: '2.4rem' }}>
                <li>Long-Lasting Base</li>
                <li>Glam or Subtle Look</li>
                <li>Hairstyling</li>
              </ul>
            </div>

            <div className="service-card animate-up">
              <div className="service-icon">📸</div>
              <h3>Photoshoot & Editorial</h3>
              <ul className="service-list" style={{ marginTop: '2.4rem' }}>
                <li>HD Camera-Friendly Makeup</li>
                <li>Defined Contouring</li>
                <li>On-Set Touch-Up Support</li>
              </ul>
            </div>

            <div className="service-card animate-up delay-1">
              <div className="service-icon">✈️</div>
              <h3>Destination Wedding</h3>
              <ul className="service-list" style={{ marginTop: '2.4rem' }}>
                <li>Travel Service</li>
                <li>Full Bridal Setup</li>
                <li>Bridal Party Option</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Banner / About */}
      <section id="about" className="banner">
        <div className="container">
          <h2 className="animate-up">Ready for your transformation?</h2>
          <p className="animate-up delay-1" style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Ruby Makeovers is dedicated to bringing out your best features with high-end products and advanced techniques. Let us pamper you for your next big event.
          </p>
          <a href="#contact" className="btn btn-primary animate-up delay-2">Get in Touch</a>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Featured <span>Work</span></h2>
          <div className="gallery-grid">

            <div className="gallery-item animate-up">
              <img src="/images/bridal_makeup_1771872720832.png" alt="Bridal Makeup" />
              <div className="gallery-overlay">
                <h3>Bridal Glow</h3>
                <p>Traditional & Modern Fusion</p>
              </div>
            </div>

            <div className="gallery-item animate-up delay-1">
              <img src="/images/party_makeup_1771872841586.png" alt="Party Makeover" />
              <div className="gallery-overlay">
                <h3>Evening Glamour</h3>
                <p>Cinematic & Flawless</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div>
            <div className="footer-logo">Ruby<span>Makeovers</span></div>
            <p className="footer-text">
              Professional makeup and hair styling services for weddings, parties, and editorial shoots.
              We believe in enhancing your natural beauty.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li><a href="tel:7903562657">+91 7903562657</a></li>
              <li style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Koyla Nagar, Dhanbad<br />Jharkhand - 826001</li>
            </ul>
            <div className="social-icons" style={{ display: 'flex', gap: '1.2rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/rubisharma_makeovers?igsh=MXN5b2tyYzZ6ZWFiNg==" target="_blank" rel="noreferrer" title="Instagram">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/14cvrVeAyte/" target="_blank" rel="noreferrer" title="Facebook">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Ruby Makeovers. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
