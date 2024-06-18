function encontrarVocales(texto) {
    const vocales = "aeiouAEIOU";
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return `La primera vocal es "${texto[i]}" y es la letra Nº${i + 1}`;
   
        }
    }
    return ("no se encontro ninguna vocal!")

}

const textoIngresado = prompt("Introduce un texto:");
const resultado = encontrarVocales(textoIngresado);

document.write(resultado);
alert(resultado);