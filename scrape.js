import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrape() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://craftsman-bulgaria.preview.emergentagent.com/', { waitUntil: 'networkidle0' });
  
  // wait for iframe to load if it exists
  await new Promise(r => setTimeout(r, 5000));
  
  // try to get all iframes and their content
  let allHtml = '';
  for (const frame of page.frames()) {
    try {
      allHtml += `\n<!-- FRAME: ${frame.url()} -->\n`;
      allHtml += await frame.evaluate(() => document.documentElement.outerHTML);
    } catch (e) {
      console.log('Error reading frame', e);
    }
  }
  
  fs.writeFileSync('scraped.html', allHtml);
  await browser.close();
}

scrape().catch(console.error);
