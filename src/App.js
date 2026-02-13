import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Animate elements on scroll
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="/logo.png"
              alt="CV Venbell Jaya Logo"
              className="logo-img"
            />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => scrollToSection("about")}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" onClick={() => scrollToSection("services")}>
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Warehouse logistics"
            className="hero-img"
          />
        </div>
        <div className="hero-content">
          <h1 className="fade-in-up">CV Venbell Jaya</h1>
          <p className="tagline fade-in-up delay-1">
            Supplier Umum & Jasa Transportasi Terpercaya
          </p>
          <button
            className="cta-button fade-in-up delay-2"
            onClick={() => scrollToSection("contact")}
          >
            Hubungi Kami
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Tentang Perusahaan</h2>
          <div className="about-content">
            <p className="about-text animate-on-scroll">
              CV Venbell Jaya adalah perusahaan yang bergerak di bidang
              penyediaan barang (general supplier) dan jasa transportasi. Kami
              berkomitmen memberikan layanan yang profesional, tepat waktu, dan
              dapat dipercaya.
            </p>
            <p className="about-text animate-on-scroll">
              Kami siap menjadi mitra bagi instansi pemerintah, perusahaan
              swasta, maupun perorangan dalam memenuhi kebutuhan pengadaan
              barang dan jasa transportasi dengan pelayanan yang cepat dan
              efisien.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="vision-mission">
            <div className="vision-card animate-on-scroll">
              <div className="icon-box">
                <img src="/mission.png" alt="Vision icon" />
              </div>
              <h3>Visi</h3>
              <p>
                Menjadi perusahaan supplier dan transportasi yang profesional,
                terpercaya, dan unggul dalam pelayanan di tingkat regional
                maupun nasional.
              </p>
            </div>
            <div className="mission-card animate-on-scroll">
              <div className="icon-box">
                <img src="/target.png" alt="Mission icon" />
              </div>
              <h3>Misi</h3>
              <ul className="mission-list">
                <li>
                  Menyediakan produk dan layanan berkualitas dengan harga
                  kompetitif serta pengiriman yang tepat waktu.
                </li>
                <li>
                  Memberikan pelayanan yang profesional dan responsif serta
                  membangun kerja sama jangka panjang yang saling menguntungkan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Layanan Kami</h2>

          <div className="services-grid">
            {/* General Supplier */}
            <div className="service-card animate-on-scroll">
              <div className="icon-box">
                <img src="/box.png" alt="Supplier icon" />
              </div>
              <h3>General Supplier</h3>
              <p>Kami menyediakan berbagai kebutuhan barang berkualitas:</p>
              <ul className="service-list">
                <li>ATK dan perlengkapan kantor</li>
                <li>Peralatan kebersihan</li>
                <li>Perlengkapan proyek</li>
                <li>Kebutuhan instansi/perusahaan</li>
                <li>Barang sesuai permintaan (custom order)</li>
              </ul>
            </div>

            {/* Transportation */}
            <div className="service-card animate-on-scroll">
              <div className="icon-box">
                <img src="/van.png" alt="Transportation icon" />
              </div>
              <h3>Transportation</h3>
              <p>Kami melayani jasa transportasi profesional:</p>
              <ul className="service-list">
                <li>Pengiriman dalam dan luar kota</li>
                <li>Distribusi logistik</li>
                <li>Sewa kendaraan operasional</li>
                <li>Jasa angkut barang proyek</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Kontak Perusahaan</h2>
          <div className="contact-grid">
            <div className="contact-card animate-on-scroll">
              <div className="icon-box">
                <img src="/maps.png" alt="Location icon" />
              </div>
              <h3>Alamat</h3>
              <p>Jalan Perintis 2 No. 106, Batu Ampar</p>
            </div>
            <div className="contact-card animate-on-scroll">
              <div className="icon-box">
                <img src="/phone.png" alt="Phone icon" />
              </div>
              <h3>Telepon</h3>
              <p>
                <a href="tel:0896-7269-8465">0896-7269-8465</a>
              </p>
            </div>
            <div className="contact-card animate-on-scroll">
              <div className="icon-box">
                <img src="/email.png" alt="Email icon" />
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:venbelljaya@gmail.com">venbelljaya@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 CV Venbell Jaya. All rights reserved.</p>
        <p>Supplier Umum & Jasa Transportasi Terpercaya</p>
      </footer>
    </div>
  );
}

export default App;
