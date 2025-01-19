import { Given,When,Then } from "@wdio/cucumber-framework";
import * as chai from "chai";


Given(/^Google page is opened$/, async function() {
   await browser.url("https://www.google.com");
    await browser.pause(7000);
    });

    When(/^Search with (.*)$/, async function(searchItem) {
        let ele = await $('[name=q]');
        await ele.setValue(searchItem);
        await browser.keys('Enter');
        await browser.pause(9000);
         });

         Then(/^Click on the first search$/, async function() {
            let ele = await $('<h3>');
            ele.click();
            await browser.pause(5000);
             }
            );

            Then(/^URL should match (.*)$/, async function(website) {
                let url = await browser.getUrl();
                await console.log("open url is = "+url);
                chai.expect(url).to.include(website);
                await browser.pause(5000);
                 }
                );
