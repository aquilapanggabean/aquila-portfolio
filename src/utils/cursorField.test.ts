import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeDotDisplacement,
  createDotMatrix,
  stepRipples,
  type RipplePulse,
} from './cursorField';

test('createDotMatrix generates deterministic bounded dots for valid dimensions', () => {
  const dotsA = createDotMatrix(1440, 820, 24);
  const dotsB = createDotMatrix(1440, 820, 24);

  assert.ok(dotsA.length > 200, 'Should populate a rich dot matrix on desktop');
  assert.equal(dotsA.length, dotsB.length, 'Generation should be deterministic');
  assert.equal(createDotMatrix(0, 800, 24).length, 0);
});

test('computeDotDisplacement pushes inner dots outward onto the circular ring void', () => {
  const cursorX = 720;
  const cursorY = 410;
  const ringRadius = 110;

  const innerDot = { baseX: 740, baseY: 410, baseAlpha: 0.3 };
  const displaced = computeDotDisplacement(innerDot, cursorX, cursorY, ringRadius);

  const displacedDist = Math.hypot(displaced.x - cursorX, displaced.y - cursorY);
  assert.ok(
    displacedDist >= ringRadius,
    `Expected inner dot to displace at least ${ringRadius}px from cursor, got ${displacedDist}`
  );
  assert.equal(displaced.inRingHalo, true);
  assert.ok(displaced.alpha > innerDot.baseAlpha);
});

test('computeDotDisplacement leaves distant dots undisturbed when no ripples exist', () => {
  const farDot = { baseX: 100, baseY: 100, baseAlpha: 0.25 };
  const result = computeDotDisplacement(farDot, 720, 410, 110);

  assert.equal(result.x, farDot.baseX);
  assert.equal(result.y, farDot.baseY);
  assert.equal(result.alpha, farDot.baseAlpha);
  assert.equal(result.inRingHalo, false);
});

test('stepRipples advances radius and prunes expired waves cleanly', () => {
  const initial: RipplePulse[] = [
    { x: 500, y: 300, radius: 10, maxRadius: 200, strength: 1 },
    { x: 500, y: 300, radius: 196, maxRadius: 200, strength: 0.1 },
  ];

  const next = stepRipples(initial, 10);
  assert.equal(next.length, 1);
  assert.equal(next[0].radius, 20);
  assert.ok(next[0].strength > 0 && next[0].strength < 1);
});
