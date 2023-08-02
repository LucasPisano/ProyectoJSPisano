
const Producto = function(nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}

let producto1= new Producto("stroopwafels", 1500, 50)
let producto2= new Producto("tazas", 8000, 5)
let producto3= new Producto("stroopcoeken", 1000, 50)

let array = [producto1,producto2,producto3]

function buscar(){
    let articulo = prompt("ingrese el nombre")
    let Filtro = array.filter( (producto)=> producto.nombre.includes(articulo))

    if(Filtro.length > 0){
        console.table(Filtro)
    }else{
        alert("no hay conicidencias con " + articulo)
    }
}

function cargarProducto(){
    let nombre =prompt(" ingresa el nombre")
    let precio =prompt(" ingresa el precio")
    let stock =parseInt(prompt(" ingresa el stock"))

    if(isNaN(precio) || isNaN(stock) || nombre=== null){
        alert("ingresa datos validos")
        return
    }
    let producto= new Producto(nombre,precio,stock)

    array.push(producto)
    console.table(lista)
}

function mostrarProductos(){
        const ulElement = document.createElement('ul');
      
  
        array.forEach(producto => {
          const liElement = document.createElement('li');
          liElement.textContent = producto.nombre;
          ulElement.appendChild(liElement);
        });
        muestra.innerHTML = '';
      
        muestra.appendChild(ulElement);
      
}

const mostrarBtn = document.getElementById('mostrarBtn');
const mostrar = document.getElementById('mostrar');

let boton = document.getElementById("btnBuscar")
boton.addEventListener("click", buscar)

let boton2 = document.getElementById("btnCargar")
boton2.addEventListener("click", cargarProducto)

let boton3 = document.getElementById("btnMostrar")
boton3.addEventListener("click", mostrarProductos)

