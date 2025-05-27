import React from "react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { CertificationCard } from "./CertificationCard";

export const Certifications = () => {
    return (
      <section className={styles.container} id="certifications">
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.certifications}>
          {certifications.map((cert, id) => {
            return <CertificationCard key={id} cert={cert} />;
          })}
        </div>
      </section>
    );
  };