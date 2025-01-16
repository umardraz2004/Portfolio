import React from "react";
import styles from "./About.module.css";

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className={styles.progressItem}>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
