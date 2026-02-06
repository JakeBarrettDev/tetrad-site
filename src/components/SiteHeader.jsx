import styles from "./SiteHeader.module.css";
import Link from "next/link";

export default function SiteHeader() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
            <div className={styles.logo}>TETRADBUILD.COM</div>

            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/our-mission">Mission</Link>
                <a href="#services">Services</a>
                <Link href="/projects">Projects</Link>
                <a href="#more">More</a>
            </nav>

            <a className={styles.phone} href="tel:8163990701">816-399-0701</a>
            </div>
        </header>    
        );
}