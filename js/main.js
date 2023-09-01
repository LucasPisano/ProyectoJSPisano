const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const Swal = require('sweetalert2');



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "producto";
        content.innerHTML = `
        
        <img class="img-item" src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="precio-item" > $${product.precio}</p>
        
        
        `;

        shopContent.append(content)
        let comprar = document.createElement("button");
        comprar.innerHTML = "comprar";
        comprar.className = "boton-item";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            const repetido = carrito.some((productoRepetido) => productoRepetido.id === product.id);
            if (repetido) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({

                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
                console.log(carrito);
                savelocal();
            };
        });

    });
};

getProductos();




const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




