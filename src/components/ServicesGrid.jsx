import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Building Additions",
    desc: "Large-scale expansions planned and executed with minimal disruption.",
    href: "/services",
  },
  {
    title: "Structural & Site Work",
    desc: "Coordination, staging, and installation with a safety-first approach.",
    href: "/services",
  },
  {
    title: "Equipment Installations",
    desc: "Generators, racks, and infrastructure installs—done cleanly and on time.",
    href: "/services",
  },
  {
    title: "Project Management",
    desc: "Clear communication, tight scheduling, and detail-driven delivery.",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services-grid">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            Built around clarity, reliability, and craftsmanship.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <a key={s.title} href={s.href} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <span className={styles.arrow} aria-hidden>
                  →
                </span>
              </div>
              <p className={styles.cardDesc}>{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
