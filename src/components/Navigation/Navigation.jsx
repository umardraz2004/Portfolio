import styles from "./Navigation.module.css";
import cv from "../../assets/Umar_Draz_Cv.pdf"

export default function Navigation() {
  return (
    <nav
      className={`${styles.nav} fixed w-full top-0 bg-white px-12 py-5 flex justify-between items-center z-50`}
    >
      <div className="text-2xl font-bold text-[#2c3e50]">Portfolio</div>
      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <a href="#home" className={`font-poppins ${styles.navLink}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`font-poppins ${styles.navLink}`}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={`font-poppins ${styles.navLink}`}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={`font-poppins ${styles.navLink}`}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={`font-poppins ${styles.navLink}`}>
            Contact
          </a>
        </li>
      </ul>
      <div>
        <a
          href={cv}
          download="Umar_Draz_Cv.pdf"
          className={`font-poppins ${styles.downloadBtn}`}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
