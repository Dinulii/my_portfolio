import React from "react";

import styles from "./Education.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
    return (
      <section className={styles.container} id="education">
        <h2 className={styles.title}>Skills & Education</h2>
        
        <div className={styles.content}>
          {/* Skills Section */}
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
  
          {/* Education Section */}
          <div className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.educationItem}>
             <h4>Jan 2024 – Present</h4>
             <p><strong>University of Westminster, London</strong><br />
                (Informatics Institute of Technology)</p>
             <p><strong>BSc(Hons) in Computer Science</strong></p>
   
             </div>

  <div className={styles.educationItem}>
    <h4>Jan 2009 – Feb 2023</h4>
    <p><strong>Sujatha Vidyalaya, Matara</strong></p>
    <ul>
      <li><strong>GCE A/L Examination (2022):</strong> Physical Science – 2C 1S, General English – A</li>
      <li><strong>GCE O/L Examination (2019):</strong> 8As, 1B</li>
    </ul>
  </div>
          </div>
        </div>
      </section>
    );
  };
  