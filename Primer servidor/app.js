//importamos el modulo http que viene incluido en node.js
const PaquetesServidorNodeImportado = require('http');

//definimos un purto de salida del servidor 
const   port = 3005;

//creamos el servidor 
const server = PaquetesServidorNodeImportado.createServer((req,res)=>{
        //establecer el encabezado de respuesta 
        res.writeHead(200,{'Content-Type':'text/plain'});

        //Enviamos la respuesta
        res.end('Hola mundo');
});

//Escuchar el puerto

    server.listen(port,()=>{
        console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
    });

    