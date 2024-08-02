const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title  = await page.title();
    console.log(title);
  } catch (error) {
    console.log(error);
  }
})();
