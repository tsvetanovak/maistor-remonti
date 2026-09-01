import * as cheerio from 'cheerio';
import fs from 'fs';
const $ = cheerio.load(fs.readFileSync('scraped.html'));
const sections = [];
$('section').each((i, el) => {
    sections.push('SECTION ' + i + ' ID: ' + $(el).attr('id') + '\n' + $.html(el) + '\n\n----------------\n\n');
});
fs.writeFileSync('scratch_sections.txt', sections.join(''));
console.log('Extracted ' + sections.length + ' sections.');
