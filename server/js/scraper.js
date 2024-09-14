import puppeteer from 'puppeteer';
import { getProperty } from './scraper-utils.js';

export async function scrapeRecipe () {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.allrecipes.com/recipe/13309/rich-and-simple-french-onion-soup/') // Example site

    // Main code

    await browser.close()
}