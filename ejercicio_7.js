var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var elementosTexto = valores.filter(function(elemento) {
    return typeof elemento == "string";
});
var elementoMasLargo = elementosTexto.reduce(function (anterior, actual){
    return anterior.length > actual.length ? anterior : actual;
});
document.write ("El elemento del texto mas largo es:", elementoMasLargo, '<br>');
var ordenarElementos = elementosTexto.sort(function (a,b){
    return a.length - b.length;
});
document.write("Los elementos del texto ordenados de menor a meyor son: ",  '<br>');

    ordenarElementos.forEach(function(elemento){
        document.write (elemento,  '<br>');
    });

var elementoNumeros = valores.filter(function (elemento){
    return typeof elemento == "number";
});
var suma = elementoNumeros[0] + elementoNumeros[1];
var resta = elementoNumeros [0] - elementoNumeros [1];
var multiplicacion = elementoNumeros [0] * elementoNumeros[1];
var division = elementoNumeros [0] / elementoNumeros [1];

document.write ("el resultado de la suma es: ", suma, '<br>');
document.write ("el resultado de la resta es: ", resta, '<br>');
document.write ("el resultado de la multipicación es: ", multiplicacion, '<br>');
document.write ("el resultado de la división es: ", division, '<br>');

