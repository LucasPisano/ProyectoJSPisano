const pintarCarrito = ()=>{

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
           
        <img  src="${product.img}">
            <h3 >${product.nombre}</h3>
           
            <p>cantidad: ${product.cantidad}</p>
            
            <p class="precio-item">${product.cantidad *product.precio}$</p>
            
            
    `;

        modalContainer.append(carritoContent);
        let restar 

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className="delete-product"
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio *el.cantidad, 0);
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
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () =>{
    const foundId = carrito.find((element) =>element.id);
    carrito= carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    pintarCarrito();
};