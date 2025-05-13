const express = require('express');
const mysql = require('mysql2');
const bodyParser =require('body-parser');

const app = express();

//manejo de peticiones de http por medio de req
app.use(bodyParser.urlencoded({extended:false}));

//configuracion de palntillas
app.set('view engine', 'ejs');



//conexion a la DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database : 'node_crude',
    port: 3306
});


//validacion 

db.connect(err =>{
    if(err){
        console.error('Error en la conexion de la DB')
    }else{
console.log("Conexion realizada correctamente");
    }
});

//mostrar lista de usuarios

app.get('/',(req,res)=>{
    //consulta a la DB
    const consultaDB ='SELECT * FROM users';

    //trabajamos con la conexion 
    db.query(consultaDB, (err,results)=>{
        if(err){
                console.error('Erro al recuperar usuario',err);
                //mostraremos informacion al usuario
                res.send('Error, no se recuperan ls datos de la DB');
        }else{
            res.render('index',{users: results});
        }

    });
});

//Modulo para agregar el usuario 
app.post('./add',(req, res)=>{
    const {name, email}=req.body;
    /*Nommbre: alex
      Correo: alejandrorodriguezQaragon.unam.mx
      ->
      name: alex
      email:alejandrorodriguezQaragon.unam.mx
      */

      const insertarRegistro= 'INSERT INTO users (name, email) VALUES (?,?)';

      db.query(insertarRegistro,[name,email],(err)=>{
        if(err){
            console.error('Eror al agregar usuario:',err);
        }else{
            res.redirect('/');
        }
      });
});
