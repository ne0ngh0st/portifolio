"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const HERO_HEADING_TEXT = "Antonio Pedro Reale Barbosa";

/** Typewriter no nome — depois blocos com espaçamento estável (não sobrepõe o título). */
const TYPE_T0 = 0.35;
const TYPE_STAGGER = 0.048;
const TYPE_DURATION = 0.13;

const typewriterDoneAt =
  TYPE_T0 +
  (HERO_HEADING_TEXT.length - 1) * TYPE_STAGGER +
  TYPE_DURATION;

const AFTER_NAME_PAUSE = 0.12;
const SECTION_GAP = 0.26;

const DELAY_HANDLE = typewriterDoneAt + AFTER_NAME_PAUSE;
const DELAY_TAGLINES = DELAY_HANDLE + SECTION_GAP;
const DELAY_LINKS = DELAY_TAGLINES + SECTION_GAP;
const DELAY_LOCATION = DELAY_LINKS + SECTION_GAP;

const tvPanelShow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Só para propagar variantes do painel às letras. */
const tvHeadingPassThrough = {
  hidden: {},
  show: {},
};

function heroBlockAt(delaySeconds: number) {
  return {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.78,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: delaySeconds,
      },
    },
  };
}

function heroLetterVariant(letterIndex: number) {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: TYPE_T0 + letterIndex * TYPE_STAGGER,
        duration: TYPE_DURATION,
        ease: "easeOut" as const,
      },
    },
  };
}

// Duração total da animação de boot em ms
const BOOT_DURATION_MS = 4200;

/** Overlay de inicialização CRT — roda uma vez na montagem */
function CrtPowerOn({ onDone, reduce }: { onDone: () => void; reduce: boolean }) {
  useEffect(() => {
    if (reduce) { onDone(); return; }
    // Trava o scroll durante o boot
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      onDone();
    }, BOOT_DURATION_MS);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [onDone, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      key="crt-boot"
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[20] overflow-hidden rounded-[inherit]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Fundo preto inicial — some em 0.8s */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeIn" }}
      />

      {/* Scan line varrendo de cima a baixo — inicia em 0.5s */}
      <motion.div
        className="absolute left-0 right-0"
        style={{
          top: 0,
          height: 4,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.95), rgba(255,255,255,0.0))",
          filter: "blur(2px)",
        }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "110vh", opacity: [0, 1, 0.8, 0] }}
        transition={{ delay: 0.5, duration: 0.7, ease: "linear" }}
      />

      {/* Segunda scan — leve rebote, ~1.4s */}
      <motion.div
        className="absolute left-0 right-0"
        style={{
          top: 0,
          height: 2,
          background:
            "linear-gradient(to bottom, transparent, rgba(180,255,200,0.6), transparent)",
          filter: "blur(1px)",
        }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "110vh", opacity: [0, 0.5, 0] }}
        transition={{ delay: 1.4, duration: 0.6, ease: "linear" }}
      />

      {/* Flash de phosphor branco central — delay 0.8s */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,240,0.85), rgba(255,220,160,0.4) 45%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: [0, 0.95, 0.4, 0], scale: [1.12, 1.0, 1.0] }}
        transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
      />

      {/* Flickering pesado do warm-up — delay 0.8s, dura 1.8s */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [
            1, 0.1, 0.85, 0.0, 0.9, 0.25, 0.8, 0.05, 0.7, 0.15,
            0.75, 0.0, 0.55, 0.1, 0.4, 0.0,
          ],
        }}
        transition={{
          delay: 0.8,
          duration: 1.8,
          times: [
            0, 0.05, 0.1, 0.17, 0.22, 0.3, 0.36, 0.44, 0.52, 0.6,
            0.68, 0.75, 0.82, 0.88, 0.94, 1,
          ],
          ease: "linear",
        }}
      />

      {/* Phosphor residual — tela "acaba de ligar", leve glow que persiste e some */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(200,255,180,0.12), transparent 65%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.5, 0] }}
        transition={{ delay: 2.6, duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function CrtNoise({ filterId }: { filterId: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[6] h-full w-full rounded-[inherit] opacity-[0.07] mix-blend-overlay"
      aria-hidden
    >
      <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}

/** Caixa estilo MS-DOS / CP437, alinhada em monoespaçado com o restante do herói. */
function DosScrollPrompt({ reduce }: { reduce: boolean }) {
  const row = "│   SCROLL  ▼▼     │";
  const prefix = row.slice(0, 12);
  const suffix = row.slice(14);
  return (
    <div
      className="crt-phosphor-muted font-display text-[10px] leading-[1.2] sm:text-[11px] select-none"
      aria-hidden
    >
      <pre className="mx-auto inline-block text-left text-[color:var(--phosphor-amber-dim)] drop-shadow-[0_0_8px_var(--phosphor-glow-soft)]">
        {`┌──────────────────┐
`}
        {prefix}
        {!reduce ? (
          <motion.span
            className="inline text-[color:var(--phosphor-amber)]"
            animate={{ opacity: [1, 0.35, 1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          >
            ▼▼
          </motion.span>
        ) : (
          <span className="inline text-[color:var(--phosphor-amber)]">▼▼</span>
        )}
        {suffix}
        {`
└──────────────────┘`}
      </pre>
    </div>
  );
}

const linkBase =
  "inline-flex items-center gap-2 border px-3 py-2 font-display text-sm transition-[color,box-shadow,border-color] crt-phosphor-text border-[color:var(--phosphor-amber-dim)] bg-black/25 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.4)] hover:border-[color:var(--phosphor-amber)] hover:shadow-[0_0_14px_var(--phosphor-glow-soft),inset_0_0_12px_rgba(255,160,60,0.08)] rounded-sm";

export function Hero() {
  const reduce = useReducedMotion();
  const noiseId = useId().replace(/:/g, "");
  const [booted, setBooted] = useState(false);

  return (
    <section
      id="top"
      className="deck-slide crt-hero-section relative justify-center overflow-hidden px-4 pb-12 pt-0 md:px-8 md:pb-16 md:pt-0"
      aria-labelledby="hero-heading"
      style={{
        background:
          "radial-gradient(ellipse 95% 65% at 50% 88%, rgba(0,0,0,0.35) 0%, transparent 52%), #050403",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,0,0,0.28),transparent_55%)]" />

      {/* ── Monitor wrapper ─────────────────────────────────────────── */}
      <div className="relative z-[1] mx-auto flex w-full max-w-3xl flex-col items-center">

        {/*
          Moldura: a imagem do monitor fica em cima de tudo (z-[10]).
          O padding interno espelha as bordas físicas da foto (~6.5% horizontal,
          ~7% topo, ~16% base) para o conteúdo cair dentro da tela.
        */}
        <div className="relative w-full">

          {/* ── Área da tela (fica sob a moldura) ── */}
          <div
            className="crt-screen-surface relative overflow-hidden"
            style={{
              margin: "6.8% 8.5% 16.5%",
              borderRadius: "52% 52% 49% 49% / 12% 12% 10% 10%",
            }}
          >
            <motion.div
              className={`relative z-[1] px-5 py-10 text-center md:px-10 md:py-12 ${reduce ? "" : "crt-flicker"}`}
              variants={reduce ? undefined : tvPanelShow}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : booted ? "show" : "hidden"}
            >
              {reduce ? (
                <h1
                  id="hero-heading"
                  className="crt-phosphor-text font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                >
                  {HERO_HEADING_TEXT}
                </h1>
              ) : (
                <motion.h1
                  id="hero-heading"
                  aria-label={HERO_HEADING_TEXT}
                  variants={tvHeadingPassThrough}
                  className="crt-phosphor-text font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                >
                  {HERO_HEADING_TEXT.split("").map((char, i) => (
                    <motion.span
                      key={`heading-char-${i}`}
                      variants={heroLetterVariant(i)}
                      className="inline-block"
                      aria-hidden
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
              )}
              <motion.p
                variants={reduce ? undefined : heroBlockAt(DELAY_HANDLE)}
                className="crt-phosphor-text mt-4 font-display text-base md:text-lg"
              >
                @ne0ngh0st
                <motion.span
                  className="ml-0.5 inline-block w-2 align-middle bg-[color:var(--phosphor-amber)]"
                  style={{ height: "1.05em" }}
                  animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 0.9, repeat: Infinity, ease: "linear" }
                  }
                  aria-hidden
                />
              </motion.p>
              <motion.div
                variants={reduce ? undefined : heroBlockAt(DELAY_TAGLINES)}
                className="crt-phosphor-muted mt-6 space-y-1 text-base md:text-lg"
              >
                <p>Desenvolvedor de Sistemas &amp; Integrações</p>
                <p className="text-[color:var(--phosphor-amber-dim)]">
                  Segurança da Informação (em formação)
                </p>
              </motion.div>

              <motion.ul
                variants={reduce ? undefined : heroBlockAt(DELAY_LINKS)}
                className="mt-8 flex flex-wrap justify-center gap-2"
                role="list"
              >
                <li>
                  <a
                    href="https://github.com/ne0ngh0st"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Antonio (ne0ngh0st)"
                    className={linkBase}
                  >
                    <FaGithub className="text-lg opacity-90" aria-hidden />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/antonioautopel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Antonio"
                    className={linkBase}
                  >
                    <FaLinkedin className="text-lg opacity-90" aria-hidden />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:fantasmaneon@gmail.com"
                    aria-label="Enviar e-mail para fantasmaneon@gmail.com"
                    className={linkBase}
                  >
                    <FaEnvelope className="text-lg opacity-90" aria-hidden />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511956580191"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp de Antonio"
                    className={linkBase}
                  >
                    <FaWhatsapp className="text-lg opacity-90" aria-hidden />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="/curriculo?print=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir currículo em PDF"
                    className={linkBase}
                  >
                    <FiFileText className="text-lg opacity-90" aria-hidden />
                    Currículo (PDF)
                  </a>
                </li>
              </motion.ul>

              <motion.p
                variants={reduce ? undefined : heroBlockAt(DELAY_LOCATION)}
                className="crt-phosphor-muted mt-6 font-display text-sm md:text-base"
              >
                <span
                  className="crt-phosphor-muted font-display"
                  aria-hidden
                >
                  [SP]
                </span>{" "}
                São Paulo, SP
              </motion.p>
            </motion.div>

            {/* overlays CRT */}
            <div
              className="crt-scanlines-overlay-strong pointer-events-none absolute inset-0 z-[2] opacity-[0.85]"
              aria-hidden
            />
            <div
              className="crt-vignette-overlay-strong pointer-events-none absolute inset-0 z-[3]"
              aria-hidden
            />
            <div
              className="crt-phosphor-flash-overlay pointer-events-none absolute inset-0 z-[4]"
              aria-hidden
            />
            <CrtNoise filterId={`crt-noise-${noiseId}`} />

            {/* ── Animação de boot (removida do DOM após completar) ── */}
            <AnimatePresence>
              {!booted && (
                <CrtPowerOn
                  reduce={Boolean(reduce)}
                  onDone={() => setBooted(true)}
                />
              )}
            </AnimatePresence>
          </div>

          {/* ── Imagem do monitor por cima (pointer-events-none) ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/crt-monitor.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[10] h-full w-full select-none object-cover"
            style={{
              filter: "sepia(0.08) brightness(0.94) saturate(0.92)",
              // Mantem o "bezel/vidro" na borda, deixando o conteúdo do hero visível por dentro.
              WebkitMaskImage:
                "radial-gradient(ellipse 64% 58% at 50% 50%, rgba(0,0,0,0) 36%, rgba(0,0,0,0.25) 49%, rgba(0,0,0,1) 62%)",
              maskImage:
                "radial-gradient(ellipse 64% 58% at 50% 50%, rgba(0,0,0,0) 36%, rgba(0,0,0,0.25) 49%, rgba(0,0,0,1) 62%)",
            }}
          />
        </div>

        <motion.div
          className="mt-6 w-full text-center"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
          aria-hidden
        >
          <DosScrollPrompt reduce={Boolean(reduce)} />
        </motion.div>
      </div>
    </section>
  );
}
