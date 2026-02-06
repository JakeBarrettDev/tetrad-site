"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ServiceShowcase.module.css";

const showcaseImages = [
  { src: "/gallery/01.jpg", alt: "Project photo 1", variant: "featured" },
  { src: "/gallery/02.jpg", alt: "Project photo 2", variant: "tall" },
  { src: "/gallery/03.jpg", alt: "Project photo 3", variant: "wide" },
  { src: "/gallery/04.jpg", alt: "Project photo 4", variant: "small" },
  { src: "/gallery/05.jpg", alt: "Project photo 5", variant: "small" },
  { src: "/gallery/06.jpg", alt: "Project photo 6", variant: "small" },
  { src: "/gallery/07.JPG", alt: "Project photo 7", variant: "small" },
  { src: "/gallery/08.JPG", alt: "Project photo 8", variant: "small" },
  { src: "/gallery/09.jpg", alt: "Project photo 9", variant: "small" },
];
  
export default function ServiceShowcase() {
  const images = useMemo(() => showcaseImages, []);
  const total = images.length;

  const [openIndex, setOpenIndex] = useState(null); // number | null

  const isOpen = openIndex !== null;
  const active = isOpen ? images[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total));
  }, [total]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % total));
  }, [total]);

  // Keyboard + scroll lock while modal open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return (
    <section className={styles.section} id="services">
      <div className={`container ${styles.inner}`}>
        {/* Left: text */}
        <div className={styles.copy}>
          <p className={styles.kicker}>SERVICE SECOND TO NONE</p>
          <h2 className={styles.title}>Built to last. Managed with precision.</h2>
          <p className={styles.body}>
            Tetrad Building Group delivers dependable construction and project execution with
            consistent communication, scheduling discipline, and attention to detail.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">
              Contact Us
            </a>
            <a className={styles.secondary} href="#projects">
              View Projects
            </a>
          </div>
        </div>

        {/* Right: gallery grid */}
        <div className={styles.gallery} aria-label="Project gallery">
          {images.map((img, idx) => (
            <button
              key={img.src}
              className={`${styles.tile} ${styles[img.variant]}`}
              type="button"
              onClick={() => setOpenIndex(idx)}
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.image}
              />
              <span className={styles.tileOverlay} />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && active && (
        <div
          className={styles.lightboxBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className={styles.lightbox}>
            <button className={styles.closeBtn} onClick={close} aria-label="Close">
              ✕
            </button>

            <button className={styles.prevBtn} onClick={prev} aria-label="Previous image">
              ←
            </button>

            <div className={styles.lightboxMedia}>
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImg}
                priority
              />
            </div>

            <button className={styles.nextBtn} onClick={next} aria-label="Next image">
              →
            </button>

            <p className={styles.caption}>
              {active.alt} <span className={styles.counter}>({openIndex + 1}/{total})</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
