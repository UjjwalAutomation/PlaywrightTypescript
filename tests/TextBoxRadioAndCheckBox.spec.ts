import {test,expect, Locator} from "@playwright/test";

test("Text Box, Radio Button and Check Box Practice",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const enterNameTextBox= await page.locator("#name");

    await expect(enterNameTextBox).toBeEnabled();
    await expect(enterNameTextBox).toBeVisible();

    await enterNameTextBox.fill("Ujjwal");

    // CheckBox
    // check single checkbox
    const sundayCheckBox= page.locator("#sunday");
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();

    // check all the checkboxes and asset each is check or not
    const days:string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

   let checkBoxes:Locator[]= days.map(index=> page.getByLabel(index));
    expect(checkBoxes.length).toBe(7);


    // select all the checkboxes

    /*for(const checkBx of checkBoxes){
      await checkBx.check();
    }*/
    
    // select last 3 checkboxes

    for(const checkbx of checkBoxes.slice(-3)){
        await checkbx.check();
        await expect(checkbx).toBeChecked();
    }


    
})

