import styles from "./Skills.module.css";

export default function SkillCard({ icon, name, frameworks, iconSrc }) {
  return (
    <div className={styles.skillCard}>
      <i className={`${icon} ${!iconSrc ? "" : "hidden"}`}>
        {iconSrc && <img src={iconSrc} alt={name} style={{ width: "50px" }} />}
      </i>
      <h4 className="text-lg font-semibold text-[#2c3e50] mb-2">{name}</h4>
      {frameworks && (
        <div className={styles.relatedSkills}>
          <span className="text-sm text-gray-600 mb-2 block">
            Related Frameworks:
          </span>
          {frameworks.map((framework, index) => (
            <div key={index} className={styles.miniSkill}>
              <div className="w-5 h-5 me-2">
                <img
                  src={framework.iconSrc}
                  className="w-full h-full object-contain"
                  alt={iconSrc}
                />
              </div>
              <div className="text-sm text-gray-700">{framework.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
