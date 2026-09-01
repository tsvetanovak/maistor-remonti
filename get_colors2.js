import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
  });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://craftsman-bulgaria.preview.emergentagent.com/', { waitUntil: 'networkidle2', timeout: 60000 });
    
    // The content is in an iframe
    await page.waitForSelector('iframe#contentFrame');
    const iframeElement = await page.$('iframe#contentFrame');
    const frame = await iframeElement.contentFrame();
    
    // Wait for something inside the frame to load
    await frame.waitForSelector('#uslugi', { timeout: 10000 });
    
    const colors = await frame.evaluate(() => {
      const getBg = (selector) => {
        const el = document.querySelector(selector);
        return el ? window.getComputedStyle(el).backgroundColor : 'not found';
      };
      const getColor = (selector) => {
        const el = document.querySelector(selector);
        return el ? window.getComputedStyle(el).color : 'not found';
      };
      
      return {
        bodyBg: window.getComputedStyle(document.body).backgroundColor,
        uslugiBg: getBg('#uslugi'),
        zapitvaneBg: getBg('#zapitvane'),
        primaryText: getColor('.text-primary'),
        primaryBg: getBg('a[href="#zapitvane"]')
      };
    });
    
    console.log(JSON.stringify(colors, null, 2));
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
