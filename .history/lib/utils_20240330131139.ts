export function extractPrice(...elements: any){
    for (const element of elements) { 
        const priceText = element.text().trim();

        if(priceText) return priceText.replace(/\D/g, '');
        if(priceText < 1) return 1;
    }

    return '';
}