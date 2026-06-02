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
      <section className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.name}>Murilo</span>
          <span>Fernandes</span>
          <span className={styles.eyebrow}>Full Stack Developer</span>
        </h1>
        <div className={styles.techSlider}>
          <div className={styles.techTrack}>
            {techs.map((Icon, index) => (
              <Icon key={index} size={34} />
            ))}

            {techs.map((Icon, index) => (
              <Icon key={`clone-${index}`} size={34} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
