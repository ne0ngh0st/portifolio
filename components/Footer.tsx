export function Footer() {
  return (
    <footer
      id="rodape"
      className="deck-slide deck-slide--compact section-bg-footer justify-center border-t border-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_40%,transparent)] px-4 py-4 text-center text-xs text-text-muted sm:py-5 sm:text-sm"
    >
      <p className="font-display text-[color:var(--phosphor-amber-mid)]">
        ne0ngh0st · São Paulo, SP · 2026
      </p>
      <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-x-4">
        <a
          href="https://github.com/ne0ngh0st"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[color:var(--phosphor-amber)] hover:[text-shadow:0_0_12px_var(--phosphor-glow-soft)]"
          aria-label="GitHub ne0ngh0st"
        >
          github.com/ne0ngh0st
        </a>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/antonioautopel/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[color:var(--phosphor-amber)] hover:[text-shadow:0_0_12px_var(--phosphor-glow-soft)]"
          aria-label="LinkedIn Antonio"
        >
          linkedin.com/in/antonioautopel
        </a>
      </p>
    </footer>
  );
}
