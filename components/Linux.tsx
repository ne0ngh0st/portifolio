"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  sectionVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function devicon(folder: string, file = `${folder}-original.svg`) {
  return `${DEVICON_BASE}/${folder}/${file}`;
}

const archSrc = devicon("archlinux", "archlinux-original.svg");
const gentooSrc = devicon("gentoo", "gentoo-original.svg");
const ubuntuSrc = devicon("ubuntu", "ubuntu-plain.svg");
const fedoraSrc = devicon("fedora", "fedora-original.svg");
const mintSrc = devicon("linuxmint", "linuxmint-original.svg");
const debianSrc = devicon("debian", "debian-original.svg");

const badgeClass =
  "font-display flex min-h-[1.25rem] items-center justify-center text-center text-[11px] uppercase leading-tight tracking-[0.18em] md:text-xs";

/** Alinha ícones na mesma linha visual entre as quatro colunas */
const distroIconSlot =
  "flex h-[4.5rem] w-full items-center justify-center sm:h-[4.75rem]";

/** Mesma altura da legenda do Arch (nome + “i use arch”) nas outras colunas */
const distroCaptionSlot =
  "flex min-h-[2.35rem] flex-col items-center justify-start gap-0.5 text-center";

const archSublineClass =
  "font-display text-[9px] italic leading-tight text-[color:color-mix(in_srgb,#7dd3fc_72%,#64748b)] sm:text-[10px]";

const distroCardMoreClass =
  "flex h-[4.5rem] w-full max-w-[14rem] flex-col justify-center rounded-xl border-2 border-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_40%,transparent)] bg-gradient-to-b from-[#12100a]/90 to-bg-elevated px-2 py-1 shadow-[inset_0_0_20px_rgba(0,0,0,0.22),0_0_20px_-8px_rgba(234,179,8,0.12)] ring-1 ring-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_28%,transparent)] sm:h-[4.75rem] sm:max-w-[15rem]";

const dailyTools = [
  "bash/zsh + tmux",
  "ssh / mosh",
  "systemd + journalctl",
  "btrfs / ext4",
  "docker + compose",
  "nginx / caddy (lab)",
  "vim + git",
];

export function Linux() {
  return (
    <section
      id="linux"
      className="deck-slide section-bg-linux scroll-mt-16"
      aria-labelledby="linux-heading"
    >
      <motion.div
        className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center px-4 py-5 md:px-10 md:py-6"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="linux-heading"
            className="crt-section-title font-display text-lg font-bold md:text-xl"
          >
            Linux — ambiente diário
          </h2>

          <div className="mt-3 space-y-2 text-pretty text-xs leading-relaxed text-text-primary md:text-sm">
            <p>
              <strong className="font-semibold text-text-primary">Arch</strong> no dia a
              dia (rolling, AUR quando compensa o risco);{" "}
              <strong className="font-semibold text-text-primary">Gentoo</strong> para
              entender USE flags, profiles e o que “compile” realmente muda no binário;{" "}
              <strong className="font-semibold text-text-primary">Debian</strong> em
              servidor e homelab (estável, fácil de automatizar);{" "}
              <strong className="font-semibold text-text-primary">Ubuntu</strong>,{" "}
              <strong className="font-semibold text-text-primary">Fedora</strong> e{" "}
              <strong className="font-semibold text-text-primary">Mint</strong> em
              desktops de família e VMs de teste.
            </p>
            <p className="text-text-muted">
              Não coleção de ISOs: cada distro cobre um papel — desktop rápido, lab
              reprodutível, ou estudo de empacotamento. Boot UEFI, LUKS onde faz
              sentido, rede isolada para serviços de lab.
            </p>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-5 grid w-full max-w-5xl grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={staggerItem}
            className="flex min-w-0 flex-col items-center gap-1.5 text-center lg:gap-2"
          >
            <span
              className={`${badgeClass} w-full text-[color:color-mix(in_srgb,#38bdf8_90%,white)]`}
            >
              Principal
            </span>
            <div className={distroIconSlot}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative flex aspect-square h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-xl border-2 border-[color:color-mix(in_srgb,#1793D1_65%,transparent)] bg-gradient-to-b from-[#0a1622]/90 to-bg-elevated shadow-[0_0_24px_-6px_rgba(23,147,209,0.4)] ring-1 ring-[color:color-mix(in_srgb,#1793D1_40%,transparent)] sm:h-[4.5rem] sm:w-[4.5rem]"
              >
                <Image
                  src={archSrc}
                  alt="Arch Linux"
                  width={52}
                  height={52}
                  className="object-contain p-0.5 drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className={distroCaptionSlot}>
              <span className="text-[11px] font-medium leading-tight text-[color:color-mix(in_srgb,#7dd3fc_92%,white)] sm:text-xs">
                Arch Linux
              </span>
              <span className={archSublineClass} title="Easter egg">
                (i use arch btw)
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex min-w-0 flex-col items-center gap-1.5 text-center lg:gap-2"
          >
            <span
              className={`${badgeClass} w-full text-[color:color-mix(in_srgb,#c4b5fd_88%,white)]`}
            >
              Source-based
            </span>
            <div className={distroIconSlot}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative flex aspect-square h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-xl border-2 border-[color:color-mix(in_srgb,#7c3aed_58%,transparent)] bg-gradient-to-b from-[#1a1025]/90 to-bg-elevated shadow-[0_0_24px_-6px_rgba(124,58,237,0.45)] ring-1 ring-[color:color-mix(in_srgb,#a78bfa_38%,transparent)] sm:h-[4.5rem] sm:w-[4.5rem]"
              >
                <Image
                  src={gentooSrc}
                  alt="Gentoo Linux"
                  width={52}
                  height={52}
                  className="object-contain p-0.5 drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className={distroCaptionSlot}>
              <span className="text-[11px] font-medium leading-tight text-[color:color-mix(in_srgb,#ddd6fe_90%,white)] sm:text-xs">
                Gentoo
              </span>
              <span className={`${archSublineClass} invisible select-none`} aria-hidden="true">
                (i use arch btw)
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex min-w-0 flex-col items-center gap-1.5 text-center lg:gap-2"
          >
            <span
              className={`${badgeClass} w-full text-[color:color-mix(in_srgb,#f472b6_88%,white)]`}
            >
              Servidor
            </span>
            <div className={distroIconSlot}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative flex aspect-square h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-xl border-2 border-[color:color-mix(in_srgb,#c73a5c_55%,transparent)] bg-gradient-to-b from-[#1a0c12]/90 to-bg-elevated shadow-[0_0_24px_-6px_rgba(199,58,92,0.35)] ring-1 ring-[color:color-mix(in_srgb,#c73a5c_35%,transparent)] sm:h-[4.5rem] sm:w-[4.5rem]"
              >
                <Image
                  src={debianSrc}
                  alt="Debian"
                  width={52}
                  height={52}
                  className="object-contain p-0.5 drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className={distroCaptionSlot}>
              <span className="text-[11px] font-medium leading-tight text-[color:color-mix(in_srgb,#e8a0b0_90%,white)] sm:text-xs">
                Debian
              </span>
              <span className={`${archSublineClass} invisible select-none`} aria-hidden="true">
                (i use arch btw)
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex min-w-0 flex-col items-center gap-1.5 text-center lg:gap-2"
          >
            <span className={`${badgeClass} w-full text-text-muted`}>Também</span>
            <div className={distroIconSlot}>
              <div className={distroCardMoreClass}>
                <div className="grid w-full grid-cols-3 items-center justify-items-center gap-x-0.5 sm:gap-x-1">
                  {[
                    { src: ubuntuSrc, label: "Ubuntu" },
                    { src: fedoraSrc, label: "Fedora" },
                    { src: mintSrc, label: "Linux Mint" },
                  ].map((d) => (
                    <div
                      key={d.label}
                      className="flex min-w-0 flex-col items-center justify-center gap-0.5"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                        <Image
                          src={d.src}
                          alt=""
                          width={32}
                          height={32}
                          className="max-h-full max-w-full object-contain opacity-95"
                          loading="lazy"
                        />
                      </div>
                      <span className="max-w-[4.25rem] text-balance text-center text-[10px] font-medium leading-tight text-text-primary sm:text-[11px]">
                        {d.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={distroCaptionSlot}>
              <span className="text-[11px] font-medium leading-tight text-text-muted sm:text-xs">
                Desktop &amp; lab
              </span>
              <span className={`${archSublineClass} invisible select-none`} aria-hidden="true">
                (i use arch btw)
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 flex w-full justify-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45 }}
        >
          <div className="crt-panel flex w-full max-w-2xl flex-col gap-3 rounded-lg border border-[color:color-mix(in_srgb,var(--accent-green)_48%,transparent)] bg-[color-mix(in_srgb,var(--bg-elevated)_92%,var(--accent-green)_8%)] p-4 text-left shadow-[0_0_28px_-14px_rgba(0,255,65,0.1)] ring-1 ring-[color:color-mix(in_srgb,var(--accent-green)_18%,transparent)] md:gap-4 md:p-5">
            <p className="crt-terminal-glow font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent-green [text-shadow:0_0_18px_rgba(0,255,65,0.35)] md:text-xs">
              Stack do host
            </p>
            <ul
              className="grid w-full min-w-0 grid-cols-2 content-start gap-2 font-display text-[10px] text-accent-green sm:grid-cols-3 md:text-[11px]"
              aria-label="Ferramentas e serviços usados no host"
            >
              {dailyTools.map((t) => (
                <li
                  key={t}
                  className="flex min-h-[2.1rem] items-center justify-center rounded border border-[color:color-mix(in_srgb,var(--accent-green)_55%,transparent)] bg-[color-mix(in_srgb,var(--accent-green)_10%,rgba(0,0,0,0.45))] px-1.5 py-1 text-center leading-snug shadow-[inset_0_0_0_1px_rgba(0,255,80,0.08)] md:min-h-0 md:px-2 md:py-1.5"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
