//Importamos dependencias
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const session = require("express-session");
require("./auth.js");

//Inicializamos server
const app = express();
const port = 3000;

//Inicializamos passport y la session de passport
app.use(session({ secret: 'SECRET'}));
app.use(passport.initialize());
app.use(passport.session());

//Ruta / 
app.get("/", (req,res)=>{
    res.send('<a href="/auth/google">Authenticate with google </a>')
});

//Ruta que renderiza el prompt de Google con las cuentas
app.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

//Esta ruta tiene dos funciones, la primera es en caso de fallo nos redirecciona a /auth/failure, y la segunda, en caso de éxito realiza la función siguiente.
app.get("/google/callBack", 
    //Función de fallo
    passport.authenticate('google', { failureRedirect: '/auth/failure' }), 
    //Función exitosa
    (req,res)=>{
    //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user

    //Estos son los pasos para crear un token si la autenticación es exitosa
    const payload = {
        //save here data
        check: true
    };
    const token = jwt.sign(payload, `secret_key`, {
        expiresIn: "20m"
    });

    //Almacenamos el token en las cookies
    res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict",
    }).send("Welcome! You are now authenticated with google! <br><br> <a href='/logout'>Click here to logout!</a>");
});

//Definimos una ruta en caso de que la autenticación falle.
app.get('/auth/failure', (req, res) => {
    res.send('Something went wrong..')  
});

//Definimos la ruta de logout, donde eliminamos la sesión y limpiamos el token de las cookies.
app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").send('Goodbye! <br><br> <a href="/auth/google">Authenticate again</a>');
      });

});


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})