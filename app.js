const express = require("express")
const app = express()
app.get("/", ((req, res) => {
    res.send("<h1>Esta es la pagina principal</h1><ul><li><a href='/marketing'>Marketing</a></li><li><a href='/developers'>Developers</a></li><li><a href='/QAs'>QAs</li><li></a><a href='/ventas'>Ventas</a></li></ul>")
}))
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
    <body><h1>Esta es la lista del equipo de Marketing</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionMarketing}</p></li></ul></body></html>`)
})
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
    <body><h1>Esta es la lista del equipo de developers</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionDevelopers}</p></li></ul></body></html>`)
})
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
    Color: white}
    a{text-decoration:none}</style></head>
    <body><h1>Esta es la lista del equipo de QAs</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionQAs}</p></li></ul></body></html>`)
})
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
    <body><h1>Esta es la lista del equipo de ventas</h1><a href='/'>Home</a><p><ul><li>${sinPuntuacionVentas}</p></li></ul></body></html>`)
})
app.use((req, res) => {
    res.status(404).send("<h1>Pagina no encontrada 404</h1><a href='/'>Home</a>")
})
app.listen(3000, () => {
    console.log("Express se esta ejectuando en el http://localhost:3000")
})



const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


function filtrar(especialidad) {
    return usersData.filter(element => element.specialty === especialidad)
}

const ventas = filtrar("ventas")
const developers = filtrar("developers")
const marketing = filtrar("marketing")
const QAs = filtrar("QAs")
let cadenaJsonVentas = JSON.stringify(ventas)
let cadenaJsonDevelopers = JSON.stringify(developers)
let cadenaJsonMarketing = JSON.stringify(marketing)
let cadenaJsonQAs = JSON.stringify(QAs)
let sinPuntuacionVentas = cadenaJsonVentas.replaceAll(/[\[\]"]+/g, ' ', " ")
let sinPuntuacionDevelopers = cadenaJsonDevelopers.replaceAll(/[\[\]"]+/g, ' ', " ")
let sinPuntuacionMarketing = cadenaJsonMarketing.replaceAll(/[\[\]"]+/g, ' ', " ")
let sinPuntuacionQAs = cadenaJsonQAs.replaceAll(/[\[\]"]+/g, ' ', " ")
