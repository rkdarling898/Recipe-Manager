import puppeteer from "puppeteer"

export async function getProperty (page, selector, property) {
    try {
        const data = await page.evaluate((selector, property) => {
            return document.querySelector(selector)[property]
        }, selector, property)

        return data
    } catch (err) {
        console.error(`Could not access property "${selector}" of selector "${property}"; ${err}`)
        return null
    }
}

// Ingredient List Selector: 'div#mm-recipes-structured-ingredients_1-0'