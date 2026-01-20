"use client";
import { useState } from "react";
import styles from "./LogoMark.module.css";

export default function LogoMark({ src = "/images/logo.png", alt = "Tetrad logo" }) {
  const [pressed, setPressed] = useState(false); 

  return (
    <button
      type="button"
      className={`${styles.wrap} ${pressed ? styles.pressed : ""}`}
      onClick={() => {
        setPressed(true);
        window.setTimeout(() => setPressed(false), 180);
      }}
      aria-label="Tetrad logo"
    >
      <img className={styles.img} src={src} alt={alt} />
    </button>
  );
}
