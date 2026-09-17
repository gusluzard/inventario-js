

const productos = [
    {nombre: "Mouse", precio: 15, stock: 10 },
    {nombre: "Teclado", precio: 25, stock: 5},
    {nombre: "Monitor", precio: 150, stock: 0},
    {nombre: "USB", precio: 8, stock: 20},
];


function contarProductos (productos) {
    const totalProductos = productos.reduce((total, producto) => total + 1, 0);
    return totalProductos;
};

function calcularValorInventario (productos) {
    const valorInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
    return valorInventario;
}

function totalUnidades (productos) {
    const totalUnidades = productos.filter(producto => producto.stock > 0).reduce((total, producto) => total + producto.stock, 0);
    return totalUnidades;
}

function obtenerResumenInventario (productos) {
    const resumen = {
        "Total de Productos": contarProductos(productos),
        "Total de Unidades": totalUnidades(productos),
        "Valor del Inventario": calcularValorInventario(productos)
    };
    return resumen;
}

const contenedorResumen = document.getElementById("resumen-inventario");

const resumen = obtenerResumenInventario(productos);

const totalProductosHTML = document.getElementById("total-productos");
totalProductosHTML.textContent = resumen["Total de Productos"];
const totalUnidadesHTML = document.getElementById("total-unidades");
totalUnidadesHTML.textContent = resumen["Total de Unidades"];
const valorInventarioHTML = document.getElementById("valor-inventario");
valorInventarioHTML.textContent = resumen["Valor del Inventario"].toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const listaProductosHTML = document.getElementById("lista-productos");

let productosSinStock = 0;

const textoSinStock = document.getElementById("productos-sin-stock");

productos.forEach(producto => { 
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        <td>${producto.stock}</td>
    `;
    if (producto.stock === 0) {
            productosSinStock++;
            fila.classList.add("sin-stock");
        }else if(producto.stock >0 && producto.stock<=5){
            fila.classList.add("stock-bajo")
        };

    listaProductosHTML.appendChild(fila);

});

console.log("Productos sin stock:", productosSinStock);

textoSinStock.textContent = `Productos sin stock: ${productosSinStock}`;


const encabezadoProducto = document.querySelector("th");

encabezadoProducto.textContent = "Producto";

const encabezados = document.querySelectorAll("th");



const nuevosTitulos = ["Producto", "Precio USD", "Unidades"];

encabezados.forEach((encabezado, indice) =>{
    encabezado.textContent = nuevosTitulos[indice];
});

encabezados.forEach(encabezado => {
    encabezado.classList.remove("encabezado-tabla");
});

encabezados[0].classList.add("encabezado-tabla");

encabezados.forEach((encabezado, indice) => {
    if (encabezado.classList.contains("encabezado-tabla")) {
        console.log(indice, "Tiene el estilo aplicado");
    } else {
        console.log(indice, "No tiene el estilo aplicado");
    }
});

encabezados.forEach(encabezado => {
    if (!encabezado.classList.contains("encabezado-tabla")) {
        encabezado.classList.add("encabezado-tabla");
    }
});

const botonDisponibles = document.getElementById("btn-disponibles");

botonDisponibles.addEventListener("click", ()=> {
    const productosDisponibles = productos.filter(producto => producto.stock > 0);

    listaProductosHTML.innerHTML = "";
    
    productosDisponibles.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
        `;

        listaProductosHTML.appendChild(fila);
    });

});

const botonStockBajo = document.getElementById("btn-stock-bajo");

botonStockBajo.addEventListener("click", ()=> {
    const productosStockBajo = productos.filter(producto => producto.stock > 0 && producto.stock <= 5);

    listaProductosHTML.innerHTML = "";
    
    productosStockBajo.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
        `;

        listaProductosHTML.appendChild(fila);
    });

});

const botonTodos = document.getElementById("btn-todos");

botonTodos.addEventListener("click", ()=> {

    listaProductosHTML.innerHTML = "";
    
    productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
        `;

        listaProductosHTML.appendChild(fila);
    });

});

