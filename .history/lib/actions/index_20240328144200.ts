"use server"
import { scrapedAmazonProducts } from '../scraper'

export async function scrapedAndStoreProduct(productUrl: string) {
    if(!productUrl) return;
    
    try {
        const scrapedProduct = await scrapedAmazonProduct(productUrl);
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}