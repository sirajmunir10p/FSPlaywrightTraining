const {test, expect} = require('@playwright/test');

test('Assignment 1 Test', async ({page}) => {
    const KEYWORDS = ["Playwright", "Installation | Playwright", "Google"];
    const searchBox = '[name="q"]'

    console.log(KEYWORDS[0]); //For testing purpose
    console.log(KEYWORDS[1]); //For testing purpose

    await page.goto('https://google.com');
    await expect(page).toHaveTitle(KEYWORDS[2]); //Just for fun! 
   // await page.pause();
    
    await page.fill(searchBox, KEYWORDS[0]);
    await page.press(searchBox, 'Enter');

    const searchedValue = await page.$eval(searchBox, el => el.value); //is it a right approach to use in Playwright? I've used that in Puppeteer, not sure about this but it is working. https://pptr.dev/api/puppeteer.page._eval 
    expect(searchedValue).toBe(KEYWORDS[0]);

    const firstSearchedResult = 'xpath =//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/a' //I can also fetch all search results using $$
    await page.locator(firstSearchedResult).click();
    
   // const searchedPageTitle = await page.title(); //Title: "Fast and reliable end-to-end testing for modern web apps | Playwright"
    await expect(page.title).toContainText(KEYWORDS[1]);
 //   expect(searchedPageTitle).toBe(KEYWORDS[1]); //This assertion will fail. 

});
