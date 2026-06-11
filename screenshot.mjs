// Full-page screenshot tool.
// Usage: node screenshot.mjs <url> [label]
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-increment, never overwrite)
import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const url = process.argv[2];
const label = process.argv[3];
if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const OUT_DIR = join(process.cwd(), 'temporary screenshots');
await mkdir(OUT_DIR, { recursive: true });

// Find next free N across existing screenshot-N*.png files
const existing = await readdir(OUT_DIR);
let n = 1;
for (const f of existing) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) n = Math.max(n, parseInt(m[1], 10) + 1);
}
const outPath = join(OUT_DIR, `screenshot-${n}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch();
const page = await browser.newPage();
const width = parseInt(process.env.SHOT_WIDTH || '1440', 10);
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
// SHOT_LANG env: preset the site's language toggle before load
if (process.env.SHOT_LANG) {
  await page.evaluateOnNewDocument((l) => {
    try { localStorage.setItem('cerovia-lang', l); } catch {}
  }, process.env.SHOT_LANG);
}
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

// Scroll through the page so IntersectionObserver-based reveals trigger, then return to top
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' }); // bypass CSS smooth-scroll
    await new Promise((r) => setTimeout(r, 100));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
});
await new Promise((r) => setTimeout(r, 1000)); // settle fonts/animations

// SHOT_SCROLLY env: scroll to a Y offset and capture the viewport only
const scrollY = process.env.SHOT_SCROLLY;
// SHOT_SELECTOR env: capture just one element instead of the full page
const selector = process.env.SHOT_SELECTOR;
if (scrollY) {
  await page.evaluate((y) => window.scrollTo({ top: parseInt(y, 10), behavior: 'instant' }), scrollY);
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: outPath });
} else if (selector) {
  const el = await page.$(selector);
  if (!el) { console.error(`Selector not found: ${selector}`); process.exit(1); }
  await el.scrollIntoView();
  await new Promise((r) => setTimeout(r, 400));
  await el.screenshot({ path: outPath });
} else {
  await page.screenshot({ path: outPath, fullPage: true });
}
await browser.close();
console.log(outPath);
