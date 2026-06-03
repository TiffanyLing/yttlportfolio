// Screenshot the Moodio case study at desktop & mobile widths.
const { chromium } = require('playwright');
const path = require('path');

const FILE_URL = 'file:///sessions/nifty-affectionate-albattani/mnt/outputs/work/moodio.html';
const OUT_DIR = '/sessions/nifty-affectionate-albattani/mnt/outputs/screenshots';

async function shot(page, name, scrollY) {
  if (scrollY !== undefined) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
    await page.waitForTimeout(450);
  }
  const out = path.join(OUT_DIR, name);
  await page.screenshot({ path: out, fullPage: false });
  console.log('saved', out);
}

(async () => {
  const browser = await chromium.launch();

  // --- Desktop 1440 × 900 ---
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const dpage = await desktop.newPage();
  await dpage.goto(FILE_URL, { waitUntil: 'networkidle' });
  await dpage.waitForTimeout(800);

  await shot(dpage, 'desktop-1-top.png', 0);
  // Mid: scroll into the Process section
  await dpage.evaluate(() => document.getElementById('process').scrollIntoView({ behavior: 'instant', block: 'start' }));
  await dpage.waitForTimeout(700);
  await shot(dpage, 'desktop-2-mid.png');
  // Bottom: scroll to end
  await dpage.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await dpage.waitForTimeout(700);
  await shot(dpage, 'desktop-3-bottom.png');

  await desktop.close();

  // --- Mobile 390 × 844 (iPhone 14 Pro style) ---
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const mpage = await mobile.newPage();
  await mpage.goto(FILE_URL, { waitUntil: 'networkidle' });
  await mpage.waitForTimeout(800);

  await shot(mpage, 'mobile-1-top.png', 0);
  await mpage.evaluate(() => document.getElementById('process').scrollIntoView({ behavior: 'instant', block: 'start' }));
  await mpage.waitForTimeout(700);
  await shot(mpage, 'mobile-2-mid.png');

  await mobile.close();
  await browser.close();
})();
