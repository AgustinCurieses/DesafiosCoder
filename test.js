const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('productos.json');

const producto = 
{
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    }

const main = async () => {
    const id = await contenedor.save(producto);
    console.log(`El ebjeto se guardo con la ID: ${id}`);

    const consulta = await contenedor.getById(10);

    const listaCompleta = await contenedor.getAll();
    console.log(listaCompleta);

    await contenedor.deleteById(3);

    await contenedor.deleteAll();
};

main();