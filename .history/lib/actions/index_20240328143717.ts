"use server"

export async function scrapedAndStoreProduct(productUrl: string) {
    if(!productUrl) return;
    
    try {
        
    } catch (error) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}