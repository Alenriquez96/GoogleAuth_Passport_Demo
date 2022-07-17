# Google Auth demo con Passport.js y jsonwebtoken

![img](./assets/google-signin-button-1024x260.png)

Demostración de autenticación con Google hecha en Node.js con express, passport.js y almacenando un jsonwebtoken(jwt) en las cookies. Cuenta con login y logout.

## Dependencias

- Dotenv
- Express
- Express-session
- Jsonwebtoken
- Passport
- Passport-google-oauth20
- Nodemon

## Instalación
```javascript
npm i 
npm i --save-dev nodemon
```

Para iniciar el proyecto en localhost:3000 debemos modificar scripts de package.json
```javascript
  "scripts": {
    "start": "nodemon index.js"
  },
```
Y después iniciar
```javascript
  npm start
```
## Contenido del archivo .env

Primero creamos el .env que luego añadiremos a .gitignore
```javascript
  CLIENT_ID
  CLIENT_SECRET
```
## Cuenta de Google

Ahora que ya tenemos el proyecto listo para ser lanzado, debemos antes crear unas credenciales de Google. Para ello,
escribiremos en google: google credentials:

