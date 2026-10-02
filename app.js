

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

const productosConStock = productos.filter(producto => producto.stock > 0);

const textoConStock = document.getElementById("productos-con-stock");

textoConStock.textContent = `Productos con stock: ${productosConStock.length}`;

const porcentajeDisponibles = productosConStock.length / productos.length * 100;

const textoPorcentajeDisponibles = document.getElementById("porcentaje-disponibles");

textoPorcentajeDisponibles.textContent = `Porcentaje disponibles: ${porcentajeDisponibles}%`;


//Practicando con métodos

/*
const nombresDisponibles = productos.filter(producto => producto.stock > 0).map(producto => producto.nombre);

console.log(nombresDisponibles);

const nombresStockBajo = productos.filter(producto => producto.stock>0 && producto.stock <= 5).map(producto => producto.nombre);
console.log(nombresStockBajo);

const nombresPrecio = productos.filter(producto => producto.stock>0).map(producto => ({ nombre: producto.nombre, precio: producto.precio}));
console.log(nombresPrecio);

const productosResumen = productos.filter(producto => producto.stock>0).map(producto => ({ nombre: producto.nombre, precio: producto.precio, stock: producto.stock}));
console.log(productosResumen);

const total = productos.reduce((acumulador, producto) => {
    let suma = producto.precio * producto.stock;
    acumulador += suma;
    return acumulador;
}, 0);

console.log(total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

const totalDisponibles = productos.filter(producto => producto.stock > 0).reduce((acumulador, producto) => {
    let suma = producto.precio * producto.stock;
    acumulador += suma;
    return acumulador;
}, 0);

console.log(totalDisponibles);

const unidadesDisponibles = productos.reduce((acumulador, producto) => {
    acumulador += producto.stock;
    return acumulador;
},0);

console.log(unidadesDisponibles);

const itemsDisponibles = productos.filter(producto => producto.stock >0);

console.log(itemsDisponibles.length);


const valorStockBajo = productos.filter(producto => producto.stock > 0 && producto.stock <= 5).reduce((acumulador, producto) => {
    let suma = producto.precio * producto.stock;
    acumulador += suma;
    return acumulador;
}, 0);

console.log(valorStockBajo);

const resumenProductos = productos.filter(producto => producto.stock > 0).map(producto => ({nombre: producto.nombre, valor: producto.precio * producto.stock}));

console.log(resumenProductos);

const productoBuscado = productos.find(producto => producto.nombre === "Teclado");

console.log(productoBuscado);

const productoSinStock = productos.find(producto => producto.stock===0);

console.log(productoSinStock);

const productoCaro = productos.find(producto => producto.precio > 100);

console.log(productoCaro);

const productoDisponible = productos.find(producto => producto.stock > 0);

console.log(productoDisponible);

const hayProductoCaro = productos.some(producto => producto.precio > 100);

console.log(hayProductoCaro);

const hayStockBajo = productos.some(producto => producto.stock > 0 && producto.stock <= 5);

console.log(hayStockBajo);

const hayProductoAgotadoCaro = productos.some(producto => producto.stock === 0 && producto.precio > 200);

console.log(hayProductoAgotadoCaro);

const todosPreciosMayoresCinco = productos.every(producto => producto.precio > 5);

console.log(todosPreciosMayoresCinco);

const todosDisponibles = productos.every(producto => producto.stock > 0);

console.log(todosDisponibles);

const disponiblesMayorCinco = productos.filter(producto => producto.stock > 0).every(producto => producto.precio > 5);

console.log(disponiblesMayorCinco);



const existeSinStock = productos.some(producto => producto.stock === 0);

console.log(existeSinStock);

const todosMenores200 = productos.every(producto => producto.precio < 200);

console.log(todosMenores200);

const productoConMuchoStock = productos.find(producto => producto.stock > 15);

console.log(productoConMuchoStock);


const precios = [150, 25, 8, 15, 100];

precios.sort((a,b) => a - b);

console.log(precios);

productos.sort((a,b) => a.precio - b.precio);

console.log(productos);

productos.sort((a,b) => b.precio - a.precio);

console.log(productos);

productos.sort((a,b) => a.stock - b.stock);

console.log(productos);

productos.sort((a,b) => b.stock - a.stock);

console.log(productos);

const sortDisponibles = productos.filter(producto => producto.stock > 0).sort((a,b) => b.precio - a.precio);
console.log(sortDisponibles);

const nombresDisponibles2 = productos
    .filter(producto => producto.stock > 0)
    .sort((a,b) => a.nombre.localeCompare(b.nombre))
    .map(producto => producto.nombre);

console.log(nombresDisponibles2);

const productosZA = productos
    .sort((a,b) => b.nombre.localeCompare(a.nombre))
    .map(producto => producto.nombre);

console.log(productosZA);

const productosDisponiblesOrdenados = productos
    .filter(producto => producto.stock > 0)
    .sort((a,b) => b.stock - a.stock)
    .map(producto => producto.nombre);

console.log(productosDisponiblesOrdenados);


const prodEcoDisponibles = productos
    .filter(producto => producto.stock > 0 && producto.precio < 100)
    .sort((a,b) => a.precio - b.precio)
    .map(producto => producto.nombre);

console.log(prodEcoDisponibles);

console.log(productos);
const ejercicio1 = productos.findIndex (producto => producto.precio===25);
console.log(ejercicio1);

const ejercicio2 = productos.findIndex (producto => producto.stock===0);
console.log(ejercicio2);

const ejercicio3 = productos.findIndex (producto => producto.nombre==="Tablet");

if (ejercicio3 !== -1) {
    console.log("Producto encontrado");
} else {
    console.log("Producto no encontrado");
};



const nombresProductos = productos.map(producto => producto.nombre);

console.log(nombresProductos.includes("Teclado"));

console.log(nombresProductos.includes("Laptop"));

console.log(nombresProductos.includes("Monitor"));


const otroArray = productos.map(producto => producto.nombre);

console.log(otroArray.indexOf("USB"));

console.log(otroArray.indexOf("Mouse"));

const buscarProducto = otroArray.indexOf("Laptop");
if (buscarProducto !== -1) {
    console.log("Producto encontrado");
} else {
    console.log("Producto no encontrado");
};

*/

const categorias = [
    ["Mouse", "Teclado"],
    ["Monitor", "Laptop"],
    ["USB", "Audífonos"]
];

const ejercicio1 = categorias.flat();
console.log(ejercicio1);

const categoriasAnidadas = [
    ["Mouse", ["Teclado", "Monitor"]],
    ["USB", ["Audífonos"]]
];

const ejercicio2 = categoriasAnidadas.flat(2);
console.log(ejercicio2);


const frutas = ["Papaya", ["Aguacate", "Piña"], "Sandía", "Pera", ["Uva", "Mango"]];
const ejercicio3 = frutas.flat(1);
console.log(ejercicio3);