const fs = require('fs');

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  
  async save(producto) {
    try  {
    
    //  intenta leer el archivo, si el archivo no existe va al catch, lo crea y vuelve a ejecutarse
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
    
                       
      let productos = [];
    
      // 2 determinar el id nuevo

      // si esta vacio el archivo, id = 1
      if (contenido === '') {
        producto.id = 1;
        productos.push(producto);


        
      } else {
        // si no esta vacio el archivo, id ultimo mas 1
        const listaDeProductos = JSON.parse(contenido);
    
        producto.id = listaDeProductos[listaDeProductos.length - 1].id + 1;
        listaDeProductos.push(producto);
        productos = listaDeProductos;
      }
  
      // 3 guardar el producto nuevo con el id asignado
      const stringProductos = JSON.stringify(productos, null, 2);
      await fs.promises.writeFile(`./${this.file}`, stringProductos);

      // 4 retornar el id creado
      return producto.id;
    } catch (error) {
          // si el archivo no existe, lo crea y vuelve a ejecutar el metodo
          await fs.promises.writeFile(`./${this.file}`,'');  
          this.save(producto)
          // el return 1 es para que el console log de test.js no devuelva undefined
          return 1;
    };
  }


  async getById(numeroId) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8'); 
      const listaDeProductos = JSON.parse(contenido);
        let i;
        for (i=0 ; i<=listaDeProductos.length ; i++){
            if (listaDeProductos[i].id===numeroId) {
                console.log(listaDeProductos[i]);
                return listaDeProductos[i]; 
            }
        }
    } catch (error) {
        console.error('Error:', error);
    };
  }


  async getAll() {
    try {
        const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
        const listaDeProductos = JSON.parse(contenido);
        return listaDeProductos;
    } catch (error) {
        console.error('Error:', error);
    };
  }


  async deleteById(numeroId){
    try {
        const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
        const listaDeProductos = JSON.parse(contenido);
        let i;
        for (i=0 ; i<=listaDeProductos.length ; i++){
            if (listaDeProductos[i].id===numeroId) {
                listaDeProductos.splice((i),1);
                const stringProductos = JSON.stringify(listaDeProductos, null, 2);
                return (await fs.promises.writeFile(`./${this.file}`, stringProductos));
            }
        }
    } catch (error) {
        console.error('Error: el objeto que busca eliminar no existe', error);
    };
  }


  async deleteAll() {
    try {
        await fs.promises.writeFile(`./${this.file}`, '');
    } catch (error) {
        console.error('Error:', error);
    };
  }
}

module.exports = Contenedor;