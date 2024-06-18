let notas = [];
let suma = 0;
let i = 0 + 1;
while (i < 6){
    notas[i] = parseInt(prompt("Ingrese la nota N° " + i));
    suma += notas[i]
    i++
}
document.write("la suma de las notas es: ", suma, "</br>");
let promedio = (suma / 5);
document.write("Tu promedio es de: ", promedio, "</br>");

if (promedio <= 5) {
    document.write ("Reproado!");
}else if (promedio > 5 && promedio <= 8) {
    document.write ("Aprobado!");
}else{
    document.write ("Sobresaliente!")
}
