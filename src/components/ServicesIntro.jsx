import styles from "./ServicesIntro.module.css";

export default function ServicesIntro() {
    return (
        <section id="services" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <h2 className={styles.title}>OUR SERVICES</h2>
                <p className={styles.subtitle}>What We Do</p>
            </div>
        </section>
    );
}