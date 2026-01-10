"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

const CONTACT_EMAIL = "info@tetradbuildinggroup.com"; // placeholder (swap later)
const CONTACT_PHONE = "(816) 555-0123"; // placeholder
const CONTACT_CITY = "Kansas City, MO";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Honeypot (basic spam protection)
    if (form.company) return;

    const subject = `Website inquiry from ${form.name || "a visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left: info */}
        <div className={styles.info}>
          <p className={styles.kicker}>GET IN TOUCH</p>
          <h2 className={styles.title}>Let’s talk about your project.</h2>
          <p className={styles.body}>
            Tell us what you’re building and we’ll respond with next steps.
            Clear communication. Reliable scheduling. Quality execution.
          </p>

          <div className={styles.meta}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Email</span>
              <a className={styles.metaValue} href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Phone</span>
              <a className={styles.metaValue} href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}>
                {CONTACT_PHONE}
              </a>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>{CONTACT_CITY}</span>
            </div>
          </div>

          <div className={styles.note}>
            Prefer email? Click the address above — or use the form and your email app will open with the message prefilled.
          </div>
        </div>

        {/* Right: form */}
        <form className={styles.form} onSubmit={onSubmit}>
          {/* Honeypot (should stay hidden) */}
          <input
            className={styles.honeypot}
            name="company"
            value={form.company}
            onChange={onChange}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                className={styles.input}
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Phone (optional)</label>
            <input
              className={styles.input}
              id="phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="816-399-0701"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="What are you looking to build?"
              rows={6}
              required
            />
          </div>

          <button className={styles.submit} type="submit">
            Send Message
          </button>

          <p className={styles.disclaimer}>
            By submitting, your email app will open to send the message.
          </p>
        </form>
      </div>
    </section>
  );
}
