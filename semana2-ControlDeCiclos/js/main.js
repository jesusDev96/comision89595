// IF
// let validar = false 
// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "mandarina"
// let mes = "abril"

// if(fruta == "mandarina") {
//     console.log("Esta es una fruta del otoño")
// } else if (fruta == "frutilla") {
//     console.log("Esta es una fruta de primavera")
// } else {
//     console.log("Me parece que estamos en otra estacion")
// }


// OR ||

// if(fruta == "mandarina" || mes == "abril") {
//     console.log("Me parece que estamos en otoño")
// }


// AND &&
// if(fruta == "mandarina" && (mes == "marzo" || mes == "abril" || mes == "mayo" || mes == "junio")) {
//     console.log("Me parece que estamos en otoño")
// }

// let edad = 18

// if(edad >= 18) {
//     console.log("Podes comprar en la vinoteca")
// } else {
//     console.log("Sos menor, no podes comprar")
// }



// FOR
// for ("desde"; "hasta"; "actualizacion") {
//     // bloque de codigo a ejecutar
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Ingrese la tabla de multiplicar deseada")) 
// console.log("Tabla de multiplicar del " + numero)
// for(let i=1; i<=15; i++) {
//     let resultado = numero*i
//     console.log(numero+"x"+i+": "+resultado)
// }

// console.log("cuenta regresiva")

// for(let i=10; i>=1; i--) {
//     console.log(i)
//     // if(i==2) {
//     //     console.log("Abortamos despegue!")
//     //     break
//     // }
//     if(i==1) {
//         console.log("Despegue!")
//     }
// }

// WHILE
// let continuar = true 
// while(continuar) {
//     let numero = parseInt(prompt("Ingrese la tabla de multiplicar deseada")) 
//     console.log("Tabla de multiplicar del " + numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = numero*i
//         console.log(numero+"x"+i+": "+resultado)
//     }

//     let confirmacion = prompt("Desea hacaer otra operacion? (si/no)").toLowerCase()
//     if(confirmacion == "no") {
//         continuar = false
//         console.log("Gracias!")
//     }
// }


// SWITCH-CASE
let continuar = true 
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito"))

    switch(menu) {
        case 1:
            alert("Total de la cuenta: $500.000")
            break
        case 2:
            alert("Limite de extraccion: $80.000")
            break
        case 3:
            alert("Limite de deposito: $50.000")
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacaer otra consulta? (si/no)").toLowerCase()
    if(confirmacion == "no") {
        continuar = false
        alert("Retire su tarjeta!")
    }
}
