export type CursorMode = 'default' | 'interactive' | 'card' | 'text';

export interface CursorTargetLike {
  tagName?: string;
  getAttribute?: (name: string) => string | null;
  closest?: (selector: string) => CursorTargetLike | null;
}

const TEXT_INPUT_SELECTOR =
  'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]';

const CARD_SELECTOR = '[data-cursor="card"]';

const INTERACTIVE_SELECTOR =
  'a[href], button, [role="button"], [role="tab"], summary, label[for], [data-cursor="interactive"]';

/**
 * Resolves the active interactive cursor state from a hovered DOM target.
 * Priority:
 *  1. Text entry controls (`input`, `textarea`, `select`) -> `'text'` (recedes cleanly)
 *  2. Project/editorial cards (`[data-cursor="card"]`) -> `'card'` (expanded lens + label)
 *  3. Standard interactive controls (`a`, `button`, tabs) -> `'interactive'` (subtle Cobalt scale-up)
 *  4. Everything else -> `'default'`
 */
export function resolveCursorState(target: CursorTargetLike | null): CursorMode {
  if (!target || typeof target.closest !== 'function') {
    return 'default';
  }

  if (target.closest(TEXT_INPUT_SELECTOR)) {
    return 'text';
  }

  if (target.closest(CARD_SELECTOR)) {
    return 'card';
  }

  if (target.closest(INTERACTIVE_SELECTOR)) {
    return 'interactive';
  }

  return 'default';
}
