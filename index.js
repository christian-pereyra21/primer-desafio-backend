class Producto{
    constructor(id,nombre,precio,descripcion,code,stock){
        this.id= id;
        this.nombre= nombre;
        this.precio= precio;
        this.descripcion= descripcion;
        this.code= code;
        this.stock= stock;
    }}

const productos= []
productos.push(new Producto(1,"auriculares jbl wave",32000,"auriculares",1,c01p,40));
productos.push(new Producto(2,"auriculares jbl tune 500",20550,"auriculares",c02p,25));
productos.push(new Producto(3,"stereo Pionner In Dash Avh-5350",210000,"stereo",c03p,15));
productos.push(new Producto(4,"Stereo Sony Bluethoot",69000,"stereo",c04p,22))
productos.push(new Producto(5,"Parlante Stromberg Portatil Bump",92650,"parlante",c05p,9));
productos.push(new Producto(6,"Parlante JBL GO 3",27870,"parlante",c06p,18));
productos.push(new Producto(7,"Controlador Pionner WE GO 4",358804,"controlador",c07p,7));
productos.push(new Producto(8,"Controlador DJ Hercules Inpulse 3",252147,"controlador",c08p,12));


if (articulo.length > 0) {
    let mensaje = "Productos encontrados:\n";
    articulo.forEach((producto) => {
        mensaje += `Nombre: ${producto.nombre}\n`;
        mensaje += `Costo por unidad: ${producto.precio}\n\n`;
    });
    alert(mensaje);
} else {
    alert("Este producto no se encuentra :(");
}

const addProducts= (productos)=>{
    if(!productos.nombre||productos.precio||productos.descripcion||productos.code||productos.stock){
        console.error('Todos los campos son obligatorios')
    }
    return 
}

if(addProducts.id===id.productos){
    this.id++
}


function searchId(id){
    const prodId= document.getElementById(productos.id);
    if(!prodId){
        console.log('No se encuentra disponible el producto :(')
    }
    
    return
}



if(productos.some(p=> p.code === productos.code)){
    console.warn('El código no puede repetirse. Por favor ingrese otro código');
    return
}


const mostrarProductos= productos.getProductos();
console.log(`Todos los productos: ${mostrarProductos}`)


