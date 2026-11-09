
const services = [
  {
    icon: "🤖",
    title: "AKOSH AI",
    description: "Sun’iy intellekt bilan suhbatlashing.",
    tag: "AI ASSISTANT",
  },
  {
    icon: "🧠",
    title: "Topishmoqlar",
    description: "Bilimingizni qiziqarli savollar bilan sinang.",
    tag: "QUIZ & BRAIN",
  },
  {
    icon: "🎬",
    title: "Video Studio",
    description: "Video g‘oyalar va ssenariylar yarating.",
    tag: "CREATIVE",
  },
  {
    icon: "📰",
    title: "Yangiliklar",
    description: "Maqolalar va foydali ma’lumotlar.",
    tag: "NEWS",
  },
  {
    icon: "🌍",
    title: "Tarjimon",
    description: "Turli tillar orasida tarjima qiling.",
    tag: "LANGUAGES",
  },
  {
    icon: "👤",
    title: "Mening profilim",
    description: "Shaxsiy profilingizni boshqaring.",
    tag: "ACCOUNT",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="/" className="logo">
          AKOSH<span> WORLD</span>
        </a>
        <nav>
          <a href="#services">Xizmatlar</a>
          <a href="#about">Biz haqimizda</a>
          <a href="#services" className="login">Boshlash ↗</a>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-label">
          <span className="live-dot" />
          YOUR DIGITAL UNIVERSE
        </div>

        <h1>
          Bitta platforma.
          <br />
          <span className="glow">Cheksiz imkoniyat.</span>
        </h1>

        <p>
          AKOSH WORLD — sun’iy intellekt, ijodkorlik,
          bilim va yangiliklar birlashgan zamonaviy platforma.
        </p>

        <a href="#services" className="main-button">
          Platformani kashf etish →
        </a>

        <div className="hero-bottom">
          <span>01 / DISCOVER</span>
          <span>AKOSH WORLD © 2026</span>
        </div>
      </section>

      <section id="services" className="services container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE PLATFORM</span>
            <h2>Imkoniyatlar <span className="glow">olami.</span></h2>
          </div>
          <p>Barcha kerakli vositalar bir joyda.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about container">
        <span className="eyebrow">ABOUT AKOSH WORLD</span>
        <h2>Kelajak sari <span className="glow">birga.</span></h2>
        <p>
          Bizning maqsadimiz — foydali raqamli xizmatlarni
          bitta qulay va zamonaviy platformada birlashtirish.
        </p>
      </section>

      <footer className="footer">
        <a href="/" className="logo">AKOSH<span> WORLD</span></a>
        <p>© 2026 AKOSH WORLD. All rights reserved.</p>
      </footer>
    </main>
  );
}
