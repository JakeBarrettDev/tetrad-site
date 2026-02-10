import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

const services = [
  {
    title: "Building Additions",
    desc: "Large-scale expansions planned and executed with minimal disruption. We coordinate every phase—from permits to final inspection—so your operations stay on track.",
    icon: "🏗️",
  },
  {
    title: "Structural & Site Work",
    desc: "Coordination, staging, and installation with a safety-first approach. Whether it's foundation work, steel erection, or site prep, we bring precision and accountability to every job.",
    icon: "⚙️",
  },
  {
    title: "Equipment Installations",
    desc: "Generators, racks, and infrastructure installs—done cleanly and on time. We handle complex mechanical systems with the care and expertise they require.",
    icon: "🔌",
  },
  {
    title: "Project Management",
    desc: "Clear communication, tight scheduling, and detail-driven delivery. From concept to completion, we keep your project organized, on budget, and moving forward.",
    icon: "📋",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>What We Do</p>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
            Built around clarity, reliability, and craftsmanship.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <div key={service.title} className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to start your project?</h2>
          <p className={styles.ctaText}>
            Let's talk about how we can help bring your vision to life.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}