import axios from "axios";
import * as cheerio from 'cheerio';
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnautorized: false,
    }

    try {
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        const title = $('#productTitle').text().trim();
        const currentlyPrice = extractPrice(
            $('span.a-price.a-text-price.a-size-medium.apexPriceToPay'),
            $('span .a-offscreen')

        ) 

        console.log({title, currentlyPrice});

    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}