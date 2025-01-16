import React from "react";
import styles from "./About.module.css";
const InfoItem = ({ label, value }) => {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoLabel}>{label}:</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
};

export default InfoItem;
