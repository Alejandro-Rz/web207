let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar productos \n"+
        "3. Buscra productos poor nombre \n"+
        "4. Salir \n"+
        "Elige una opcion"

    ));
}

        function iniciarPrograma(){
            let continuar = true;
            while(continuar){
                let opcion = mostrasMenu();
            switch(opcion){
                case 1:
                    agregarProducto();
                    break;
                case 2: 
                    mostrarProducto();
                    break;
                case 3:
                    buscarProducto();
                    break;
                case 4: 
                alert("Saliendo del programa");
                    continuar = false;
                    break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
            }}
            function agregarProducto(){
                let nombreProducto = prompt("Introduce el nombre del producto");
                let cantidadProducto = prompt("Introduce la cantidad del producto");
                let precioProducto = prompt("Introduce el precio del producto");


                if(cantidadProducto > 0 && precio > 0){
                    let producto ={
                        nombre: nombreProducto,
                        cantidad: cantidadProducto,
                        precio: precioProducto,

                    };
inventario.push(producto);
alert("Producto agregado");
                }else{
                    alert("Cantidad y precio tiene que ser positivo")
                }


                    }

            
                }
            
        function mostrarProducto(){
            if( inventario.length === 0){
                alert("no tenemos productos en el inventario")
            }else{
                let mensaje = "Productos en el inventario: ";

                    for(let i=0; i< inventario.length;i++){
                        mensaje+= `Producto ID: ${i+1} \n`+
                                  `Nombre: ${inventario[i].nombre}/n`+
                                  `Cantidad: ${inventario[i].cantidad}/n`+
                                  `Precio: ${inventario[i].precio}/n`+
                                  "---------------------------------------\n";


                    }
                    alert(mensaje);

                function buscarProducto(){
                    console.log("En proceso...");
                }
            }
            }
        

        iniciarPrograma();