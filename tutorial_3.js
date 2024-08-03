const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1024 });

  // Navigate to the page
  await page.goto(
    "https://www.coursera.org/degrees/bachelor-of-science-computer-science-bits?authMode=login"
  );

  await page.waitForSelector('input[data-e2e="login-email-input"]');

  // Type the email into the input field
  await page.type(
    'input[data-e2e="login-email-input"]',
    "2023ebcs641@online.bits-pilani.ac.in"
  );

  await page.waitForSelector('input[data-e2e="login-password-input"]');

  // Type the email into the input field
  await page.type('input[data-e2e="login-password-input"]', "Ep$18112005");

  await page.keyboard.press("Enter");

  //   await page.waitForTimeout(60000);

  // Close the browser
  // await browser.close();
})();
