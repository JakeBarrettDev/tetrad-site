import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
            <div className={styles.logo}>TETRADBUILD.COM</div>

            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#mission">Mission</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#more">More</a>
            </nav>

            <a className={styles.phone} href="tel:8163990701">816-399-0701</a>
            </div>
        </header>    
        );
}