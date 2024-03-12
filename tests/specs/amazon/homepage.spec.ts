import {test , Page} from "@playwright/test"
import { Homepage } from "../../pages/amazon/homepage.page"
import { Helper } from "../../utility/helper"

let page : Page
let homepage : Homepage

test.beforeAll(async({browser}) => {
    page = await browser.newPage()
    homepage = new Homepage(page)
    await page.goto("/")
})

test.describe.parallel("Automate the homepage the amazon.", async() => {
    test("TC_AMZN_001 >>> VERIFY THE AMAZON HOMEPAGE LOGO", async() => {
        await homepage.verifyingtheLogoOfHomepage()
    })
    test("TC_AMZN_002 >>> VERIFYING THE UPDATE LOCATION BUTTON", async() => {
        await homepage.verifyingUpdateLocationBtn()
    })
    test("TC_AMZN_003 >>> UPDATING THE LOCATION ON HOMEPAGE", async() => {
        await homepage.updatingtheLocation()
    })
    test("TC_AMZN_004 >>> CHANGING THE CATEGORIES FROM THE ALL CATEGORY DROPDOWN", async () => {
        await homepage.changingTheDesiredCategoryforProductSearch()
    })
    test("TC_AMZN_005 >>> SEARCHING ANY PRODUCT USING SEARCH BAR", async() => {
        await homepage.searchingAnyProductUsingSearchbar()
    })
})