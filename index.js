const express = require('express');
const server = express();

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.json');

const PORT = 8080;

const getRandom = (max) => Math.round(Math.random() * max);


// endpoint inicial
const PATH = '/';
const pathInit = (req, res, next) => {
  res.send({ mensaje: 'Bienvenidos al desafio n°3'});
};
server.get(PATH, pathInit);


// endpoint /productos
server.get('/productos', async (req, res) => {
    const products = await contenedor.getAll();
    res.json(products);
});


// endpoint /productoRandom
server.get('/productoRandom', async (req, res) => {
    const product = await contenedor.getAll();
    res.json(product[getRandom(product.length - 1)])
});


// se levanta el server
const serverOn = () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
};
server.listen(PORT, serverOn);


// errores
server.on('error', (error) => console.log('Ha ocurrido un error: ', error));