/** Rola até o elemento com `id` (sem `#`). Atualiza a URL sem nova entrada no histórico. */
export function navigateToSectionId(
  id: string,
  behavior: ScrollBehavior
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const deck = document.querySelector<HTMLElement>("main.home-deck");
  if (deck?.contains(el)) {
    const deckRect = deck.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const padTop = parseFloat(getComputedStyle(deck).scrollPaddingTop) || 0;
    const nextTop = deck.scrollTop + (elRect.top - deckRect.top) - padTop;
    deck.scrollTo({ top: Math.max(0, nextTop), behavior });
  } else {
    el.scrollIntoView({ behavior, block: "start" });
  }

  try {
    history.replaceState(null, "", `#${id}`);
  } catch {
    /* ignore */
  }
  return true;
}
