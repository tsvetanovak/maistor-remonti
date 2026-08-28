import * as cheerio from 'cheerio';
import fs from 'fs';

const html = fs.readFileSync('scraped.html', 'utf-8');
const $ = cheerio.load(html);

// Since the HTML has multiple iframes, let's find the content of the frame we want
// Actually the script dumped all frames sequentially. Let's just grab the whole text
// or find all semantic tags in the whole file
const output = [];

$('*').each((i, el) => {
    if (['h1','h2','h3','h4','p','button','a'].includes(el.tagName.toLowerCase())) {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        const classes = $(el).attr('class') || '';
        if (text && text.length > 0) {
            output.push(`${el.tagName.toUpperCase()}: "${text}" (classes: ${classes})`);
        }
    }
});

fs.writeFileSync('parsed.txt', output.join('\n'));
console.log('Parsed successfully to parsed.txt');
