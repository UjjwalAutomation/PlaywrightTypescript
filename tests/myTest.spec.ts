import {test,expect} from "@playwright/test";


test("Verify Title",async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");

    let title=await page.title();
    console.log("Title: ",title);
    await expect(page).toHaveTitle("demosite");
})