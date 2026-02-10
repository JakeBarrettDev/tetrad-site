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
          <div className={styles.credit}>
  <a href="https://maroonraccoon.dev" target="_blank" rel="noopener noreferrer">
    <img src="/images/maroon-raccoon-logo.png" alt="MaroonRaccoon.dev" />
    <span>Built by MaroonRaccoon.dev</span>
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
