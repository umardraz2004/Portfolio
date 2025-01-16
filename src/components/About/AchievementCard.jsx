import React from "react";
import styles from "./About.module.css";
import { FaCode, FaClock, FaUsers, FaAward } from "react-icons/fa";

const AchievementCard = ({ icon, count, text }) => {
  const iconMap = {
    FaCode: <FaCode />,
    FaClock: <FaClock />,
    FaUsers: <FaUsers />,
    FaAward: <FaAward />,
  };
  return (
    <div className={styles.achievementCard}>
      <div className={`text-5xl text-[#667eea] mb-4 justify-center flex`}>
        {iconMap[icon]}
      </div>
      <h3 className="text-3xl font-bold text-[#2c3e50] mb-2">{count}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default AchievementCard;
