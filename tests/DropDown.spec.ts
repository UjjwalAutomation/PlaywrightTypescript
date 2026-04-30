import {test,expect} from "@playwright/test";

test('Select DropDown ',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("#country").selectOption("India"); By visible text
   await page.locator("#country").selectOption({value:'india'}); // By value
   await page.locator("#country").selectOption({value:'uk'}); // By value
   await page.locator("#country").selectOption({label:'India'}); // By label
   await page.locator("#country").selectOption({index:1}); // by using index


   // check the count of all options present in the dropdown

   const countryOption= page.locator("#country>option");
   await expect(countryOption).toHaveCount(10);

   // check an option present in the dropdown

   const optionText:string[] = (await countryOption.allTextContents()).map(text=>text.trim());
   console.log(optionText);

})