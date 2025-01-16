import styles from "./Projects.module.css";

export default function ProjectCard({
  image,
  title,
  description,
  demoLink,
  githubLink,
}) {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className={styles.projectLinks}>
          <a
            href={demoLink} target="_blank"
            className="btn bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-2 rounded"
          >
            Live Demo
          </a>
          <a
            href={githubLink} target="_blank"
            className="btn border-2 border-[#667eea] text-[#667eea] px-4 py-2 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
