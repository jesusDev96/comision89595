// const celular1 = {
//     modelo: "s26",
//     marca: "samsung",
//     precio: 1000,
// }

// const celular2 = {
//     modelo: "iphone 17",
//     marca: "apple",
//     precio: 1200,
// }

// function Celular(modelo, marca, precio) {
//     this.modelo = modelo,
//     this.marca = marca,
//     this.precio = precio
// } 

const telefonos = []
const precioDolar = 1400
class Celular {
    static id = 0
    constructor (modelo, marca, precio) {
        this.id = ++Celular.id,
        this.modelo = modelo,
        this.marca = marca,
        this.precio = precio
    }

    enPesos = () => {
        this.precio = this.precio*precioDolar
        console.log("Precio en pesos: $"+this.precio)
    }
}

const celular1 = new Celular("s26", "samsung", 1000)
const celular2  = new Celular("iphone 17", "apple", 1200)
const celular3 = new Celular("redmi note 14", "xiaomi", 600)
// console.log(celular1, celular2, celular3)

// celular1.enPesos()
// celular2.enPesos()

const cargaTelefonos = () => { 
    let cargaModelo = prompt("Ingrese el modelo del telefono")
    let cargaMarca = prompt("Ingrese la marca del telefono")
    let cargaPrecio = parseInt(prompt("Ingrese el precio en dolares"))

    const celular = new Celular(cargaModelo, cargaMarca, cargaPrecio)
    telefonos.push(celular)
}

const verTelefonos = () => {
    if(telefonos.length == 0) {
        alert("No hay telefonos cargados")
    } else {
        console.log(telefonos)
    }
}

let menu = parseInt(prompt("Ingrese 1 para ver los telefonos, 2 para cargar un telefono, 3 para salir"))

while(menu !== 3) {
    switch(menu) {
        case 1:
            verTelefonos()
            break
        case 2: 
            cargaTelefonos()
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt("Ingrese 1 para ver los telefonos, 2 para cargar un telefono, 3 para salir"))
}