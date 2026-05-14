// setTimeout
// console.log("Preparando motores")
// let largada = setTimeout(()=> {
//     console.log("Largada!!")
// }, 3000)
// clearTimeout(largada)


// setIntervar
// console.log("Atencion a las banderas amarillas")
// let safetyCar = setInterval(()=> {
//     console.log("Banderas amarillas, seguir al auto de seguridad")
// }, 1500)
// clearInterval(safetyCar)
// console.log("Relargada!!")


// try-catch-finally

// let pitsTime = parseFloat(prompt("De cuantos segundos fue la detencion?"))
// let analisis = ""

// try {
//     //Bloque de codigo a analizar
//     if(pitsTime < 3.1) {
//         analisis = "Buena parada, dentro de lo esperado"
//     } else {
//         throw new Error("Parada lenta, perdiste posiciones")
//     }
// } catch(err) {
//     //Recibe el error del try si lo hubiese
//     analisis = err
// } finally {
//     // bloque de codigo que se ejecuta si o si (opcional)
//     console.log("Analisis del pitstop: ", analisis)
// }



//Promesas
function podioChecker(posicion) {
    return new Promise((resolve, reject) =>{
        if(posicion > 3) {
           return  reject(`Terminaste en la posicion "${posicion}" no vas al podio`)
        }
        setTimeout(()=> {
            resolve({
                posicion,
                result: "Felicitaciones! Vas al podio"
            })
        }, 1000)
    })
}
podioChecker(2).then(data => console.log(data))
