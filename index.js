class Usuario {

    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getfullName(){
        //retorna el completo del usuario, utilizar template strings.
        return console.log(`El nombre completo del usuario es ${this.nombre} ${this.apellido}`);

    }
    addMascota(mascota){
        //recibe un nombre de masctoa y lo agrega al array de mascotas
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }
    countMascotas(){
        //retorna la cantidad de mascotas q tiene el usuario
        return console.log(this.mascotas.length);
    }
    addBook(titulo, autor){
        //recibe un string nombre y un string autor y debe agregar un objeto {nombre: string, autor: string} ala rray de libros 

        let libroAgregado = {
            titulo: titulo,
            autor: autor
        }

        this.libros.push(libroAgregado);
        console.log(this.libros);
    }
    getBookNames(){
        //retorna un array con solo los nombres del array de librops del usuario.
        let titulos = this.libros.map(e=> e.titulo)
        console.log(titulos);
    }

}
// Punto 4: Crear un objeto llanmado usuario con valores arbitrarios e invocar todos sus metodos.
let nuevoUsuario = new Usuario('Luciano', 'Coscia');
nuevoUsuario.getfullName();
nuevoUsuario.addMascota('gato');
nuevoUsuario.countMascotas();
nuevoUsuario.addMascota('perro');
nuevoUsuario.countMascotas();
nuevoUsuario.addBook('El Principito', 'Pepe argento');
nuevoUsuario.addBook('Narnia', 'Pepe Wash');
nuevoUsuario.getBookNames()


