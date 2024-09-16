import puppeteer from 'puppeteer';
import { getProperty } from './scraper-utils.js';

export async function scrapeRecipe () {
    const browser = await puppeteer.launch({headless: 'shell'})
    const page = await browser.newPage()

    await page.goto('https://www.allrecipes.com/copycat-cracker-barrel-hash-brown-casserole-shepherds-pie-recipe-8706205') // Example site

    // Main code
    const title = await getProperty(page, 'h1.article-heading.type--lion', 'textContent')

    console.log(title)

    await browser.close()
}