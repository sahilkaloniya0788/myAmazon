import { Page , Locator , expect } from "@playwright/test";
import { Helper } from "../../utility/helper";

export class Homepage{
    readonly page: Page
    readonly logo: Locator
    readonly update_location_btn: Locator
    readonly update_location_Field: Locator
    readonly applyBtn: Locator
    readonly categoryDropdown: Locator
    readonly searchBar: Locator
    readonly searchBtn: Locator
    readonly saerchedresultMsg: Locator
    
    
    
    
    
    constructor(page: Page){
        this.page = page
        this.logo = page.locator(`//A[@id="nav-logo-sprites"]`)
        this.update_location_btn = page.locator(`//span[@id="glow-ingress-line2"]`)
        this.update_location_Field = page.locator(`//input[@id="GLUXZipUpdateInput"]`)
        this.applyBtn = page.locator(`//input[@aria-labelledby="GLUXZipUpdate-announce"]`)
        this.categoryDropdown = page.locator(`//select[@id="searchDropdownBox"]`)
        this.searchBar = page.locator(`//input[@id="twotabsearchtextbox"]`)
        this.searchBtn = page.locator(`//input[@id="nav-search-submit-button"]`)
        this.saerchedresultMsg = page.locator(`//span[contains(text(),'1-16 of over 4,000 results for')]`)

    }
    async verifyingtheLogoOfHomepage(){
        await this.logo.waitFor({state: 'visible'})
        await this.logo.isVisible()
    }
    async verifyingUpdateLocationBtn(){
        await this.update_location_btn.waitFor({state: 'visible'})
        await this.update_location_btn.isVisible()
        await this.update_location_btn.click()
    }
    async updatingtheLocation(){
        await this.update_location_btn.waitFor({state: 'visible'})
        await this.update_location_btn.isVisible()
        await this.update_location_btn.click()
        await this.update_location_Field.waitFor({state: 'visible'})
        await this.update_location_Field.click()
        await this.update_location_Field.fill("131001")
        await this.applyBtn.waitFor({state: 'visible'})
        await this.applyBtn.click()
    }
    async changingTheDesiredCategoryforProductSearch(){
        await this.categoryDropdown.waitFor({state: 'visible'})
        await this.categoryDropdown.click()
        await this.categoryDropdown.selectOption("Books")
        await this.categoryDropdown.hover()
    }
    async searchingAnyProductUsingSearchbar(){
        await this.searchBar.waitFor({state: 'visible'})
        await this.searchBar.click()
        await this.searchBar.fill("mobile")
        await this.searchBtn.click()
        await this.saerchedresultMsg.waitFor({state: 'visible'})
        await this.saerchedresultMsg.isVisible()
    }




}