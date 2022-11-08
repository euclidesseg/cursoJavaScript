



let precioProducto;
let numeroFactura = 0;
let totalCompra = null;
let ventaDia = 0;
let nProductos;
let respuesta = `si`;
let compra = [];
while (respuesta === `si`) {
    numeroFactura = numeroFactura + 1;
    nProductos = Number.parseInt(prompt(`Ingrese el numero de productos que tiene el cliente`));

    for (let i = 0; i < nProductos; i++) {
        precioProducto = Number.parseInt(prompt(`Ingresa el precio del producto ${i + 1}`));
        totalCompra = totalCompra + precioProducto;
       
    }
    let factura = {
        numeroFactura: numeroFactura,
        nProductos: nProductos,
        totalVenta: totalCompra
    }
    compra.push(factura);3
    respuesta = prompt(`¿Tiene mas clientets en la fila? Ingrese si o no`);
    ventaDia = ventaDia + factura.totalVenta;
    totalCompra = null;
}
console.table(compra);
console.log(` La venta total del dia fue: ${ventaDia}`);


