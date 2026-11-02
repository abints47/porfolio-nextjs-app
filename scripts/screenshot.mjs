/**
 * Generates the README screenshots.
 * Uses headless Edge + prefers-reduced-motion so all framer-motion
 * content renders statically (no half-faded captures).
 */
import puppeteer from "puppeteer-core";

const EDGE =
  process.env.EDGE_PATH ??
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE = "http://localhost:3000";
const OUT = "public/screenshots";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ["--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);

// ── Home: hero ────────────────────────────────────────────────
await page.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
await sleep(3000);
await page.screenshot({ path: `${OUT}/home-hero.png` });

// ── Home: sections (anchor scroll) ───────────────────────────
for (const id of ["about", "now", "experience", "projects", "terminal", "contact"]) {
  await page.$eval(`#${id}`, (el) => el.scrollIntoView({ block: "start" }));
  await sleep(900);
  await page.screenshot({ path: `${OUT}/home-${id}.png` });
}

// ── Home: full page ──────────────────────────────────────────
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(600);
await page.screenshot({ path: `${OUT}/home-full.png`, fullPage: true });

// ── Other pages: full height ─────────────────────────────────
for (const route of ["Projects", "about", "Contact"]) {
  await page.goto(`${BASE}/${route}`, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await sleep(2000);
  await page.screenshot({
    path: `${OUT}/${route.toLowerCase()}.png`,
    fullPage: true,
  });
}

await browser.close();
console.log("screenshots done");
