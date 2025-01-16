import styles from "./Hero.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import TypeEffect from "../TypeEffect";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBgAnimation}></div>
      <div className="max-w-[1200px] w-full px-8 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className={`text-[#64ffda] text-xl mb-4 font-poppins`}>
            👋 Hello, I am
          </p>
          <h1
            className={`${styles.title} text-[#e6f1ff] text-5xl md:text-7xl font-bold mb-4 font-poppins`}
          >
            Muhammad{" "}
            <span className={`font-poppins ${styles.highlight}`}>
              Umar Draz
            </span>
          </h1>
          <div
            className={`${styles.typeText} flex justify-center items-center text-xl sm:text-2xl md:text-3xl text-[#8892b0] mb-6 min-h-[2.5rem]`}
          >
            <div className="font-poppins">I'm a</div>
            <div className="ms-1">
              <TypeEffect
                texts={[
                  "Full Stack Developer",
                  "Web Developer",
                  "Mobile App Developer",
                ]}
                speed={150}
                pause={3000}
                className="font-semibold font-poppins text-center text-xl sm:text-2xl md:text-3xl text-[#8892b0] md:text-left"
              />
            </div>
          </div>
          <p
            className={`text-[#8892b0] text-lg mb-10 font-poppins`}
          >
            Passionate about creating beautiful web experiences and turning
            ideas into reality through code.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a href="#projects" className={`font-poppins ${styles.primaryBtn}`}>
              View Work
            </a>
            <a
              href="#contact"
              className={`font-poppins ${styles.secondaryBtn}`}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/UmarDraz2004"
            target="_blank"
            title="GitHub"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-umar-draz/"
            target="_blank"
            title="LinkedIn"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://umardraz1115.github.io/Not-Found-Page/"
            target="_blank"
            title="Twitter"
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/excuse_me_umar/"
            target="_blank"
            title="Instagram"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

export default Hero;
