class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    
     getFullName(){
        return (`${this.nombre} ${this.apellido}`);        
    }
    
    
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    
    
    countMascotas(){
        return this.mascotas.length;
    }
    
    
    addBook(nombre, autor){
        this.libros.push(
            {
                nombre: nombre,
                autor: autor
            }
        )
    }
    
    
    getBookNames(){
        return(this.libros.map(({ nombre }) => nombre));
    }
  
  }
  
  
  
  const usuario = new Usuario('Agustin',
                              'Curieses',
                              [{nombre: 'Harry potter', autor: 'JK rowling'}],
                              ['perros', 'gatos','rana']);
  
  let nombreCompleto = usuario.getFullName();
          console.log(nombreCompleto);
  
  usuario.addMascota('carpincho');
  
  let cantidadMascotas = usuario.countMascotas();
          console.log(cantidadMascotas);
  
  usuario.addBook('It','Stephen King');
  
  let nombresLibros = usuario.getBookNames();
          console.log(nombresLibros);
  
  console.log(usuario);