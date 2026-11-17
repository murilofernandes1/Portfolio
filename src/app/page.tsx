"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const entries = [
  { id: "work", name: "projects", color: "#2448b8" },
  { id: "about", name: "about", color: "#b92d24" },
  { id: "contact", name: "contact", color: "#246b46" },
] as const;

const profile = {
  bio: "i’m murilo, a software engineer with two years of experience in full-stack development for mobile and desktop. i work on both interfaces and the systems behind them. outside of work, i enjoy game development, where i explore the creative side of programming.",
  experience: [
    {
      role: "software engineer intern",
      company: "ci&t",
      period: "nov 2026 – present",
    },
    {
      role: "freelance developer",
      company: "",
      period: "feb 2025 – present",
    },
  ],
  education:
    "i’m currently studying systems analysis and development at unianchieta.",
  contactIntro:
    "for project enquiries or a conversation, email is the best place to reach me. you can also find my work and updates through the profiles below.",
  email: "murilofvaz@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/murilofernandesdev/",
  githubUrl: "https://github.com/murilofernandes1",
};

const panelNavigationEvent = "portfolio:panel-navigation";

function subscribeToPanelNavigation(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  window.addEventListener(panelNavigationEvent, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(panelNavigationEvent, onChange);
  };
}

function getPanelHash() {
  return window.location.hash;
}

function getServerPanelHash() {
  return "";
}

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousEntryRef = useRef<(typeof entries)[number]>(entries[0]);
  const closingRef = useRef(false);
  const hash = useSyncExternalStore(
    subscribeToPanelNavigation,
    getPanelHash,
    getServerPanelHash,
  );
  const activeEntry = entries.find((entry) => hash === `#${entry.name}`);
  const selected = activeEntry ?? entries[0];
  const [copyState, setCopyState] = useState<"idle" | "copying" | "copied" | "error">("idle");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    closingRef.current = false;

    if (activeEntry) {
      previousEntryRef.current = activeEntry;
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    if (dialog.open) {
      dialog.close();
      document.getElementById(`open-${previousEntryRef.current.id}`)?.focus({ preventScroll: true });
    }
  }, [activeEntry]);

  useEffect(() => {
    if (copyState !== "copied" && copyState !== "error") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  function openEntry(entry: (typeof entries)[number]) {
    if (window.location.hash === `#${entry.name}`) return;
    window.history.pushState(
      { ...window.history.state, portfolioPanel: true },
      "",
      `#${entry.name}`,
    );
    window.dispatchEvent(new Event(panelNavigationEvent));
  }

  function closePanel() {
    if (!activeEntry || closingRef.current) return;
    closingRef.current = true;
    if (window.history.state?.portfolioPanel) {
      window.history.back();
    } else {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
      window.dispatchEvent(new Event(panelNavigationEvent));
    }
  }

  async function copyEmail() {
    setCopyState("copying");
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.signature}>
        <Image
          className={styles.personalPortrait}
          src="/personal-portrait.png"
          alt=""
          width={1350}
          height={1165}
          sizes="(max-width: 600px) 80px, 96px"
          priority
        />
      </header>

      <main className={styles.main}>
        <nav className={styles.map} aria-label="explore the portfolio">
          <svg
            className={styles.line}
            viewBox="0 0 1000 650"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M370 110C465 60 670 100 650 185C635 245 330 215 345 320C360 405 665 325 650 430C640 505 400 505 415 565" />
          </svg>
          {entries.map((entry) => (
            <a
              key={entry.id}
              id={`open-${entry.id}`}
              href={`#${entry.name}`}
              className={`${styles.entry} ${styles[entry.id]}`}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                openEntry(entry);
              }}
              aria-haspopup="dialog"
              aria-controls="portfolio-panel"
              aria-expanded={activeEntry?.id === entry.id}
            >
              <span className={styles.word}>
                {entry.name}
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </nav>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerName}>
          <span>murilo</span> <span>fernandes</span> <span>vaz</span>
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} all rights reserved.
        </p>
      </footer>

      <dialog
        id="portfolio-panel"
        ref={dialogRef}
        className={`${styles.dialog} ${selected.id === "work" ? styles.workDialog : styles.personalDialog}`}
        data-section={selected.id}
        aria-labelledby="entry-title"
        onCancel={(event) => {
          event.preventDefault();
          closePanel();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePanel();
        }}
      >
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h1 id="entry-title" style={{ color: selected.color }}>
              {selected.name}
            </h1>
            <button
              type="button"
              className={styles.close}
              aria-label="close panel"
              onClick={closePanel}
              autoFocus
            >
              back ↗
            </button>
          </div>
          {selected.id === "work" ? (
            <div className={styles.projects}>
              <p className={styles.emptyProjects}>
                oops, i haven’t added anything here yet.
              </p>
            </div>
          ) : selected.id === "about" ? (
            <div className={styles.aboutContent}>
              <svg
                className={styles.personalLine}
                viewBox="0 0 600 440"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M75 60 C205 25 485 105 435 220 C410 280 235 210 270 310 C287 355 424 388 534 358" />
              </svg>
              <section className={styles.biography}>
                <h2>who am i?</h2>
                <p>{profile.bio}</p>
              </section>
              <section className={styles.aboutDetail}>
                <h2>experience</h2>
                <ol className={styles.timeline}>
                  {profile.experience.map((experience) => (
                    <li key={experience.role} className={styles.timelineItem}>
                      <h3>{experience.role}</h3>
                      {(experience.company || experience.period) && (
                        <p className={styles.timelineMeta}>
                          {experience.company && (
                            <span>{experience.company}</span>
                          )}
                          {experience.period && (
                            <span>{experience.period}</span>
                          )}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
              <section className={`${styles.aboutDetail} ${styles.education}`}>
                <h2>education</h2>
                <p>{profile.education}</p>
              </section>
            </div>
          ) : (
            <div className={styles.contactContent}>
              <p className={styles.previewNote}>{profile.contactIntro}</p>
              <svg
                className={styles.personalLine}
                viewBox="0 0 600 380"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M60 80 C160 15 450 38 430 145 C412 240 180 180 238 275 C271 328 436 350 530 290" />
              </svg>
              <div className={styles.emailPreview}>
                <h2>email</h2>
                <div className={styles.emailActions}>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button
                    type="button"
                    className={styles.copyButton}
                    onClick={copyEmail}
                    disabled={copyState === "copying"}
                    aria-label="copy email address"
                  >
                    {copyState === "copying" ? "copying…" : "copy"}
                  </button>
                </div>
                <span className={styles.copyStatus} role="status">
                  {copyState === "copied" ? "email copied." : copyState === "error" ? "couldn’t copy. select the address above to copy it manually." : ""}
                </span>
              </div>
              <dl className={styles.contactChannels}>
                <div>
                  <dt>linkedin</dt>
                  <dd>
                    {profile.linkedinUrl ? (
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view profile ↗
                      </a>
                    ) : (
                      "your linkedin profile"
                    )}
                  </dd>
                </div>
                <div>
                  <dt>github</dt>
                  <dd>
                    {profile.githubUrl ? (
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view profile ↗
                      </a>
                    ) : (
                      "your github profile"
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
