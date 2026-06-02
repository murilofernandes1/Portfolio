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
      <section id="/" className={styles.hero}>
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
          <span className={styles.sectionEyebrow}>Projects</span>

          <h2 className={styles.sectionTitle}>Selected work.</h2>
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
                <SiNestjs color={"#ff4438"} size={20} />
                <SiMysql color={"#ff4438"} size={20} />
                <SiPrisma color={"#ff4438"} size={20} />
                <SiRedis color={"#ff4438"} size={20} />
              </div>
            </div>

            <div className={styles.projectPreview}></div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectInfo}>
              <h3>Virtual Ticket Platform</h3>

              <p>
                Plataforma para venda de ingressos com geração de QR Code,
                pagamentos e painel administrativo.
              </p>

              <div className={styles.projectStack}>
                <span>Next.js</span>
                <span>NestJS</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className={styles.projectPreview}></div>
          </article>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.aboutHeader}>
          <span className={styles.sectionEyebrow}>About</span>

          <h2 className={styles.sectionTitle}>
            Building software with a focus on scalability, performance and clean
            architecture.
          </h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              I'm Murilo Fernandes, a Full Stack Developer based in Campo Limpo
              Paulista - São Paulo, Brazil, with a strong focus on backend
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

          <div className={styles.aboutStats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>2+</span>
              <span className={styles.statLabel}>Years coding</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Passion for building</span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <span className={styles.sectionEyebrow}>Contact</span>

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
            <span>Email</span>
            <strong>murilofernandesvaz4@gmail.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/murilofernandesdev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span>LinkedIn</span>
            <strong>/in/murilofernandesdev</strong>
          </a>

          <a
            href="https://github.com/murilofernandes1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span>GitHub</span>
            <strong>/murilofernandes1</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
