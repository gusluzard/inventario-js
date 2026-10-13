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



//Fecha: 03/06/2024

const numeros = [2, 4, 6, 8];

const ejercicio1 = numeros.flatMap(numero => [numero, numero * 2]);
console.log(ejercicio1);

const productos2 = ["Mouse", "Teclado", "Monitor"];

const ejercicio2 = productos2.flatMap(producto => [producto, "Disponible"]);
console.log(ejercicio2);

const categorias = [
    {
        nombre: "Periféricos",
        productos: ["Mouse", "Teclado"]
    },
    {
        nombre: "Monitores",
        productos: ["Monitor Samsung", "Monitor LG"]
    },
    {
        nombre: "Almacenamiento",
        productos: ["USB", "Disco SSD"]
    }
];

const ejercicio3 = categorias.flatMap(categoria => categoria.productos);
console.log(ejercicio3);


const nombre = "JAVASCRIPT";

const resultado = Array.from(nombre);
console.log(resultado);

const numerosTexto = "246810";
const resultado2 = Array.from(numerosTexto, numero => Number(numero));
console.log(resultado2);

const delUnoAlDiez = Array.from({length: 10}, (numero, index) => index + 1);
console.log(delUnoAlDiez);


//Fecha 06/10/2026

const productosTexto = "Mouse, Teclado, Monitor, USB";

const resultado = productosTexto.split(", ");
console.log(resultado);

const categoriasTexto = "Periféricos|Monitores|Almacenamiento|Audio";

const resultado2 = categoriasTexto.split("|");
console.log(resultado2);

const preciosTexto = "10,25,50,100";

const resultado3 = preciosTexto.split(",").map(precio => Number(precio));
console.log(resultado3);

const preciosMayores20 = "15,25,8,150,100";

const resultado4 = preciosMayores20.split(",").map(numero => Number(numero)).filter(numero => numero >20);
console.log(resultado4);

const productosConPrecio = "Mouse:15,Teclado:25,Monitor:150,USB:8";

const productosObjeto = productosConPrecio.split(",").map(producto => {
    const datos = producto.split(":");

    return{
        "nombre": datos[0],
        "precio": Number(datos[1])
    };
});

console.log(productosObjeto);

*/

//Fecha 07/10/2026
/*
const productos2 = [
    { nombre: "Mouse", precio: 15, stock: 10 },
    { nombre: "Teclado", precio: 25, stock: 5 },
    { nombre: "Monitor", precio: 150, stock: 0 }
];

const resultado = productos2.map(producto => {
    const valorStock = producto.precio * producto.stock;

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        valorStock: valorStock
    };
});
*/
/*
const resultado = productos2.map(producto => {
    const disponible = producto.stock > 0 ? true : false ;

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        disponible
    };
});
console.log(resultado);

const resultado2 = productos2.map(producto => {
    let nivelStock = "";
    if (producto.stock === 0){
        nivelStock = "Necesita reposición";
    } else if (producto.stock > 0 && producto.stock <= 5){
        nivelStock = "Pedir pronto";
    } else {
        nivelStock = "Stock suficiente";
    };

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        nivelStock
    };
});

console.log(resultado2);

const ejercicio5 = productos2.map(producto => {
    const valorStock = producto.precio * producto.stock;

    let estado = "";
    if (producto.stock === 0){
        estado = "Agotado";
    } else {
        estado = "Disponible";
    };

    return {
        nombre: producto.nombre,
        valorStock,
        estado
    };
})

console.log(ejercicio5);

const ejercicio6 = productos2.map(producto => {
    const precioConDescuento = producto.precio * 0.90;

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        precioConDescuento
    };
});

console.log(ejercicio6);

const ejercicio7 = productos2
    .filter(producto => producto.stock > 0)
    .map( producto => {
        const valorStock = producto.precio * producto.stock;

        return {
            nombre: producto.nombre,
            precio: producto.precio,
            valorStock
        };
    });

    console.log(ejercicio7);

    const ejercicio8 = productos2
    .filter(producto => producto.stock > 0 && producto.precio < 100)
    .map( producto => {
        const valorStock = producto.precio * producto.stock;

        return {
            nombre: producto.nombre,
            precio: producto.precio,
            valorStock
        };
    });

    console.log(ejercicio8);

    */



   //-----PRACTICANDO DESESTRUCTURACIÓN------



   
   //Fecha 09/10/2026
   /*
const producto = {
    nombre: "Monitor",
    precio: 150,
    stock: 8,
    categoria: "Periféricos"
};


const {nombre, precio, categoria} = producto;

const resumenProducto = {
    nombre: nombre,
    precio: precio,
    categoria: categoria
};

console.log(resumenProducto);
*/
/*
const producto = {
    nombre: "Mouse",
    precio: 15,
    stock: 10,
    categoria: "Periféricos"
};

const {nombre, stock} = producto;

const productoDisponible = {
    nombre,
    stock
};

console.log(productoDisponible);

*/
/*
const producto = {
    nombre: "Monitor",
    precio: 150,
    stock: 8
};

const {nombre: nombreProducto, precio: precioProducto} = producto;

console.log(nombreProducto, precioProducto);

*/
/*
const producto = {
    nombre: "Mouse",
    precio: 15
};

const {nombre:nombreProducto, stock:stockProducto = 0} = producto;

console.log(nombreProducto, stockProducto);
*/
/*
const producto2 = {
    nombre: "Monitor",
    precio: 150
};

const {nombre:nombreProducto, precio:precioProducto, stock:stockProducto = 0} = producto2;

const resumenProducto = {
    nombreProducto,
    precioProducto,
    stockProducto
};

console.log(resumenProducto);
*/
/*
const productos3 = ["Mouse", "Teclado", "Monitor", "USB"];

const [primerProducto, , tercerProducto] = productos3;

console.log(primerProducto, tercerProducto);
*/
/*
const productos4 = ["Mouse"];

const [primerProducto, segundoProducto = "No disponible"] = productos4;

console.log(primerProducto, segundoProducto);
*/
/*
const producto = {
    nombre: "Teclado",
    precio: 25,
    etiquetas: ["Tecnología", "Periféricos"]
};

const {nombre:nombreProducto, etiquetas: etiquetasProducto} = producto;

const [primeraEtiqueta] = etiquetasProducto;

console.log(nombreProducto, primeraEtiqueta);
*/
/*
const producto = {
    nombre: "Laptop",
    precio: 800,
    fabricante: {
        marca: "Lenovo",
        pais: "China"
    }
};

const {nombre:nombreProducto, fabricante:{marca:marcaProducto}} = producto;

console.log(nombreProducto, marcaProducto);
*/
/*
const producto = {
    nombre: "Laptop",
    precio: 800,
    fabricante: {
        marca: "Lenovo",
        pais: "China",
        garantia: 2
    }
};

const {nombre:nombreProducto, fabricante:{marca:marcaFabricante, pais:paisFabricante, garantia}} = producto;

console.log(nombreProducto, marcaFabricante, paisFabricante, garantia);
*/

//Fecha: 12/10/2026
/*
const productos3 = ["Teclado", 25, 5, "Disponible"];

const [nombre, , stock] = productos3;

console.log(nombre, stock);
*/
/*
const productos4 = ["Monitor", 150, 8, "Disponible", "Electrónica"];

const [nombre, precio, ...resto] = productos4;

console.log(nombre, precio);
console.log(resto);

*/

/*
const producto5 = ["Teclado", undefined, 5];

const [nombre, precio = 25, stock] = producto5;

console.log(nombre, precio, stock);
*/
/*
const producto6 = ["Mouse"];

const [nombre, precio = 15, stock = 0] = producto6;

console.log(nombre, precio, stock);
*/
/*
const producto7 = ["Laptop", [16, 512], 850];

const [nombre, [ram, almacenamiento], precio] = producto7;

console.log(nombre, ram, almacenamiento, precio);
*/
/*
let precio = 150;
let descuento = 25;

[precio, descuento] = [descuento, precio];

console.log(precio, descuento);



const producto8 = {
    nombre: "Mouse",
    precio: 15,
    stock: 10
};

const {
    nombre: nombreProducto,
    precio
} = producto8;

console.log(nombreProducto, precio);
*/
/*
const producto10 = {
    nombre: "Teclado",
    precio: 25,
    stock: 5,
    marca: "Logitech"
};

const {nombre, ...resto} = producto10;

console.log(nombre, resto);


const productos5 = ["Mouse", "Teclado", "Monitor"];

const productosCopia = [...productos5, "USB"];

console.log(productos5);
console.log(productosCopia);
*/

