"use client";

import styles from "./page.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiLinux,
  SiPrisma,
  SiMongodb,
  SiFastapi,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";
import { Mail, Linkedin, Github } from "lucide-react";
const techs = [
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiGit,
  SiLinux,
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="home" className={styles.hero}>
        <span className={styles.eyebrow}>Hello, I'm</span>
        <h1 className={styles.title}>
          <span className={styles.name}>Murilo</span>
          <span>Fernandes</span>
          <span className={styles.eyebrow}>Full Stack Developer</span>
        </h1>
        <div className={styles.techSlider}>
          <div className={styles.techTrack}>
            <div className={styles.techGroup}>
              {techs.map((Icon, index) => (
                <Icon key={index} size={34} />
              ))}
            </div>

            <div className={styles.techGroup}>
              {techs.map((Icon, index) => (
                <Icon key={`clone-${index}`} size={34} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Personal projects.</h2>
        </div>

        <div className={styles.projectList}>
          <article className={styles.projectCard}>
            <div className={styles.projectInfo}>
              <h3>LogAi</h3>

              <p>
                Complete system for logistics management with authentication,
                inventory control, orders, tracking and architecture based on
                SOLID.
              </p>

              <div className={styles.techGroup}>
                <SiNestjs color={"#ff4438"} size={30} />
                <SiMysql color={"#ff4438"} size={30} />
                <SiPrisma color={"#ff4438"} size={30} />
                <SiRedis color={"#ff4438"} size={30} />
              </div>
            </div>

            <div className={styles.projectPreview}></div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectInfo}>
              <h3>Catched</h3>

              <p>
                Mobile application for cat identification using a FastAPI
                microservice and the MegaDescriptor-T-224 model, specialized in
                animal recognition.
              </p>

              <div className={styles.techGroup}>
                <SiReact color={"#ff4438"} size={30} />
                <SiNodedotjs color={"#ff4438"} size={30} />
                <SiFastapi color={"#ff4438"} size={30} />
                <SiPrisma color={"#ff4438"} size={30} />
              </div>
            </div>

            <div className={styles.projectPreview}></div>
          </article>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              Curious about how things work. Passionate about building them
              better.
            </h2>
            <p>
              I'm Murilo Fernandes, a Full Stack Developer based in Campo Limpo
              Paulista, São Paulo - Brazil, with a strong focus on backend
              engineering and modern web and mobile applications.
            </p>

            <p>
              I enjoy designing scalable systems, building reliable APIs and
              solving complex problems through simple and maintainable
              solutions.
            </p>

            <p>
              Currently, I'm exploring distributed systems, real-time
              architectures, cloud technologies and the practical applications
              of artificial intelligence in software development.
            </p>
          </div>

          <div className={styles.experienceColumn}>
            <div className={styles.experienceCard}>
              <span className={styles.experiencePeriod}>2026 — Present</span>

              <h3 className={styles.experienceRole}>Full Stack Developer</h3>

              <span className={styles.experienceCompany}>Chateau Studio</span>

              <p className={styles.experienceDescription}>
                Currently, I work as a Full Stack Developer, developing
                end-to-end applications across the front end, back end, and
                infrastructure.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <span className={styles.experiencePeriod}>2026</span>

              <h3 className={styles.experienceRole}>Front End Developer</h3>

              <span className={styles.experienceCompany}>Essencia Digital</span>

              <p className={styles.experienceDescription}>
                I worked as a Front End developer, developing and maintaining
                front-end and mobile applications built in React and React
                Native.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <span className={styles.experiencePeriod}>2023 — 2025</span>

              <h3 className={styles.experienceRole}>Independent Projects</h3>

              <span className={styles.experienceCompany}>
                Personal & Freelance Work
              </span>

              <p className={styles.experienceDescription}>
                I started my career in 2023 as a freelancer, developing personal
                projects to broaden my scope. I gained exposure to various
                technologies, which provided me with a solid foundation as a
                Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Let's build something together.</h2>

        <p className={styles.contactDescription}>
          I'm currently open to new opportunities, freelance projects and
          collaborations. Feel free to reach out.
        </p>

        <div className={styles.contactLinks}>
          <a
            href="mailto:murilofernandesvaz4@gmail.com"
            className={styles.contactCard}
          >
            <div className={styles.iconContact}>
              <Mail size={30} color={"#ff4438"} />
              <span>Email</span>
            </div>
            <strong>murilofernandesvaz4@gmail.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/murilofernandesdev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconContact}>
              <Linkedin size={30} color={"#ff4438"} />
              <span>LinkedIn</span>
            </div>

            <strong>/in/murilofernandesdev</strong>
          </a>

          <a
            href="https://github.com/murilofernandes1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconContact}>
              <Github size={30} color={"#ff4438"} />
              <span>GitHub</span>
            </div>

            <strong>/murilofernandes1</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
