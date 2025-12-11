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
     //LOCATE ELEMENT
       await page.select option("xpath",'txt')
     //ADD ASSERTION
       const options=await page.Locator('xpath')
     //CHECK PRESENCE OF VALUE IN THE DROPDOWN
       await page.locator('txt').textContent()
       await expect(content.includes(txt)).toBeTruthy()
     //CHECK PRESENCE WITH FOR LOOP METHOD
       const options=awit page.$$('css')
         let status=false
       for (const option of options){
               consol.log(await option.textContent())}


// HOw TO HANDLE MULTIPLE DROPDOWN
     //SELECT OPTION
       await page.selectOption('xpath'.['value'])
     //CHECK NUMBER OF OPTION
       const options=await page.locator('options xpath')
       await expect(options).toHaveCount(5)
     //CHECK PRESENCE OF OPTION
       const content=await page.locator('css').textContent()
       await expect(content.includes('value')).toBeTruthy()

  //HOW TO HANDLE BOOTSTRAP DROPDOWN
     //CLICK ON THE DROPDOWN
       await page.locator('css').click()
     //TOTAL COUNT
       const options=await page.locator('css')
       await expect(options).toHaveCount(10)
     //SELECT MORE OPTION
       const options=await page.$$('css')
         for (let option of options){
            const value=await option.textContent()
            console.log("Value is",value)
          if(Value.includes("V1")||value.includes("V2"){
              await option.click}}

  //HOW TO HANDLE AUTO SUGGEST DROP DOWN
     //LOCATE ELEMENT 
       await page.locator('css').fill('value')
       await page.waitForSelector("css")
       const list=await page.$$("css")
         for (let option of list){
            const value=await option.textContent()
            console.log(value)
           if(value.includes('v1')){
             await option.click()}

    //HOW TO HANDLE ALERT DILOGE
       //CREAT DILOGE WINDOW HANDLER
           page.on('dilog',async dilog=>{
             expect(dilog.type()).toContain('alert')
             await dialog.accept()

    //HANDLE FRAME/iFRAME
        //TOTAL FRAME
             const allFrame=await page.frames()
             console.log("Number of Frame:",allFrame.length)
        //LOCATE FRAME BY OBJECT
             const frame=await page.frame({url:"URL"})
        //HANDLE NASTED iFRAME
             const frame2=await page.frame({"url":,"URL"})
             await frame2.fill("Locator","Value"})
             const childFrames=await frame2.childFrames()
             await childFrames[0].locator("css").check()

  //HOW TO HANDLE TABLE AND PAGINATION

        //LOCATE TABLE
           const table=await page.locator("xpath")
           const columns=await table.locator('thead tr th')
                console.log('Number of Col:',await columns.count())
           const row=await table.Locator('tbody tr')
                console.log'Number of Row:',await row.count())
        //HOW TO SELECT SPECIFIC ROWS CHECK BOX
           const machedRow=rows.filter({
                  has:page.locator('td')
                  has Text:'product'})
           await mached Raw.Locator('input').check()

     

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

  
