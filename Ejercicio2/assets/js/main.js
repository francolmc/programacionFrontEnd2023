// Objeto persona
/* const persona = {
    firstName: '',
    lastName: '',
    getInfo: function() {
        return 'Hola yo soy ' + this.firstName + ' ' + this.lastName;
        // return `Hola yo soy ${this.firstName} ${this.lastName}`;
    }
} */

// Funcion constructora
function ClasePersona(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const listaPersonas = [];

const agregarPersona = () => {
    // Crear objeto persona
    // const persona = new Object();
    const persona = new ClasePersona(
        document.getElementById('firstName').value, 
        document.getElementById('lastName').value
    );
    // persona.firstName = document.getElementById('firstName').value;
    // persona.lastName = document.getElementById('lastName').value;
    listaPersonas.push(persona);
    mostrarPersonas();
}

const mostrarPersonas = () => {
    console.log(listaPersonas);
}


// Crear objeto con object.create
const estudiante = {
    firstName: '',
    lastName: ''
}

const pablo = Object.create(estudiante);

// La opcion de crear clases
class perro {
    constructor(firstName, raza) {
        this.firstName = firstName;
        this.raza = raza;
    }
}

const pastelito = new perro('pastelito', 'pug');