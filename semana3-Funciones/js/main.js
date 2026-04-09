// function saludar () {
//     console.log("Hola coder!!")
// }
// saludar()

// let numeroA = 100

// function sumar() {
//     let numeroA = 60
//     let numeroB = 15
//     let resultado = numeroA + numeroB

//     // console.log(resultado)
//     return resultado
// }
// console.log(sumar())

// let total = sumar()
// let conIva = total*1.21
// console.log(conIva)

// const restar = function () {
//     let numeroA = 30
//     let numeroB = 15
//     let resultado = numeroA - numeroB

//     return resultado
// }
// console.log(restar())

// let primerNumero = parseInt(prompt("Ingrese el primer numero"))
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"))

// function sumar (numeroA, numeroB) {
//     let resultado = numeroA + numeroB
//     console.log(resultado)
// }

// sumar(primerNumero, segundoNumero)

// const calculadoraDel0 = function (primerNumero) {
//     console.log(primerNumero*10)
// }

// const calculadoraDel0 = (primerNumero) => {
//     console.log(primerNumero*10)
// }

// const calculadoraDel0 = primerNumero => {
//     console.log(primerNumero*10)
// }

// const calculadoraDel0 = primerNumero => primerNumero*10

// console.log(calculadoraDel0(5))

// const multiplicar = (numeroA, numeroB) => numeroA*numeroB
// console.log(multiplicar(5,3))



function sumar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
}

function restar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
}

function multiplicar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA * numeroB
    alert(numeroA + " x " + numeroB + " = " + resultado)
}

function dividir() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
}


let menu = parseInt(prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir, 5 para salir"))

while(menu !== 5) {
    switch(menu) {
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4: 
            dividir()
            break
        default:
            alert("Opcion incorrecta")
    }

    menu = parseInt(prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir, 5 para salir"))
}