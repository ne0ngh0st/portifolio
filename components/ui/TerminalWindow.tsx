"use client";

import { motion, useReducedMotion } from "framer-motion";

type TerminalWindowProps = {
  lines: string[];
  prompt?: string;
  className?: string;
  /** Texto da barra de título (ex.: host + cwd). */
  windowTitle?: string;
  /** Preenche altura do pai (flex) — fonte e padding maiores. */
  fillHeight?: boolean;
  /** Saída densa monoespaçada (ex.: `cat` de arte ASCII). */
  variant?: "default" | "ascii";
};

export function TerminalWindow({
  lines,
  prompt = "$",
  className = "",
  windowTitle = "ne0ngh0st@lab",
  fillHeight = false,
  variant = "default",
}: TerminalWindowProps) {
  const reduce = useReducedMotion();
  const ascii = variant === "ascii";

  const rootShell = fillHeight
    ? "relative flex h-full min-h-0 flex-1 flex-col"
    : "relative";
  const chrome = fillHeight
    ? "flex min-h-0 flex-1 flex-col rounded-xl border border-[#2a3228] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,90,50,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] md:p-3"
    : "rounded-xl border border-[#2a3228] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,90,50,0.12),inset_0_1px_0_rgba(255,255,255,0.03)]";
  const inner = fillHeight
    ? `relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-[#0f2412] bg-black shadow-[inset_0_0_80px_rgba(0,40,20,0.35)] ${reduce ? "" : "crt-flicker"}`
    : `relative overflow-hidden rounded-lg border border-[#0f2412] bg-black shadow-[inset_0_0_80px_rgba(0,40,20,0.35)] ${reduce ? "" : "crt-flicker"}`;
  const titleBar = fillHeight
    ? "relative z-[2] flex shrink-0 items-center gap-2 border-b border-[#142818] bg-[#050807] px-2.5 py-2 md:px-3"
    : "relative z-[2] flex items-center gap-2 border-b border-[#142818] bg-[#050807] px-3 py-2";
  const titleText = fillHeight
    ? "crt-terminal-glow ml-2 font-display text-[11px] text-[#6bdc8a] md:text-xs"
    : "crt-terminal-glow ml-2 font-display text-xs text-[#6bdc8a]";
  const body = fillHeight
    ? ascii
      ? "relative z-[1] flex min-h-0 flex-1 flex-col justify-start overflow-y-auto overflow-x-auto p-2 font-mono text-[6px] leading-[1.08] text-[#7bdc8a] sm:p-2.5 sm:text-[7px] md:p-3 md:text-[8px] [scrollbar-width:thin] [scrollbar-color:var(--term-scroll-thumb)_#050807]"
      : "relative z-[1] flex min-h-0 flex-1 flex-col justify-start overflow-y-auto overflow-x-hidden p-3.5 font-display text-xs leading-snug text-[#c8f0ce] md:p-4 md:text-[13px] md:leading-relaxed [scrollbar-width:thin] [scrollbar-color:var(--term-scroll-thumb)_#050807]"
    : ascii
      ? "relative z-[1] overflow-x-auto overflow-y-auto p-3 font-mono text-[7px] leading-[1.08] text-[#7bdc8a] sm:text-[8px]"
      : "relative z-[1] p-4 font-display text-sm leading-relaxed md:p-5 md:text-[15px]";

  return (
    <div className={`${rootShell} ${className}`}>
      <div
        className={chrome}
        style={{
          background:
            "linear-gradient(165deg, #1c221e 0%, #101412 45%, #080a09 100%)",
        }}
      >
        <div className={inner}>
          <div className={titleBar}>
            <span className="size-3 rounded-full bg-[#ff5f56]" aria-hidden />
            <span className="size-3 rounded-full bg-[#ffbd2e]" aria-hidden />
            <span className="size-3 rounded-full bg-[#27c93f]" aria-hidden />
            <span className={titleText}>{windowTitle}</span>
          </div>
          <div className={body}>
            {lines.map((line, i) => {
              const isPrompt = line.startsWith(prompt);
              const delay = reduce || ascii ? 0 : 0.12 * i;
              return (
                <motion.p
                  key={`${i}-${line.slice(0, 24)}`}
                  className={`mb-0.5 last:mb-0 ${
                    fillHeight && !ascii ? "md:mb-1" : ""
                  } ${
                    isPrompt
                      ? "crt-terminal-glow text-accent-green"
                      : ascii
                        ? "whitespace-pre pl-0 text-[#4a9c5a] [text-shadow:0_0_6px_rgba(0,255,80,0.12)]"
                        : "pl-0 text-[#5edc6b] [text-shadow:0_0_6px_rgba(0,200,80,0.15)]"
                  }`}
                  initial={reduce || ascii ? false : { opacity: 0 }}
                  whileInView={reduce || ascii ? undefined : { opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.25, delay }}
                >
                  {line}
                </motion.p>
              );
            })}
            <motion.span
              className="inline-block h-3 w-1.5 translate-y-px bg-accent-green align-middle [box-shadow:0_0_8px_rgba(0,255,80,0.55)] md:h-3.5 md:w-1.5"
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={
                reduce ? undefined : { duration: 1, repeat: Infinity, ease: "linear" }
              }
              aria-hidden
            />
          </div>
          <div
            className="crt-terminal-scanlines pointer-events-none absolute inset-0 z-[3] opacity-[0.72] mix-blend-multiply"
            aria-hidden
          />
          <div
            className="crt-terminal-vignette pointer-events-none absolute inset-0 z-[4]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
