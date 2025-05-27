import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dinuli Hendawitharana</h1>

        <p className={styles.description}>
          
        I'm a Computer Science undergraduate at the University of Westminster with a strong passion for <span> UI/UX design, Frontend Development,</span> and <span> Data Analytics</span>. <br /> <br />
        I love combining analytical thinking with creativity to build intuitive, impactful digital solutions. I'm a collaborative learner, always eager to grow and contribute to crafting seamless, user-centered experiences.
        </p>

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
