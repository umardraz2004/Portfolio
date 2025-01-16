import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
import Icons from "../../contants/icons";
import { skillCategories } from "../../utils/mySkills";

const Skills = () => {

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12 font-poppins">
        My Skills
      </h2>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <SkillCard key={skillIndex} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
