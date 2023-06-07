const persona = {
    firstName: '',
    lastName: '',
    age: 0,
    getInfo: function() {
        return 'Soy ' + this.firstName + ' ' + this.lastName + ' y tengo ' + this.age + ' años.';
    }
};

const completarInformacion = () => {
    persona.firstName = document.getElementById('firstName').value;
    persona.lastName = document.getElementById('lastName').value;
    persona.age = document.getElementById('age').value;
    alert('La informacion fue registrada.')
}

const obtenerInformacion = () => {
    alert(persona.getInfo());
}