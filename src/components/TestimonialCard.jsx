import styles from "./TestimonialCard.module.css";

export default function TestimonialCard() {
    return (
        <section id="testimonials" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.card}>
                        <blockquote className={styles.quote}>"I have had the distinct pleasure of working with TETRAD BUILDING GROUP LLC on very large scale building additions, building moves, engine generators and cable rack installation projects. They are an excellent team to work with… punctual, easy to get in touch with and complete projects in the allotted time frame...Their work is excellent... with quality… are aware of  strict standards and adhere to them all."
                        </blockquote>
                    <p className={styles.author}>-  Phillip Sailas, Jr.</p>
                </div>
            </div>
        </section>
    );
}