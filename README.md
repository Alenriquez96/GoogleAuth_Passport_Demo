# Google Auth demo con Passport.js y jsonwebtoken

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
