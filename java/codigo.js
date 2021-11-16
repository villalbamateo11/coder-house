const TASAFINANCIACION = 0.05;

let totalCompra = parseInt(prompt("Ingresar valor total de la compra a financiar"))
let cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas de financiación"))

const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const potencia = (a,b) => a ** b;
const productos = [
    {
      id: 1,
      nombre: 'Cartón Post consumo',
      descripcion:'El cartón post consumo es un material formado por varias capas de papel superpuestas, a base de fibra virgen o de papel reciclado. El post consumo es una estrategia ambiental de largo plazo, orientada a que algunos residuos de consumo masivo, sean separados desde la fuente de los demás residuos y sean manejados de forma adecuada, promoviendo su recuperación o reciclaje.', 
      imagen: '../cosas/imagenes/fardo2.jpeg',
      precio: '3100000',
      cantidad: 0
    },
    {
      id: 2,
      nombre: 'Papel Blanco',
      descripcion:'El papel blanco está hecho de una fina lámina fabricada a partir de pulpa de celulosa, que es una pasta de fibras vegetales molidas y suspendidas en agua, normalmente esta queda de color blanco y por último se seca para que se endurezca.', 
      imagen: '../cosas/imagenes/carton1.jpeg',
      precio: '1100000',
      cantidad: 0
    },
    {
      id: 3,
      nombre: 'Papel Diario',
      descripcion:'Este es el tipo de papel utilizado para la impresión de periódicos.', 
      imagen: '../cosas/imagenes/carton2.jpeg',
      precio: '1000000',
      cantidad: 0
    },
    {
      id: 4,
      nombre: 'Papel Segunda',
      descripcion:'El papel denominado segunda es el que llega mezclado con los rezagos de cartón y se separa del mismo, para luego utilizarlo en el reciclado de otro tipo de papel.', 
      imagen: '../cosas/imagenes/carton4.jpeg',
      precio: '1000000',
      cantidad: 0
    }
];
class Carrito {
  constructor(cantidad){
      this.cantidad = parseInt(cantidad);
  }
  
  agregarAlCarrito(){
      this.cantidad ++;
      //this.precio += precio;
  }
  quitarDelCarrito(cantidad){
      this.cantidad -= cantidad;
  }
}

jQuery(() => {
// -------- CONSTANTES ELEMENTOS DEL DOM
const listadoProductos = document.getElementById("listado");
const precioElementos = document.getElementsByClassName("precio");
const URL = "../json/productos.json"
const contenedorCanasta = document.getElementById("canasta");
const arrayCanasta = [];
const arrayCarrito = [];
const productos = [];
arrayCarrito.push(new Carrito(0));
const elementoCarrito = arrayCarrito[0];
const carritoLocalStorage = localStorage.getItem("carrito");
// -------- FUNCIONES 
/* Con esta función puedo eliminar productos de la canasta */
const eliminarProducto = (producto) => {
  elementoCarrito.quitarDelCarrito(producto.cantidad);
  producto.cantidad = 0;
  carritoHTML.html(`${elementoCarrito.cantidad}`);
  totalCarrito();

  for (const productoCanasta of contenedorCanasta.children) {
    if (parseInt(productoCanasta.id) === parseInt(producto.id)) {
      productoCanasta.parentElement.removeChild(productoCanasta);
      
      // El método indexOf me permite obtener el índice de algún item de un Array
      const index = arrayCanasta.indexOf(producto);

      /* 
        El método splice permite eliminar un elemento de un Array, 
        paso el indice y cuantos elementos quiero eliminar
      */
      arrayCanasta.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
    }  
  }
}
/* Resto 1 a la cantidad del Producto */
const restoProducto = (producto) => {
      elementoCarrito.quitarDelCarrito(1);
      producto.cantidad--;

      let cantidadProducto = $(`#cantidad-${producto.id}`); //document.getElementById(`cantidad-${producto.id}`);
      cantidadProducto.html(`${producto.cantidad}`);
      let totalProducto = $(`#total-${producto.id}`);// document.getElementById(`total-${producto.id}`);
      totalProducto.html(`$ ${precioTotal(producto.precio, producto.cantidad)}`);

      /* Retiro el producto y vuelvo a colocarlo con la nueva cantidad
        Ya que fue la forma que pude encontrar para actualizar la cantidad en en localStorage
        Sin agregarlo nuevamente */
      if (producto.cantidad <= 0) {
        eliminarProducto(producto);
      } else {
        const indexCanasta = arrayCanasta.indexOf(producto);
        arrayCanasta.splice(indexCanasta, 1);
        arrayCanasta.push(producto);
        localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
      }
}

/* 
Con esta función puedo agregar productos del contenedor a la canasta 
*/
const insertarCanasta = (producto) => {

  elementoCarrito.agregarAlCarrito();   

  /* Pregunto si la cantidad es 0 para saber si es el primer elemento
     (1)De ser el primero creo el producto en la canasta
     (2)Si ya existe en la canasta, solamente aumento la cantidad */
  if (producto.cantidad <= 0) {
      producto.cantidad++;

      $('#canasta').append(`
  <div class="producto-canasta" id="${producto.id}">
  <img src="${producto.imagen}">
            <div class="contenedor__general-producto">
            
            <div class="contenedor__producto">
              <div class="descripcion-producto">
                <p class="producto-canastaDescripcion">${producto.nombre}</p>
                <p> $ ${producto.precio} </p>
              </div>
              <div class="contenedor__cantidad">
                <a id="cantidadMenos-${producto.id}"> <i class="contenedor_cantidad-icon contenedor_cantidad-icon--red fas fa-minus-square"></i> </a>
                <p  class="contenedor__cantidad-numero" id="cantidad-${producto.id}"> ${producto.cantidad} </p>
                <a id="cantidadMas-${producto.id}"> <i class="contenedor_cantidad-icon contenedor_cantidad-icon--green fas fa-plus-square"></i> </a>
              </div>
            </div>
            <div class="contenedor__eliminar">
              <b class="contenedor__eliminarCantidad" id="total-${producto.id}">$ ${precioTotal(producto.precio, producto.cantidad)}</b>
              <a id="eliminar-${producto.id}" ><i class="contenedor__eliminarProducto far fa-trash-alt"></i></a>
            </div>
            </div>
      </div>`);

      /*
      Inserto un elemento botón al elemento recientemente creado
      que contenga la función para poder eliminar el prodcuto de la canasta
      */


      eliminar(producto);
      sumarAlCarrito(producto);
      restarAlCarrito(producto);
      arrayCanasta.push(producto);
      localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
      totalCarrito();

  } else {
      producto.cantidad++;
      let cantidadProducto = $(`#cantidad-${producto.id}`);//document.getElementById(`cantidad-${producto.id}`);
      cantidadProducto.html(`${producto.cantidad}`);
      let totalProducto = $(`#total-${producto.id}`);
      totalProducto.html(`$ ${precioTotal(producto.precio, producto.cantidad)}`);

      /* Retiro el producto y vuelvo a colocarlo con la nueva cantidad
        Ya que fue la forma que pude encontrar para actualizar la cantidad en en localStorage
        Sin agregarlo nuevamente */
      const indexCanasta = arrayCanasta.indexOf(producto);
      arrayCanasta.splice(indexCanasta, 1);
      arrayCanasta.push(producto);
      localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
      totalCarrito();
  }

}
/* 
Con esta función puedo agregar lo productos del localStorage a la canasta 
*/
const insertarCanastaLocalStorage = (producto) => {
  /* Por la cantidad que tiene el producto, hago la llamda al agregar al carrito */
  for (let index = 0; index < producto.cantidad; index++) {
      elementoCarrito.agregarAlCarrito();
  }

  carritoHTML.html(`${elementoCarrito.cantidad}`);

    $('#canasta').append(`
  <div class="producto-canasta" id="${producto.id}">
  <img src="${producto.imagen}">
  <div class="contenedor__general-producto">
  <div class="contenedor__producto">
    <div class="descripcion-producto">
      <p class="producto-canastaDescripcion">${producto.nombre}</p>
      <p> $ ${producto.precio} </p>
    </div>
    <div class="contenedor__cantidad">
      <a id="cantidadMenos-${producto.id}"> <i class="contenedor_cantidad-icon contenedor_cantidad-icon--red fas fa-minus-square"></i> </a>
      <p  class="contenedor__cantidad-numero" id="cantidad-${producto.id}"> ${producto.cantidad} </p>
      <a id="cantidadMas-${producto.id}"> <i class="contenedor_cantidad-icon contenedor_cantidad-icon--green fas fa-plus-square"></i> </a>
    </div>
  </div>
  <div class="contenedor__eliminar">
    <b class="contenedor__eliminarCantidad" id="total-${producto.id}">$ ${precioTotal(producto.precio, producto.cantidad)}</b>
    <a id="eliminar-${producto.id}" ><i class="contenedor__eliminarProducto far fa-trash-alt"></i></a>
  </div>
  </div>
  </div>`);

      /* 
      Inserto un elemento botón al elemento recientemente creado
      que contenga la función para poder eliminar el prodcuto de la canasta
      */

      eliminar(producto);
      sumarAlCarrito(producto);
      restarAlCarrito(producto);
      arrayCanasta.push(producto);
      localStorage.setItem("carrito", JSON.stringify(arrayCanasta));
      totalCarrito();
}

/* 
  Función para crear productos dinámicamente y crearlos en el contenedor 
*/
const insertarProductos = () => {
  $.get(URL, (respuesta, estado) => {
    if (estado === "success") {
      for (const producto of respuesta) {
        productos.push(producto);
      }
  for (const producto of productos) {



    /* Pregunto si son positivos o negativos, ya que quiero ir variando como se muestran en el html */

  if (producto.id % 2 == 1) {
    $('#listado').append(`
  <div class="row justify-content-center container__favoritos-box" id="${producto.id}">
  <div class="col-12 col-md-6 container__favoritos-sushiDescripcion">
  <div class="contenedorCartas">
      <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
      <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
      <p class="contenedorCartas__precio">$${producto.precio}</p>
      <button class="contenedorCartas__enlace" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
  </div>
</div>
<div class="col-12 col-md-6 container__favoritos-sushiImagen">
  <img class="container__sushiImagen-img" src="${producto.imagen}">
</div>
</div>
  </div>`);
  } else {

    $('#listado').append(`
    <div class="row justify-content-center container__favoritos-box" id="${producto.id}">
    <div class="col-12 col-md-6 container__favoritos-sushiImagen oreder-md-1 order-2">
    <img class="container__sushiImagen-img" src="${producto.imagen}">
  </div>
  <div class="col-12 col-md-6 container__favoritos-sushiDescripcion order-md-2 order-1">
    <div class="contenedorCartas">
      <h2 class="contenedorCartas__titulo">${producto.nombre}</h2>
      <p class="contenedorCartas__texto"> ${producto.descripcion} </p>
      <p class="contenedorCartas__precio">$${producto.precio}</p>
      <button class="contenedorCartas__enlace" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-${producto.id}">Comprar</button>
    </div>   
  </div>
  </div>`);

  }
}
comprar();
/* Pregunto por el localStorage y de existir lo inserto en la canasta */
if (carritoLocalStorage) {
  carritoParse = JSON.parse(carritoLocalStorage);

  for (const producto of carritoParse) {
    inicializarProductos(producto);
  }
}
}
});
}
/* Inicializo la cantidad de los productos a los del localStorage
  Y los inserto en la canasta */
const inicializarProductos = (productoLocal) => {
  for (const producto of productos){
      if (producto.id == productoLocal.id) {
          producto.cantidad = productoLocal.cantidad;
          insertarCanastaLocalStorage(producto);
      }
  }
}
/* Agrego el método comprar para el boton de los productos */
const comprar = () => {
  for (const producto of productos){
    $(`#boton-${producto.id}`).on("click", function () {
      insertarCanasta(producto);
      carritoHTML.html(`${elementoCarrito.cantidad}`);
      totalCarrito();
    });

  }
}

/* Agrego el método eliminar producto para el boton del tacho */
const eliminar = (producto) => {
      let boton = document.getElementById(`eliminar-${producto.id}`);     
      boton.onclick = () => {
          eliminarProducto(producto);
      }
  $(`#eliminar-${producto.id}`).on("click", function () {
    eliminarProducto(producto);
  });
}

/* Agrego el método eliminar producto para el boton del tacho */
const sumarAlCarrito = (producto) => {
  $(`#cantidadMas-${producto.id}`).on("click", function () {
    insertarCanasta(producto);
    carritoHTML.html(`${elementoCarrito.cantidad}`);
    totalCarrito();
  });

}

/* Agrego el método eliminar producto para el boton del tacho */
const restarAlCarrito = (producto) => {
  $(`#cantidadMenos-${producto.id}`).on("click", function () {
    restoProducto(producto);
    carritoHTML.html(`${elementoCarrito.cantidad}`);
    totalCarrito();
  });
}


/* Calculo el precio total del producto dependiendo de la cantidad */
const precioTotal = (precio, cantidad) => { return precio * cantidad}

/* Calculo el precio de todos los productos de la canasta */
const totalCarrito = () => { 
  sumaTotalCarrito = 0; 
  for (const producto of productos) {
    sumaTotalCarrito += precioTotal(producto.precio, producto.cantidad);
  }

  sumaTotalCarritoHTML.html(`$ ${sumaTotalCarrito}`);
}

/* Api de mercado pago */

let boton = document.getElementById("pagar", JSON);

boton.addEventListener("click", (e) => {
    pagar()
})

async function pagar() {
    const productosToMp = arrayCanasta.map(Element => {
        let nuevoElemento = {
          category_id: Element.id,
          title: Element.nombre,
          description: Element.descripcion,
          picture_url: Element.imagen,
          unit_price: Number(Element.precio),
          quantity: Number(Element.cantidad),
          currency_id: "ARS"
        }
        return nuevoElemento;
    })

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: 
            "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006"
        },
        body: JSON.stringify({
          items: productosToMp,
        })
    }
  );

    const data = await response.json();
    window.open(data.init_point, "_blank");
}

//CÓDIGO
let carritoHTML = $("#cantidadEnElCarrito"); 
let carritoParse;
let sumaTotalCarrito = 0;
let sumaTotalCarritoHTML = $("#sumaTotalCarrito");

insertarProductos();
comprar();
/* Pregunto por el localStorage y de existir lo inserto en la canasta */
if (carritoLocalStorage) {
  carritoParse = JSON.parse(carritoLocalStorage);
  for (const producto of carritoParse) {
      inicializarProductos(producto);
  }
}
});