class Usuario {

    constructor (nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getfullName(){
        //retorna el completo del usuario, utilizar template strings.
        return `El nombre completo del usuario es ${this.nombre} ${this.apellido}`

    }
    addMascota(mascota){
        //recibe un nombre de masctoa y lo agrega al array de mascotas
        this.mascotas.push(mascota);
    }
    countMascotas(){
        //retorna la cantidad de mascotas q tiene el usuario
        return this.mascotas.length
    }
    addBook(nombre, autor){
        //recibe un string nombre y un string autor y debe agregar un objeto {nombre: string, autor: string} ala rray de libros 
        this.libros.push({nombre, autor});
    }
    getBookNames(){
        //retorna un array con solo los nombres del array de librops del usuario.
        return this.libros.map(e=> e.nombre)
    }

}
// Punto 4: Crear un objeto llanmado usuario con valores arbitrarios e invocar todos sus metodos.
let nuevoUsuario = new Usuario('Luciano', 'Coscia',[{nombre: 'Harry Potter', autor: 'Juan Perez'}], ['Perro'] );
console.log(nuevoUsuario.getfullName());

nuevoUsuario.addMascota('gato');
// nuevoUsuario.addMascota('perro');
console.log(nuevoUsuario.countMascotas());

nuevoUsuario.addBook('La vida es Bella', 'Pepe Arroz');
nuevoUsuario.addBook('Narnia', 'Pepe Wash');
console.log(nuevoUsuario.getBookNames());


