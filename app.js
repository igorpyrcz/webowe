const express = require('express')
const app = express()
const port = 3000

let mojazmienna = "Komputer";
let licznik = 0;
let listaaut = new Array();


app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.get('/Tomek3', (req, res) => {
  res.send('Auta: ' + listaaut)
})

app.get('/Tomek4', (req, res) => {
  listaaut.push("VW Passat")
  res.send('Dodano nowe auto ' + listaaut)
})

app.get('/Tomek5', (req, res) => {
  listaaut.push("Seat Exeo")
  res.send('Dodano nowe auto ' + listaaut)
})

app.get('/Tomek6', (req, res) => {
  listaaut.push("Audi A4")
  res.send('Dodano nowe auto ' + listaaut)
})

app.get('/Tomek7', (req, res) => {
  console.log(req.query.key)
  listaaut.splice(0, 1)
  res.send('Usunięto auto ')
})

app.get('/Tomek/:id', (req, res) => {
  console.log(req.params.id)
  res.send('Witaj ' + mojazmienna + " " + licznik)
})

app.get('/Tomek2', (req, res) => {
  licznik++
  res.send('Witaj ' + mojazmienna)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


