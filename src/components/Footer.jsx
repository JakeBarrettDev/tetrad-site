import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>Tetrad</div>
          <p className={styles.tagline}>
            Partnering with clients from concept to completion.
          </p>
        </div>

        {/* TODO: Update Links whene more pages are added */}
        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="/home">Home</a>
          <a href="/services">Services</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className={styles.legal}>
          <p className={styles.small}>
            © {new Date().getFullYear()} Tetrad Building Group, LLC. All rights reserved.
          </p>
          <p className={styles.smallMuted}>
            Built by Maroon Raccoon.
          </p>
        </div>
      </div>
    </footer>
  );
}
