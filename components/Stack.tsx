"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function devicon(tech: string, file = `${tech}-original.svg`) {
  return `${DEVICON_BASE}/${tech}/${file}`;
}

/** Mascote elephpant (Vincent Pontier / ecossistema PHP), em vez do logotipo oval com letras. */
function PhpElephpantIcon() {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 100 100"
      aria-hidden
      className="mx-auto block"
    >
      {/* cauda */}
      <path
        d="M82 52c8-2 14 4 11 12-2 6-10 9-16 5"
        fill="none"
        stroke="#5c6399"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* pata traseira */}
      <ellipse cx="74" cy="82" rx="11" ry="13" fill="#6b73a8" />
      {/* corpo */}
      <ellipse cx="50" cy="64" rx="34" ry="27" fill="#8892bf" />
      {/* barriga clara */}
      <ellipse cx="52" cy="66" rx="18" ry="14" fill="#c7c9e3" opacity="0.5" />
      {/* pata dianteira */}
      <ellipse cx="28" cy="82" rx="11" ry="13" fill="#6b73a8" />
      {/* tromba (atrás da cabeça para encaixar o focinho) */}
      <path
        d="M62 40 Q78 48 76 64 Q74 78 58 86"
        fill="none"
        stroke="#777bb4"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* cabeça */}
      <circle cx="44" cy="38" r="21" fill="#aeb2d5" />
      {/* orelha */}
      <ellipse
        cx="22"
        cy="34"
        rx="12"
        ry="16"
        fill="#777bb4"
        transform="rotate(-18 22 34)"
      />
      <ellipse
        cx="24"
        cy="36"
        rx="5"
        ry="8"
        fill="#9aa0c8"
        opacity="0.65"
        transform="rotate(-18 24 36)"
      />
      {/* olho */}
      <circle cx="52" cy="34" r="4.5" fill="#fff" />
      <circle cx="53" cy="34" r="2" fill="#2a2a3a" />
      {/* sorriso */}
      <path
        d="M46 48q6 5 12 0"
        fill="none"
        stroke="#5c6399"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PowerBIIcon() {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 48 48"
      aria-hidden
      className="mx-auto block"
    >
      <rect x="6" y="22" width="8" height="18" rx="1.5" fill="#F2C811" />
      <rect x="18" y="14" width="8" height="26" rx="1.5" fill="#F2C811" />
      <rect x="30" y="8" width="8" height="32" rx="1.5" fill="#F2C811" />
    </svg>
  );
}

/** 1 = iniciante  2 = básico  3 = intermediário  4 = avançado  5 = proficiente */
type Tech = {
  label: string;
  level: 1 | 2 | 3 | 4 | 5;
  src?: string;
  render?: () => ReactNode;
};

const LEVEL_LABEL: Record<number, string> = {
  1: "Iniciante",
  2: "Básico",
  3: "Intermediário",
  4: "Avançado",
  5: "Proficiente",
};

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Backend",
    items: [
      { label: "PHP", level: 5, render: () => <PhpElephpantIcon /> },
      {
        label: "Laravel",
        level: 4,
        src: devicon("laravel", "laravel-original.svg"),
      },
      { label: "Node.js", level: 3, src: devicon("nodejs") },
      { label: "MySQL",   level: 5, src: devicon("mysql") },
      { label: "Python",  level: 2, src: devicon("python") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React",      level: 4, src: devicon("react") },
      { label: "Next.js",    level: 3, src: devicon("nextjs", "nextjs-original.svg") },
      { label: "JavaScript", level: 5, src: devicon("javascript") },
      { label: "TypeScript", level: 3, src: devicon("typescript") },
      { label: "HTML5",      level: 5, src: devicon("html5") },
      { label: "CSS3",       level: 4, src: devicon("css3") },
    ],
  },
  {
    title: "Dados & BI",
    items: [
      { label: "Power BI", level: 4, render: () => <PowerBIIcon /> },
      { label: "D3.js",    level: 3, src: devicon("d3js", "d3js-original.svg") },
      {
        label: "TOTVS",
        level: 4,
        render: () => (
          <span
            className="flex h-12 items-center justify-center font-display text-base font-bold tracking-tight text-[color:var(--phosphor-amber)] [text-shadow:0_0_10px_var(--phosphor-glow-soft)]"
            aria-hidden
          >
            TOTVS
          </span>
        ),
      },
    ],
  },
  {
    title: "Infra & Segurança",
    items: [
      { label: "Linux",     level: 4, src: devicon("linux") },
      { label: "Docker",    level: 3, src: devicon("docker") },
      { label: "Git",       level: 4, src: devicon("git") },
      { label: "Kali Linux", level: 2, src: devicon("kalilinux") },
      { label: "Nginx",     level: 3, src: devicon("nginx", "nginx-original.svg") },
      { label: "Bash",      level: 3, src: devicon("bash", "bash-original.svg") },
    ],
  },
];

function ProficiencyBar({ level, thin }: { level: number; thin?: boolean }) {
  return (
    <div
      className={thin ? "mt-0.5 flex w-full gap-0.5" : "mt-1 flex w-full gap-px"}
      role="meter"
      aria-valuenow={level}
      aria-valuemin={1}
      aria-valuemax={5}
      aria-label={LEVEL_LABEL[level]}
      title={LEVEL_LABEL[level]}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          className="min-w-0 flex-1 rounded-[1px] h-[2px]"
          style={{
            background:
              i <= level
                ? "color-mix(in srgb, var(--accent-green) 52%, transparent)"
                : "color-mix(in srgb, var(--accent-green) 10%, transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.25, delay: 0.04 * i, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function TechCell({ item, compact }: { item: Tech; compact?: boolean }) {
  if (compact) {
    return (
      <motion.div
        variants={staggerItem}
        title={`${item.label} · ${LEVEL_LABEL[item.level]}`}
        className="group flex min-h-0 w-full min-w-0 flex-col items-center justify-between gap-1 rounded-md border border-[color-mix(in_srgb,var(--accent-green)_32%,transparent)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,var(--accent-green)_6%)] px-1.5 py-2 text-center shadow-[inset_0_0_0_1px_rgba(0,255,80,0.06),inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-2 sm:py-2.5"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10 [&_svg]:h-7 [&_svg]:w-7 sm:[&_svg]:h-8 sm:[&_svg]:w-8">
          {item.src ? (
            <Image
              src={item.src}
              alt=""
              width={32}
              height={32}
              className="object-contain"
              loading="lazy"
            />
          ) : (
            item.render?.()
          )}
        </div>
        <span className="line-clamp-2 text-[10px] leading-tight text-text-muted transition-colors group-hover:text-accent-green-dim sm:text-[11px]">
          {item.label}
        </span>
        <div className="w-full shrink-0 px-0.5">
          <ProficiencyBar level={item.level} thin />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="group flex min-h-[8.5rem] w-full min-w-0 flex-col items-center justify-between gap-2 rounded-md border border-[color-mix(in_srgb,var(--accent-green)_32%,transparent)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,var(--accent-green)_6%)] px-2.5 py-3 text-center shadow-[inset_0_0_0_1px_rgba(0,255,80,0.06),inset_0_1px_0_rgba(255,255,255,0.03)]"
    >
      <div className="flex shrink-0 flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center">
          <div className="transition-transform duration-200 group-hover:scale-105">
            {item.src ? (
              <Image
                src={item.src}
                alt=""
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
            ) : (
              item.render?.()
            )}
          </div>
        </div>

        <span className="line-clamp-2 text-xs leading-snug text-text-muted transition-colors group-hover:text-accent-green-dim">
          {item.label}
        </span>
      </div>

      <div className="mt-auto w-full shrink-0 px-0.5">
        <ProficiencyBar level={item.level} />
      </div>

      <span className="min-h-[1rem] text-[9px] leading-none text-accent-green-dim opacity-0 transition-opacity group-hover:opacity-100">
        {LEVEL_LABEL[item.level]}
      </span>
    </motion.div>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      className="deck-slide section-bg-stack scroll-mt-16"
      aria-labelledby="stack-heading"
    >
      <motion.div
        className="mx-auto flex min-h-0 w-full max-w-[90rem] flex-1 flex-col px-4 py-5 md:px-10 md:py-7 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
          },
        }}
      >
        <h2
          id="stack-heading"
          className="crt-terminal-glow shrink-0 font-display text-xl font-bold text-accent-green [text-shadow:0_0_18px_rgba(0,255,65,0.35)] md:text-2xl"
        >
          Stack — tecnologias
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <div className="flex w-16 gap-px" aria-hidden>
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="h-[3px] flex-1 rounded-[1px]"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent-green) 48%, transparent)",
                }}
              />
            ))}
          </div>
          <span className="font-display text-xs tracking-widest text-accent-green-dim md:text-sm">
            5 segmentos = nível · nível no hover (tooltip)
          </span>
        </div>

        <motion.div
          className="mt-4 grid min-h-0 flex-1 auto-rows-min grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 md:grid-cols-5 md:gap-3 lg:grid-cols-6 xl:grid-cols-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {groups.flatMap((g, gi) => [
            <p
              key={`h-${g.title}`}
              className={`col-span-full border-b border-[color-mix(in_srgb,var(--accent-green)_26%,transparent)] pb-1 font-display text-[10px] uppercase tracking-[0.18em] text-accent-green-dim sm:text-xs md:text-sm ${gi === 0 ? "pt-0" : "pt-3"}`}
            >
              {g.title}
            </p>,
            ...g.items.map((item) => (
              <TechCell key={`${g.title}-${item.label}`} compact item={item} />
            )),
          ])}
        </motion.div>
      </motion.div>
    </section>
  );
}
