// Snapshot a sample of the newly generated detail pages + verify index links.
const { chromium } = require('playwright');
const path = require('path');

const BASE = 'file:///sessions/nifty-affectionate-albattani/mnt/outputs';
const OUT = '/sessions/nifty-affectionate-albattani/mnt/outputs/screenshots';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  // Snapshot 3 different pages to verify color variation propagated
  for (const slug of ['soca', 'alibaba-xiniu', 'honey-fragrance']) {
    await page.goto(`${BASE}/work/${slug}.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);
    const out = path.join(OUT, `desktop-${slug}-top.png`);
    await page.screenshot({ path: out, fullPage: false });
    console.log('saved', out);
  }

  // Snapshot index to confirm clickable cards still look right
  await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
  await page.waitForTimeout(400);
  const out = path.join(OUT, 'desktop-index-cards.png');
  await page.screenshot({ path: out, fullPage: false });
  console.log('saved', out);

  await ctx.close();
  await browser.close();
})();
