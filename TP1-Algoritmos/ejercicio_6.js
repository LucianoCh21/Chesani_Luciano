let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let mes = parseInt(prompt("Ingrese un numero del 1 al 12 para saber el mes: "))
if (mes >= 1 && mes <= 12) {
    alert(meses[mes - 1]);
}