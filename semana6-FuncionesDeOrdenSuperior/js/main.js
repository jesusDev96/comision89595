// Funcion que retorna otra funcion

// function multiplicar(numeroA) {
//     return(numeroB) => numeroA*numeroB
// }

// const resultado = multiplicar(10)
// console.log(resultado(5))

// let operacion = prompt("Ingrese si desea multiplicar o dividir")
// let numeroA = parseInt(prompt("Ingrese el primer numero"))
// let numeroB = parseInt(prompt("Ingrese el segundo numero"))


// function elegirOperacion (operacion) {
//     if(operacion == "multiplicar") {
//         return(a,b) => a*b
//     } else if(operacion = "dividir") {
//         return(a,b) => a/b
//     }
// }

// const opercionElegida= elegirOperacion(operacion)
// console.log(opercionElegida(numeroA,numeroB))



// Funcion que recibe otra funcion por parametro

// const numeros = [ 1, 2, 3, 4, 5]

// function iterador(datos, accion) {
//     for(const dato of datos) {
//         accion(dato)
//     }
// }

// iterador(numeros, console.log)

// function multiplicar (numeroA) {
//     let resultado = numeroA*10
//     console.log(resultado)
// }

// iterador(numeros, multiplicar)

// const tablaDel10 = []
// iterador(numeros, numero => tablaDel10.push(numero*10))
// console.log(tablaDel10)

const productos= [
    {
        id: 1, 
        nombre: "televisor", 
        precio: 5000
    },
    {
        id: 2, 
        nombre: "lavarropas", 
        precio: 8000
    },
    {
        id: 3, 
        nombre: "microondas", 
        precio: 2000
    },
    {
        id: 4, 
        nombre: "secadora", 
        precio: 4000
    },
    {
        id: 5, 
        nombre: "cocina", 
        precio: 13000
    },
]

// forEach()
// productos.forEach(producto => {
//     // console.log(producto)
//     console.log("Producto: " + producto.nombre + " Precio: $" + producto.precio)
// })

// find()
// const busqueda = productos.find(producto => producto.nombre == "cocina")
// console.log(busqueda)

// filter()
// let precioMaximo = parseInt(prompt("Ingrese el presupuesto maximo para la compra"))
// const filtrados = productos.filter(producto => producto.precio <= precioMaximo)
// console.log(filtrados)

// const css = productos.filter(producto => producto.nombre.includes("CSS"))
// console.log(css)

// some()
// console.log(productos.some(producto => producto.nombre == "cocina"))

// let buscar = prompt("Ingrese el producto a ver si lo tenemos en stock")
// let hayStock = productos.some(producto => producto.nombre == buscar)
// if(hayStock) {
//     console.log("Lo tenemos en stock")
// } else {
//     console.log("Momentaneamente no esta disponible")
// }

// map()
// const productosDisponibles = productos.map(producto => producto.nombre)
// console.log(productosDisponibles)

// const descuento = productos.map(producto => {
//     let precioDescuento = producto.precio - (producto.precio*20/100)

//     return{
//         id: producto.id,
//         nombre: producto.nombre,
//         precio: precioDescuento
//     }
// })

// console.log(descuento)

// reduce()

// const total = productos.reduce((contador, producto) => contador + producto.precio, 0)
// console.log(total)