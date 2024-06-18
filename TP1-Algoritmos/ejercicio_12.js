class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año); // Llamar al constructor de la clase base
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}

let vehiculo1 = new Vehiculo("Nissan", "Skyline", 1999);
console.log(vehiculo1.obtenerInformacion());

// Crear instancias de la clase Automovil
let automovil1 = new Automovil("Toyota", "Supra", 2002, "Naranja", 100000);
console.log(automovil1.obtenerInformacion());