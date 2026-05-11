"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { PRESENTATION_SLIDES } from "@/lib/presentation";
import { navigateToSectionId } from "@/lib/scrollSection";

/**
 * Trilha lateral estilo deck: progresso visual + salto por slide.
 * Visível a partir de `lg` para não competir com o toque em telas estreitas.
 */
export function SlideRail() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  function onSlideClick(e: MouseEvent<HTMLAnchorElement>, slug: string) {
    if (!document.getElementById(slug)) return;
    e.preventDefault();
    navigateToSectionId(slug, reduceMotion === true ? "auto" : "smooth");
  }

  useEffect(() => {
    const els = PRESENTATION_SLIDES.map((s) => document.getElementById(s.slug)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (els.length === 0) return;

    const deck = document.querySelector<HTMLElement>("main.home-deck");
    const root = deck?.contains(els[0]) ? deck : null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        );
        const idx = els.indexOf(best.target as HTMLElement);
        if (idx >= 0) setActive(idx);
      },
      {
        root,
        rootMargin: "-18% 0px -18% 0px",
        threshold: [0.12, 0.22, 0.35, 0.5, 0.65, 0.78, 0.9],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="slide-rail pointer-events-none fixed right-0 top-1/2 z-[35] hidden -translate-y-1/2 pr-[max(0.35rem,env(safe-area-inset-right))] lg:block"
      aria-label="Slides da apresentação"
    >
      <div className="pointer-events-auto relative flex flex-col items-center gap-0 rounded-l-2xl border border-[color:var(--term-scroll-border)] border-r-0 bg-[color-mix(in_srgb,var(--term-scroll-bg)_42%,var(--bg-primary))] py-6 pl-3 pr-2 shadow-[-8px_0_28px_-6px_rgba(0,0,0,0.45),inset_1px_0_0_rgba(0,255,120,0.08)] backdrop-blur-sm">
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--term-scroll-thumb)_52%,transparent)_18%,color-mix(in_srgb,var(--term-scroll-thumb)_32%,transparent)_50%,color-mix(in_srgb,var(--term-scroll-thumb)_52%,transparent)_82%,transparent_100%)]"
          aria-hidden
        />

        <ol className="relative flex flex-col gap-3.5">
          {PRESENTATION_SLIDES.map((slide, i) => {
            const isActive = i === active;
            return (
              <li key={slide.slug} className="relative flex justify-center">
                <a
                  href={`#${slide.slug}`}
                  title={slide.label}
                  aria-label={`Ir para: ${slide.label}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => onSlideClick(e, slide.slug)}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[color:var(--term-scroll-thumb-hi)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)]"
                >
                  <span
                    className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded border border-[color:color-mix(in_srgb,var(--term-scroll-thumb)_48%,transparent)] bg-[color-mix(in_srgb,var(--bg-elevated)_92%,#000)] px-2 py-1 font-display text-[9px] uppercase tracking-[0.14em] text-[color:var(--term-scroll-thumb-hi)] opacity-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 translate-x-1 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  >
                    {slide.label}
                    <span className="ml-1.5 text-[color:color-mix(in_srgb,var(--term-scroll-thumb)_72%,transparent)] tabular-nums">
                      {slide.step}
                    </span>
                  </span>

                  <span
                    className={
                      isActive
                        ? "relative z-[1] flex h-3 w-3 items-center justify-center rounded-full border border-[color:var(--term-scroll-thumb-hi)] bg-[color:var(--term-scroll-thumb)] shadow-[0_0_14px_var(--term-scroll-glow),0_0_4px_rgba(0,232,56,0.45)]"
                        : "relative z-[1] h-2.5 w-2.5 rounded-full border border-[color:color-mix(in_srgb,var(--term-scroll-thumb)_58%,transparent)] bg-[color:color-mix(in_srgb,var(--bg-primary)_40%,transparent)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow,transform] group-hover:border-[color:var(--term-scroll-thumb-hi)] group-hover:shadow-[0_0_10px_var(--term-scroll-glow)]"
                    }
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ol>

        <p
          className="relative mt-4 max-w-[4.5rem] text-center font-display text-[8px] uppercase leading-tight tracking-[0.12em] text-[color:color-mix(in_srgb,var(--term-scroll-thumb)_78%,transparent)] opacity-90"
          aria-hidden
        >
          Deck
        </p>
      </div>
    </nav>
  );
}
