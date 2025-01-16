import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import {projectData} from "../../utils/projectData";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12">
        My Projects
      </h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
