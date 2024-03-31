"use server"
import { scrapeAmazonProducts } from '../scraper'

export async function scrapedAndStoreProduct(productUrl: string) {
    if(!productUrl) return;
    
    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl);
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}