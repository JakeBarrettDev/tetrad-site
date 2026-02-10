"use client";

import styles from "./SiteHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
      <Link href="/" className={styles.logoLink}>
  <img 
    src="/images/logo.png" 
    alt="Tetrad Building Group" 
    className={styles.logoImage}
  />
</Link>

        {/* Three-line menu button (mobile only) */}
        <button 
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop nav (always visible on desktop) */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/our-mission">Mission</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a className={styles.phone} href="tel:8163990701">
          816-399-0701
        </a>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/our-mission" onClick={() => setMenuOpen(false)}>Mission</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:8163990701" onClick={() => setMenuOpen(false)}>816-399-0701</a>
        </div>
      )}
    </header>
  );
}