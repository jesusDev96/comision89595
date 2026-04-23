// const jugador1 = "messi"
// const jugador2 = "dibu martinez"
// const jugador3 = "cuti romero"
// const jugador4 = "lautaro martinez"
// const jugador5 = "julian alvarez"

// const jugadores = ["messi", "dibu martinez", "cuti romero", "lautaro martinez", "julian alvarez"]
// console.log(jugadores)
// console.log(jugadores[2])
// console.log(jugadores.length)


// .push()
// jugadores.push("dybala")

// // .unshift()
// jugadores.unshift("paredes")

// // .pop()
// jugadores.pop()

// // shift()
// jugadores.shift()

// .includes()
// console.log(jugadores.includes("dybala"))

// indexOf()
// console.log(jugadores.indexOf("paredes"))

// sort()
// jugadores.sort()

// .reverse()
// jugadores.reverse()

// jugadores.sort().reverse()
// console.log(jugadores)

// .join()
// console.log(jugadores.join(" - "))


// splice
// jugadores.splice(2, 1, "tagliafico")
// console.log(jugadores)


const jugadores = ["messi", "dibu martinez", "cuti romero", "lautaro martinez", "julian alvarez"]

// Por favor NO usar for y length, usar for-of

// FOR-OF
for(const jugador of jugadores) {
    console.log("Convocado: " + jugador)
}
