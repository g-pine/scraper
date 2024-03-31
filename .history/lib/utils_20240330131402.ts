export function extractPrice(...elements: any) {
    for (const element of elements) { 
        const priceText = element.text().trim();

        // Si el texto del precio no está vacío y contiene números, lo devolvemos
        if (priceText && /\d/.test(priceText)) {
            return priceText.replace(/\D/g, ''); // Eliminamos los caracteres que no son dígitos
        }
    }

    return ''; // Si no se encuentra ningún precio válido, devolvemos una cadena vacía
}
