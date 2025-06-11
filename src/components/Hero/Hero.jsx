import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dinuli Hendawitharana</h1>

        <h2 className={styles.subHeading}> UI/UX Designer | Front-End Developer | Aspiring Data Analyst </h2>
      
        <a href="mailto:dinulihendawitharana03@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/assets/cv/Dinuli_cv.pdf" download className={styles.cvButton}>Download CV</a>
      </div>

      <img
        src={getImageUrl("hero/HeroImg.png")}
        alt="Dinuli profile"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
