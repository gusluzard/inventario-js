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