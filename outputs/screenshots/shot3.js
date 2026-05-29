const { chromium } = require('playwright');
const path = require('path');
const FILE = 'file:///sessions/nifty-affectionate-albattani/mnt/outputs/work/groop.html';
const OUT = '/sessions/nifty-affectionate-albattani/mnt/outputs/screenshots';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(FILE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  await page.screenshot({ path: path.join(OUT, 'groop-1-top.png') });
  await page.evaluate(() => document.getElementById('process').scrollIntoView({ behavior: 'instant', block: 'start' }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'groop-2-process.png') });
  await page.evaluate(() => document.getElementById('final').scrollIntoView({ behavior: 'instant', block: 'start' }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'groop-3-final.png') });

  await browser.close();
  console.log('done');
})();
