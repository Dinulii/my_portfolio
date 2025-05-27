import React from "react";
import styles from "./CertificationCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificationCard = ({
  cert: { title, imageSrc, provider, date, certificateUrl },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Certificate for ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.provider}>{provider}</p>
      <p className={styles.date}>{date}</p>
      <a
        href={certificateUrl}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
      </a>
    </div>
  );
};
