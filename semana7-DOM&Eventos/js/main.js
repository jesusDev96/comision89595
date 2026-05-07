// const productos= [
//     {
//         id: 1, 
//         nombre: "televisor", 
//         precio: 5000
//     },
//     {
//         id: 2, 
//         nombre: "lavarropas", 
//         precio: 8000
//     },
//     {
//         id: 3, 
//         nombre: "microondas", 
//         precio: 2000
//     },
//     {
//         id: 4, 
//         nombre: "secadora", 
//         precio: 4000
//     },
//     {
//         id: 5, 
//         nombre: "cocina", 
//         precio: 13000
//     },
// ]


// getElementById -- querySelector
// let titulo = document.getElementById("title")
// console.log(titulo)
// let titleContainer = document.getElementById("title-container")
// console.log(titleContainer)


// getElementsByClassName -- querySelectorAll
// let pastas = document.getElementsByClassName("pasta")
// console.log(pastas[1])

// innerText
// titulo.innerText = "Hola coder!!"

// innerHTML
// let contenedor = document.getElementById("container")
// contenedor.innerHTML = "<h2>Hola comision <span>89595</span></h2>"

// createElement
// let subtitulo = document.createElement("h2")
// subtitulo.innerHTML = "<span>Aguante la pizza!!</span>"
// document.body.append(subtitulo)

// remove
// titulo.remove()
// pastas[1].remove()


// let zapatillas = ["nike", "adidas", "vans", "puma", "DC", "salomon"]
// let marcas = document.getElementById("marcas")
// for(const zapatilla of zapatillas) {
//     let li = document.createElement("li")
//     li.innerHTML = zapatilla
//     marcas.appendChild(li)
// }


// let products = document.getElementById("productos")
// productos.forEach(producto => {
//     let card = document.createElement("div")
//     card.innerHTML = `<span class="card-id">ID: ${producto.id}</span>
//                       <h3>Producto: ${producto.nombre}</h3>
//                       <p>Precio: $${producto.precio}</p>`
//     products.appendChild(card)
// })



let evento = document.getElementById("h1")

// evento.addEventListener("click", clickTest)
// function clickTest() {
//     console.log("Test de click")
// }

// let clicks = 0
// evento.onclick = () => {
//     clicks++
//     console.log("Cantidad de clicks: ",clicks)
// }


// let sumar = document.getElementById("plus-button")
// let restar = document.getElementById("minus-button")
// let counter = document.getElementById("counter")
// let contador = 0

// sumar.onclick = () => {
//     contador++
//     counter.innerHTML = contador
// }

// restar.onclick = () => {
//     contador--
//     counter.innerHTML = contador
// }


// let input = document.getElementById("input")
// input.onkeyup = () => {
//     console.log("Apretaste una tecla")
// }

// let zapatillas = ["nike", "adidas", "vans", "puma", "DC", "salomon"]
// input.onchange = () => {
//     const busqueda = zapatillas.find(zapatilla => zapatilla == input.value)
//     console.log(busqueda)
// }


let precio = document.getElementById("precio")
let calcular = document.getElementById("calcular")
let cuotas = document.getElementById("cuotas")

calcular.onclick = () => {
    let precioFinal = precio.value/cuotas.value
    console.log(precioFinal)

    let print = document.createElement("h3")
    print.innerHTML = `Son ${cuotas.value} cuotas de $${precioFinal} cada una`
    document.body.append(print)
}