const productos = [
    {nombre: "Arroz", precio: 1.25, stock: 10 },
    {nombre: "Aceite", precio: 3.5, stock: 0},
    {nombre: "Azucar", precio: 1.1, stock: 8},
    {nombre: "Leche", precio: 1.4, stock: 0},
    {nombre: "Café", precio: 1.4, stock: 5}
];

const productosDisponiblesCaros = productos.filter(producto => producto.stock > 0 && producto.precio >= 1.4);

console.log("Productos disponibles y caros:", productosDisponiblesCaros);

const productoMasStock = productos.filter(producto => producto.stock >= 5);

console.log("Productos con stock mayor o igual a 5:", productoMasStock);

const productoEconomicosDisponibles = productos.filter(producto => producto.stock > 0 && producto.precio < 2);

console.log("Productos económicos y disponibles:", productoEconomicosDisponibles);

const totalUnidades = productos.reduce((total, producto) => total + producto.stock, 0);

console.log("Total de unidades en stock:", totalUnidades);
