const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../page-objects/playwright-dev-page');
const data = require('../test-data/testdata.json');


test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  console.log(await playwrightDev.tocList.allTextContents());

  await expect(playwrightDev.tocList).toHaveText(
    // data.HowToInstall, data.WhatisInstalled, data.HowToRunExample, data.HowToOpenReport,
    // data.AssertionFixturesLocators, data.RunSingleTest, data.TestwithCodegen, data.TraceYourTests //Was playing around with data
    data.testData 
  );
});
