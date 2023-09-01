const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


const productos = [{
    id: 1,
    nombre: "libretas",
    precio: 1150,
    img: "assets/img/with-cups.jpeg",
},
{
    id: 2,
    nombre: "Stroopwafels",
    precio: 900,
    img: "assets/img/stroop.jpeg",
},
{
    id: 3,
    nombre: "Mini stroopwafels",
    precio: 750,
    img: "assets/img/box-mini.jpeg",
},
{
    id: 4,
    nombre: "Caja stroopwafels Decoradas",
    precio: 900,
    img: "assets/img/speculaas.jpeg",
}, {
    id: 5,
    nombre: "Stroopkoeken",
    precio: 750,
    img: "assets/img/stroopkoeken.jpeg",
}, {
    id: 6,
    nombre: "Speculaas",
    precio: 900,
    img: "assets/img/speculaas.jpeg",
},];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "producto";
    content.innerHTML = `
    
    <img class="img-item" src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio-item" >${product.precio}</p>
    
    
    `;

    shopContent.append(content)
    let comprar = document.createElement("button");
    comprar.innerHTML = "comprar";
    comprar.className = "boton-item";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });

});
verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML="";
    modalContainer.style.display= "flex";
    modalContainer.style.flexDirection = "column";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
<h1 class = "modal-header-title">carrito </h1> 
`;
    modalContainer.append(modalHeader);

    

   
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
           
            <h3 >${product.nombre}</h3>
            <p class="precio-item">${product.precio}$</p>
            <img  src="${product.img}">
    `;

        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar $ ${total}`;
    modalContainer.append(totalBuying);
    const modalButton = document.createElement("button");
    modalButton.className = "modal-button";
    modalButton.innerHTML = "x";
    modalHeader.append(modalButton);
    modalButton.addEventListener("click", ( )=> {
        modalContainer.style.display = "none";
    })
});


const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




