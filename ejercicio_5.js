let dato, resultado;
// aquí lo que hacemos es declarar las variables, las cuales usaremos
val1 = window.prompt("Introduce tu Nombre", "...");
//pedimos a la persona que ingrese su nombre en una ventana emergente
val2 = window.prompt("Introduce tu Apellido", "...");
// ahora pedimos a la persona que ingrese su apellido en una ventana emergente
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//lo que se raliza es asignar a resultado la tarea de cargar el mensaje junto con lo ingresado por las personas
//en este caso el nombre y el apellido
document.write(resultado);
//utilizamos el document.write para que esto aparezca en la ventana principal, con el mensaje
//el cual llamamos a la variable resultado el cual escribe lo que se le ha cargado.