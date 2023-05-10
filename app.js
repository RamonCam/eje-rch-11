//Declaraciones
const express = require('express'); //Servidor
const hbs = require('hbs'); //HTML - Dinamicos
const bodyParser = require('body-parser'); //Body - POST
const port = process.env.PORT || 3000; //Puerto sde ejecucion

const app=express();

//Motor para generar las vistas dinamicas
app.set('view engine', 'hbs');
//Por ejemplo header, menu vertical, menu horizontal, pie
hbs.registerPartials(__dirname + '/views/partials',()=>{});

//use - Middleware
app.use(express.static('public')); //Parte publica de la App
app.use(bodyParser.urlencoded({extended: true})); //Procesar en el body en las solicitudes Post
app.use(bodyParser.json()); //Manejar datos en formato {}


//Procesar solicitudes de tipo GET y POST
//GET - dashboard y 404
//POST - login 
/*
app.get    - R (Leer recursos como paginas, imagenes, etc)
app.post   - C (Crear)
app.put    - Update
app.delete - Eliminar

C - Crear - POST
R - Leer - GET
U - Actualizar - PUT
D - Eliminar - DELETE
*/

//Ruta para el dashboard
app.post('/dashboard', (req,res)=>{
    res.render('dashboard')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

//Ruta para el 404
app.get('*', (req,res)=>{
    //res.send('Aqui va el 404 por GET')
    res.render('404',{
        nombre:"Jose Luis",
        edad:"27"
    })
})

app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto', port);
})