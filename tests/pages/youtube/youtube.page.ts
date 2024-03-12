import { Page , Locator , expect } from "@playwright/test";
import { Helper } from "../../utility/helper";


export class youtube_homepage {
    readonly page : Page
    readonly searchBtn: Locator
    readonly searchField: Locator
    readonly firstfavSong: Locator

constructor(page : Page){
    this.page = page
    this.searchBtn = page.locator(`(//yt-icon[@class="style-scope ytd-searchbox"])[2]`)
    this.searchField = page.locator(`//input[@id="search"]`)
    this.firstfavSong = page.locator(`//yt-formatted-string[contains(@aria-label,"Interstellar - Main Theme - Hans Zimmer 1 Hour ")]`)



}
async verifyingtheSearchBtn(){
    await this.searchBtn.waitFor({state: 'visible'})
    await this.searchBtn.isVisible()
}
async playingFavouriteSong(){
    await this.searchField.waitFor({state: 'visible'})
    await Helper.delay(3000)
    await this.searchField.click()
    await this.searchField.fill("intersteller theme song")
    await this.searchBtn.click()
    await this.firstfavSong.waitFor({state: 'visible'})
    await this.firstfavSong.click()
    await Helper.delay(10000)
}

}