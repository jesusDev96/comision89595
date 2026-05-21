// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))


// let usersContainer = document.getElementById("users-container")
// const URL = "https://jsonplaceholder.typicode.com/users"

// function obtenerUsuarios() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => renderUsuarios(data))
// }
// obtenerUsuarios()

// function renderUsuarios(listaUsuarios) {
//     listaUsuarios.forEach(usuario => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h2>Nombre: ${usuario.name}</h2>
//                           <h3>Usuario: ${usuario.username}</h3>
//                           <p>Contacto: ${usuario.email}</p>`
//         usersContainer.appendChild(card)
//     })
// }



// const URL = "./db/data.json"

// function obtenerProductos() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => renderProductos(data))
// }
// obtenerProductos()

// function renderProductos(listaProductos) {
//     listaProductos.forEach(producto => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h2>ID: ${producto.id}</h2>
//                           <h3>Nombre: ${producto.nombre}</h3>
//                           <p>Precio: $${producto.precio}</p>`
//         usersContainer.appendChild(card)
//     })
// }




// Swal.fire({
//   icon: "error",
//   title: "Pago rechazado",
//   text: "Problemas con el pago, contacte a su banco",
//   footer: "<p>Necesitas ayuda? <a href=\"#\">Contactanos</a></p>"
// });

// Swal.fire({
//   imageUrl: "https://placeholder.pics/svg/300x300",
//   imageHeight: 500,
//   imageAlt: "A tall image",
//   title: "Comprobante de compra",
//   text: "Te adjuntamos el comprobante de tu compra realizada",
// });

// Swal.fire({
//   title: "Desea confirmar la compra?",
//   showDenyButton: true,
//   confirmButtonText: "Comprar",
//   denyButtonText: `Cancelar compra`
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) Swal.fire("Compra efectuada!", "Vas a ver tu comprobante a continuacion", "success");
//   else if (result.isDenied) Swal.fire("Compra cancelada", "Redirigiendo al carrito...", "info");
// });


// Toastify({
//   text: "Cambios guardados",
//   duration: 1500,
//   destination: "#",
//   newWindow: true,
//   close: false,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: false, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();