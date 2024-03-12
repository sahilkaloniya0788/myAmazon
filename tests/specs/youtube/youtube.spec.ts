import { Page, test } from "@playwright/test";
import { youtube_homepage } from "../../pages/youtube/youtube.page";


let page: Page
let youtube: youtube_homepage

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    youtube = new youtube_homepage(page)
    await page.goto('youtube.com/')
})

test.describe.parallel("Automate the UI of youtube homepage", async () => {
    test("TC_YT_001 >>> Verifying the youtube search button on homepage", async () => {
        await youtube.verifyingtheSearchBtn()
    })
    test("TC_YT_002 >>> play my favourite song on youtube by searching", async() => {
        await youtube.playingFavouriteSong()
    })
})



