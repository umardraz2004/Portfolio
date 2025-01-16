import styles from "./About.module.css";
import ProgressBar from "./ProgressBar";
import InfoItem from "./InfoItem";
import AchievementCard from "./AchievementCard";

const achievements = [
  { icon: "FaCode", count: "5+", text: "Projects Completed" },
  { icon: "FaClock", count: "5+", text: "Working Hours" },
  { icon: "FaUsers", count: "2+", text: "Team Members" },
  { icon: "FaAward", count: "1+", text: "Certificates" },
];

const skills = [
  { name: "Frontend Development", percentage: 80 },
  { name: "Backend Development", percentage: 50 },
  { name: "Web Development", percentage: 70 },
  { name: "Android Development", percentage: 40 },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12">
        About Me
      </h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">
              Who am I?
            </h3>
            <p className="text-gray-700 mb-8">
              Hello! I'm a passionate developer with a strong foundation in web
              development. I love creating beautiful and functional websites
              that solve real-world problems.
            </p>
            <div className={styles.personalInfo}>
              <InfoItem label="Name" value="Muhammad Umar Draz" />
              <InfoItem label="Email" value="your.email@example.com" />
              <InfoItem label="From" value="Your Location" />
              <InfoItem label="Experience" value="2+ Years" />
            </div>
          </div>

          <div className={styles.aboutStats}>
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">
              My Expertise
            </h3>
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        <div className={styles.achievementGrid}>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              count={achievement.count}
              text={achievement.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
