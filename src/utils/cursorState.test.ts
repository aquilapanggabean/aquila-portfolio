import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveCursorState, type CursorTargetLike } from './cursorState';

function mockTarget(matchedSelectors: readonly string[]): CursorTargetLike {
  return {
    closest(selector: string) {
      const clauses = selector.split(',').map((part) => part.trim());
      return matchedSelectors.some((item) => clauses.includes(item)) ? this : null;
    },
  };
}

test('resolveCursorState returns default for null or plain static elements', () => {
  assert.equal(resolveCursorState(null), 'default');
  assert.equal(resolveCursorState(mockTarget([])), 'default');
});

test('resolveCursorState prioritizes text inputs so cursor stays unobtrusive while typing', () => {
  assert.equal(resolveCursorState(mockTarget(['textarea'])), 'text');
  assert.equal(resolveCursorState(mockTarget(['textarea', 'button'])), 'text');
});

test('resolveCursorState detects project cards before generic buttons', () => {
  assert.equal(
    resolveCursorState(mockTarget(['[data-cursor="card"]', 'button'])),
    'card'
  );
});

test('resolveCursorState detects links, buttons, and tabs as interactive', () => {
  assert.equal(resolveCursorState(mockTarget(['a[href]'])), 'interactive');
  assert.equal(resolveCursorState(mockTarget(['button'])), 'interactive');
  assert.equal(resolveCursorState(mockTarget(['[role="tab"]'])), 'interactive');
});
