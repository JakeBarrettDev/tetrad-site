"use client";

import { useMemo, useState, useCallback } from "react";
import styles from "./TestimonialCarousel.module.css";

export default function TestimonialCarousel({ items }) {
  // 1) Data source (default testimonials if none passed in)
  const testimonials = useMemo(
    () =>
      items ?? [
        {
          quote:
            "I have had the distinct pleasure of working with Tetrad on very large scale building additions, building moves, engine generators and cable rack installation projects. They are an excellent team to work with… punctual, easy to get in touch with and complete projects in the allotted time frame...Their work is excellent... with quality… are aware of strict standards and adhere to them all.",
          author: "Phillip Sailas, Jr.",
        },
        {
          quote:
            "One thing you'll find with Tetrad that you don't find with a lot of other contractors is their attention to detail and their follow through. Communication is excellent, and they really care about the quality of their work.",
          author: "Jake Barrett",
        },
      ],
    [items]
  );

  const total = testimonials.length;

  // 2) Animation + index state (two-layer transition)
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null); // number | null
  const [incomingIndex, setIncomingIndex] = useState(null); // number | null
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (newIndex, dir) => {
      if (total <= 1) return;
      if (isAnimating || newIndex === activeIndex) return;

      setDirection(dir);
      setOutgoingIndex(activeIndex);
      setIncomingIndex(newIndex);
      setIsAnimating(true);

      // Match CSS animation duration (320ms)
      window.setTimeout(() => {
        setActiveIndex(newIndex);
        setOutgoingIndex(null);
        setIncomingIndex(null);
        setIsAnimating(false);
      }, 320);
    },
    [activeIndex, isAnimating, total]
  );

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + total) % total, "prev");
  }, [activeIndex, total, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % total, "next");
  }, [activeIndex, total, goTo]);

  // 3) Keyboard interaction (arrow keys)
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  // 4) Layer picks
  const active = testimonials[activeIndex];
  const outgoing = outgoingIndex !== null ? testimonials[outgoingIndex] : null;
  const incoming = incomingIndex !== null ? testimonials[incomingIndex] : null;

  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Testimonials</h2>

          <div className={styles.controls}>
            <button
              className={styles.navBtn}
              onClick={prev}
              aria-label="Previous testimonial"
              disabled={total <= 1 || isAnimating}
            >
              ←
            </button>
            <button
              className={styles.navBtn}
              onClick={next}
              aria-label="Next testimonial"
              disabled={total <= 1 || isAnimating}
            >
              →
            </button>
          </div>
        </div>

        <div
          className={styles.card}
          role="region"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="Testimonials carousel. Use left and right arrow keys to navigate."
        >
          <div className={styles.stage}>
            {/* Outgoing layer (only during animation) */}
            {outgoing && (
              <div
                className={`${styles.layer} ${
                  direction === "next" ? styles.outNext : styles.outPrev
                }`}
              >
                <blockquote className={styles.quote}>
                  &ldquo;{outgoing.quote}&rdquo;
                </blockquote>
                <p className={styles.author}>— {outgoing.author}</p>
              </div>
            )}

            {/* Incoming layer (only during animation) */}
            {incoming && (
              <div
                className={`${styles.layer} ${
                  direction === "next" ? styles.inNext : styles.inPrev
                }`}
              >
                <blockquote className={styles.quote}>
                  &ldquo;{incoming.quote}&rdquo;
                </blockquote>
                <p className={styles.author}>— {incoming.author}</p>
              </div>
            )}

            {/* Stable layer (when not animating) */}
            {!incoming && (
              <div className={`${styles.layer} ${styles.still}`}>
                <blockquote className={styles.quote}>
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <p className={styles.author}>— {active.author}</p>
              </div>
            )}
          </div>

          <div className={styles.dots} aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === activeIndex ? styles.dotActive : ""
                }`}
                onClick={() => goTo(i, i > activeIndex ? "next" : "prev")}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === activeIndex ? "true" : "false"}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
