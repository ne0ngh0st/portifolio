"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { navigateToSectionId } from "@/lib/scrollSection";

const links = [
  { href: "#top", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#autopel", label: "Autopel" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#linux", label: "Linux" },
  { href: "#stack", label: "Stack" },
  { href: "#linkedin", label: "LinkedIn" },
] as const;

export function Nav() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  function onNavLinkClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#") || href === "#") return;
    const id = href.slice(1);
    if (!document.getElementById(id)) return;
    e.preventDefault();
    navigateToSectionId(id, reduceMotion === true ? "auto" : "smooth");
  }

  useEffect(() => {
    // O sentinel fica logo abaixo do hero (posição 0 no topo da página).
    // Quando ele sair da viewport (scroll passou do hero), a nav aparece.
    const el = sentinelRef.current;
    if (!el) return;

    const deck = document.querySelector<HTMLElement>("main.home-deck");
    const root = deck?.contains(el) ? deck : null;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px", root }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel invisível posicionado no topo — sai da viewport quando rola */}
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-[92dvh] w-px shrink-0 opacity-0"
      />

      <header
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div className="relative overflow-hidden border-b border-[color:color-mix(in_srgb,var(--phosphor-amber)_18%,transparent)] bg-[color-mix(in_srgb,var(--bg-primary)_52%,transparent)] shadow-[inset_0_1px_0_rgba(255,200,130,0.07),0_1px_0_rgba(0,0,0,0.4)] backdrop-blur-md backdrop-saturate-[0.88]">
          <div className="crt-nav-scanlines pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,175,100,0.05)_0%,transparent_42%,rgba(0,0,0,0.12)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,200,120,0.25)_20%,rgba(255,200,120,0.35)_50%,rgba(255,200,120,0.25)_80%,transparent)]"
            aria-hidden
          />

          <nav
            className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-0 gap-y-1 px-4 py-2.5 md:px-12 lg:px-24"
            aria-label="Seções do portfólio"
          >
            {links.map((l, i) => (
              <span key={l.href} className="flex items-center">
                {i > 0 ? (
                  <span
                    className="mx-0.5 hidden h-3 w-px shrink-0 bg-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_55%,transparent)] sm:mx-1 sm:inline-block"
                    aria-hidden
                  />
                ) : null}
                <a
                  href={l.href}
                  onClick={(e) => onNavLinkClick(e, l.href)}
                  className="crt-nav-link whitespace-nowrap px-2 py-1.5 font-display text-[11px] uppercase tracking-[0.12em] sm:px-2.5 sm:text-xs sm:tracking-[0.14em]"
                >
                  {l.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
