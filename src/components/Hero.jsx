import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Top media strip */}
      <div className={styles.media}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.mediaOverlay} />
        <div className={styles.centerContent} >
                    <p className={styles.kicker}>KANSAS CITY • COMMERCIAL CONSTRUCTION</p>

          <h1 className={`${styles.title} brandHeading`}>
            <span>TETRAD</span>
            <span>BUILDING</span>
            <span>GROUP, LLC</span>
          </h1>
        </div>
      </div>
    

      {/* Maroon panel */}
      <div className={styles.maroon}>
        <p className={styles.tagline}>
          PARTNERING WITH CLIENTS FROM CONCEPT TO COMPLETION
        </p>
        <a className={styles.cta} href="#contact">
          Contact Us
        </a>
      </div>
    </section>
  );
}
