import axios from "axios";
import * as cheerio from 'cheerio';
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
    if (!url) return;

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false, // Corregir el nombre de la opción rejectUnauthorized
    }

    try {
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        const title = $('#productTitle').text().trim();
        const currentlyPrice = extractPrice(
            $('td .a-span12'),
            $('span.a-price.a-text-price.a-size-medium.apexPriceToPay'),
        );

        // Verificar si currentlyPrice contiene un precio válido
        if (currentlyPrice) {
            console.log({ title, currentlyPrice }); // Imprimir el título y el precio en la consola
        } else {
            console.log("No se encontró ningún precio válido para el producto."); // Imprimir mensaje si no se encuentra ningún precio válido
        }

    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}
