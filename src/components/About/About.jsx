import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
        
  <p className={styles.description}>
    I'm a Computer Science undergraduate at the University of Westminster (IIT), passionate about <span>UI/UX Design</span>, <span>Frontend Development</span>, <span>Full-Stack Web Development</span>, and <span>Data Analytics</span>.
    I enjoy learning collaboratively and building user-focused digital experiences.
  </p>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/girlCS.jpg")}
          alt="Dinuli working on a project"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI/UX icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I'm interested in designing user-friendly interfaces, focusing on intuitive navigation and accessibility for diverse users.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontendIcon.png")} alt="Frontend icon" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive web and mobile applications using React, HTML, CSS, and JavaScript, ensuring clean design and functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dataIcon.png")} alt="Data icon" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Data Analytics Enthusiast</h3>
              <p>
                Passionate about turning data into insights using Python and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backendIcon.png")} alt="Backend icon" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
               Build scalable backends with Java and Spring Boot, focusing on clean API and database integration.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
