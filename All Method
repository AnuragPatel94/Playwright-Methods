//BASIC RQT FOR OPRTN.
  const{test,expect}=require('@playwright/test') or import{test,expect} from '@playwright'   // import basic library
  test('test',async{page})=>

//OPEN URL
  await page.goto("url")

//CAPTURE PAGE TITLE
  const pageTitle=page.Title()
  await expect(page).toHaveTitle(Title Name)
  console.log('Page Title:'+pageTitle)

//VERIFY URL
  await expect(page).toHaveURL('URL')

//VERIFY LOGO ON PAGE
  await page.goto('URL')
  const logo=await page.getByAltText('Attribute')
  await expect(logo).toBeVisible()

//CLICK ON BTN
  await page.click('xpath')

//FILL DETAIL EX.ID AND PASWD
  await page.fill('xpath','glbctm3655')
  await page.fill('xpath','Anurag@3655')

//VERIFY LOGOUT BTN VISIBLE
  const logoutBTN=await page.locator('xpath')
  await expect(logoutBTN).toBeVisible()

//LOCATE MULTIPLE LINK
  const links=await.page.$$('a')
  for(const link of links)
  {const LinkText=await link.textContent()
   console.log(LinkText)}

//LOCATE ALL PRODUCTS ON PAGE
   const product=await.page.$$('xpath')
  for(const product of products)
  {const ProductName=await product.textContent()
   console.log(ProductName)}

// HANDLE BROKEN LIST
   const { chromium } = require('playwright');
   (async () => {
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('http://www.deadlinkcity.com/');

// CHECK ELEMENT VISIBLE
   const LogoElement=await page.locator("header-logo");
   await expect(LogoElement).toBeVisible();

//CHECK ELEMENT ENABLE OR DISABLE
    const searchBox=await page.locator('xpath');
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeDisable();

//CHECK RB BTN IS MARKED OR NOT
    const 1RB=await page.locater(xpath);
    await 1RB.click();
    await expect(1RB).toBeChecked();

//CHECK PARTICULAR ATTRIBUTE
  const attriname=await page.locator(xpath);
  await expect(attriname).toHaveAttribute('type')

//ELEMENT MATCH TEXT
  const txtname=await page.locator(xpath);
  await expect(txtname).toHaveText();
  

//ELEMENT WITH CONTAIN TEXT
  const txtname=await page.locator(xpath);
  await expect(txtname).toContainText();

//LIST OF ELEMENT HAVE LENGTH
  const txtname=await page.locator(xpath);
  await expect(txtname).toHaveCount();

// HOW TO HANDEL INPUT BOX
   await expect (await page.locator("xpath")).toBeVisible()
   await expect (await page.locator("xpath")).toBeEmpty()
   await expect (await page.locator("xpath")).toBeEnable()
   await page.locator("xpath").fill("value")
   await page.waitForTimeOut(5000)

// HOW TO HANDLE RB & CHECK BOX
   await page.locator("xpath").check()
   await expect(await page.locator("xpath")).toBeChecked()

// HOW TO HANDLE MULTI CB (CHECK&UNCHECK)
   CREATE ARRY WITH ALL XPATH AND USING FOR LOOP
   const checkboxes=[xpath1,xpath2,xpath3]
   for (const locator of checkboxes){
        await page.locator(locator).check()
   if(await page .locator(locator).isChecked()){
      await page.locator(locator).uncheck()}

// HOW TO HANDLE DROP DOWN

   // Get all href attributes from anchor tags
   const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
   console.log(`Total links found: ${links.length}`);

     for (const url of links) {
        if (!url) {
        console.log('URL is empty or null');
        continue;
          }

       try {
         // Make a HEAD request to check link status
         const response = await page.request.head(url);
         if (response.status() >= 400) {
         console.log(`${url} is a broken link. Status code: ${response.status()}`);
      }  else {
        console.log(`${url} is a valid link. Status code: ${response.status()}`);
      }
    }   catch (error) {
        console.log(`Exception checking URL: ${url} -> ${error.message}`);
    }
  }

  await browser.close();
})();

  
