const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set the HTML content directly
  await page.goto('https://craftsman-bulgaria.preview.emergentagent.com/', { waitUntil: 'networkidle0' });

  // Wait for iframe and get its content
  const iframeElement = await page.$('iframe#contentFrame');
  const frame = await iframeElement.contentFrame();
  
  // Get computed styles
  const colors = await frame.evaluate(() => {
    // Helper to get color
    const getColor = (selector, property) => {
      const el = document.querySelector(selector);
      return el ? window.getComputedStyle(el)[property] : 'not found';
    };
    
    return {
      background: window.getComputedStyle(document.body).backgroundColor,
      card: getColor('#uslugi', 'backgroundColor'),
      primaryBg: getColor('a[href="#zapitvane"]', 'backgroundColor'),
      primaryText: getColor('.text-primary', 'color'),
      mutedForeground: getColor('.text-muted-foreground', 'color'),
      muted: getColor('button[data-testid="service-tab-shpaklovka"]', 'backgroundColor'),
      foreground: window.getComputedStyle(document.body).color,
      fontFamily: window.getComputedStyle(document.body).fontFamily
    };
  });
  
  console.log(JSON.stringify(colors, null, 2));
  await browser.close();
})();
