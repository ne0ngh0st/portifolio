"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerItem } from "@/lib/motion";

type BulletCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  badge: string;
  wip?: boolean;
  className?: string;
  /** Layout compacto para slides em viewport única */
  dense?: boolean;
  /** Destaque visual (ex.: sistema principal na Autopel) */
  featured?: boolean;
  /** Linha acima do título, ex. “Principal” */
  eyebrow?: string;
  /** Detalhes extras em lista (modo dense fica menor e mais informativo) */
  bullets?: readonly string[];
};

export function BulletCard({
  icon,
  title,
  children,
  badge,
  wip,
  className = "",
  dense = false,
  featured = false,
  eyebrow,
  bullets,
}: BulletCardProps) {
  const pad =
    dense && featured ? "p-5 sm:p-6 md:p-7" : dense ? "p-3 sm:p-3.5" : "p-5";
  const iconSz =
    dense && featured ? "text-2xl md:text-3xl" : dense ? "text-base" : "text-2xl";
  const titleSz =
    dense && featured ? "text-base md:text-lg" : dense ? "text-xs" : "text-lg";
  const bodyWrapperCls = dense
    ? featured
      ? "mb-4 space-y-2.5 text-sm leading-relaxed text-text-muted sm:space-y-3 md:mb-5 md:text-[15px] md:leading-[1.65]"
      : "mb-2 text-[11px] leading-snug text-text-muted"
    : "mb-4 flex-1 space-y-2 text-sm leading-relaxed text-text-muted";

  const frameCls = featured
    ? "border-[#2a4a66] border-l-[4px] bg-gradient-to-br from-[#132436] via-[#0e1624] to-[#0c1420] shadow-[0_0_0_1px_rgba(26,172,224,0.12),0_16px_48px_-16px_rgba(26,172,224,0.35)] hover:shadow-[0_0_0_1px_rgba(26,172,224,0.2),0_20px_56px_-14px_rgba(26,172,224,0.4)]"
    : "border-[#1a2f45] border-l-[3px] shadow-sm hover:shadow-[0_12px_40px_-12px_rgba(26,172,224,0.25)]";

  return (
    <motion.article
      variants={staggerItem}
      whileHover={dense && !featured ? undefined : { y: -2, scale: featured ? 1.005 : 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex min-h-0 flex-col border border-l-accent-blue-light ${featured ? "rounded-xl" : "rounded-lg"} ${frameCls} ${pad} transition-shadow duration-300 h-full ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue-light md:text-[11px]">
          {eyebrow}
        </p>
      ) : null}
      <div
        className={`flex items-start text-accent-blue-light ${dense && !featured ? "mb-1 gap-1.5" : dense && featured ? "mb-3 gap-3 md:mb-4 md:gap-4" : "mb-3 gap-3"}`}
      >
        <span className={`mt-0.5 shrink-0 ${iconSz}`} aria-hidden>
          {icon}
        </span>
        <div>
          <h3 className={`font-display font-bold text-text-primary ${titleSz}`}>
            {title}
            {wip ? (
              <span
                className={`ml-1.5 inline-block rounded bg-accent-blue-dark/40 px-1.5 py-0.5 font-display font-normal text-accent-blue-light ${dense && !featured ? "text-[9px]" : dense ? "text-[10px]" : "text-[10px]"}`}
              >
                WIP
              </span>
            ) : null}
          </h3>
        </div>
      </div>
      <div className={`${bodyWrapperCls} ${!dense ? "flex-1" : ""}`}>
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
      {bullets?.length ? (
        <ul
          className={`list-disc text-text-muted/95 marker:text-accent-blue-light/70 ${dense && featured ? "mb-3 list-outside space-y-2 border-t border-accent-blue-light/10 pl-5 pt-4 text-xs leading-relaxed sm:pl-6 md:mb-4 md:text-sm" : dense ? "list-inside mb-2 space-y-1 text-[10px] leading-snug" : "list-inside mb-3 space-y-0.5 text-[10px] leading-snug"}`}
        >
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      <p
        className={`mt-auto font-display text-accent-blue-light ${dense && featured ? "text-xs md:text-sm" : dense ? "text-[9px] leading-tight" : "text-xs"}`}
      >
        {badge}
      </p>
    </motion.article>
  );
}
