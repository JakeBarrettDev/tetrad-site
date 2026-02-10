import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>Get Started</p>
          <h1 className={styles.title}>Let's Talk About Your Project</h1>
          <p className={styles.subtitle}>
            From initial concept to final walkthrough, we're here to make your vision a reality.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.infoBlock}>
            <h2 className={styles.sectionTitle}>Reach Out</h2>
            <p className={styles.sectionText}>
              Whether you're planning a major expansion or need expert project management, we're ready to help. Give us a call or send an email—we respond quickly.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Phone</span>
                <a href="tel:+18162880000" className={styles.value}>
                  (816) 288-0000
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Email</span>
                <a href="mailto:tbg@tetradbuilding.com" className={styles.value}>
                  tbg@tetradbuilding.com
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Kansas City, MO</span>
                <p className={styles.value}>
                  Serving the greater Kansas City area
                </p>
              </div>
            </div>
          </div>

          <div className={styles.formBlock}>
            <h2 className={styles.sectionTitle}>Send a Message</h2>
            <p className={styles.formNote}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.fieldLabel}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.fieldLabel}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.fieldLabel}>Phone (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className={styles.input}
                  placeholder="(816) 555-1234"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.fieldLabel}>Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6}
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}