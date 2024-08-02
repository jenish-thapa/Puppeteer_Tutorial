// Simple code to navigate to google.com and save a screenshot

const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({ path: "google.png" });
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
