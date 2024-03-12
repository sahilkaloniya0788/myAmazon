import {Page , expect} from '@playwright/test'

export class Helper {
    static async delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}