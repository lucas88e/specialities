const express = require("express");
const app = express();
const {
    sinPuntuacionDevelopers,
    sinPuntuacionMarketing,
    sinPuntuacionQAs,
    sinPuntuacionVentas,
} = require("./data.js");

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Home</title>
    <style>
    body{
        background-color: black;
        color:white;

    }
    h1{text-align:center}
        </style>
       <body><h1>Esta es la pagina principal</h1><ul><li><a href='/marketing'>Marketing</a></li><li><a href='/developers'>Developers</a></li><li><a href='/QAs'>QAs</li><li></a><a href='/ventas'>Ventas</a></li></ul></body></html>`
    );
});
app.get("/marketing", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lista de Marketing</title>
    <style>
    body{background-color: red;
        text-align:center;
    Color: black}
    a{text-decoration:none}</style></head>
    <body><h1>Esta es la lista del equipo de Marketing</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionMarketing}</p></li></ul></body></html>`);
});
app.get("/developers", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lista de developers</title>
    <style>
    body{background-color: blue;
        text-align:center;
    Color: white}
    a{text-decoration:none}</style></head>
    <body><h1>Esta es la lista del eeeequipo de developers</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionDevelopers}</p></li></ul></body></html>`);
});
app.get("/QAs", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lista de QAs</title>
     
    <style>
    body{background-color: pink;
        text-align:center;
    Color: yellow}
    a{text-decoration:none}</style></head>
    <body><h1>Esta es la lista del equipo de QAs</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionQAs}</p></li></ul></body></html>`);
});
app.get("/ventas", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lista de ventas</title>
    <style>
    body{background-color: green;
        text-align:center;
    Color: black}
    a{text-decoration:none}</style></head>
    <body><h1>Esta es la lista del equipo de ventas</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionVentas}</p></li></ul></body></html>`);
});
app.use((req, res) => {
    res.status(404).send("<h1>Pagina no encontrada 404</h1><a href='/'>Home</a>");
});
app.listen(3000, () => {
    console.log("Express se esta ejectuando en el http://localhost:3000");
});

