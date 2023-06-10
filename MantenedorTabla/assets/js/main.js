// Constante con arreglo para almacenar todas los datos
const personList = [];

// Crear clase que represente la entidad del formulario
class Person {
  constructor(email, firstName, lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.lastName + ", " + this.firstName;
  }
}

// Contar un metodo que muestre la lista de datos en la tabla HTML
const showData = () => {
  // obtener la tabla del documento HTML
  const objectTableHTML = document.getElementById('personlist');
  // limpiar contenido de la tabla y asignar las cabeceras
  let tableHTML = `<tr>
                      <th>Email</th>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th></th>
                    </tr>`;
  // crear las filas para la tabla HTML con los objetos del arreglo
  for (let i = 0; i < personList.length; i++) {
    tableHTML = tableHTML + `<tr>
                              <td>${personList[i].email}</td>
                              <td>${personList[i].firstName}</td>
                              <td>${personList[i].lastName}</td>
                              <td><a href="#">Editar</a> | 
                              <a href="#" onclick="deletePerson('${personList[i].email}')">Eliminar</a></td>
                            </tr>`
  }
  // cargar el string con el HTML de la tabla a la tabla del documento
  objectTableHTML.innerHTML = tableHTML;
};

// funcion para agregar personas al arreglo global
const addPerson = () => {
  // validacion de dato unico
  if (personList.findIndex((item) => item.email === document.getElementById('email').value)>=0)
    alert('No se puede ingresar un correo existente.');
  else {
    // definir objeto persona a partir de la clase
    const person = new Person();
    person.email = document.getElementById('email').value;
    person.firstName = document.getElementById('firstName').value;
    person.lastName = document.getElementById('lastName').value;
    personList.push(person);
  }
  // lamada al metodo que llena la tabla HTML para que aparezca el nuevo dato
  showData();
};

// funcion para eliminar datos del arreglo
const deletePerson = (email) => {
  // funcion javascript para confirmar la eliminacion
  if(confirm('Esta seguro de eliminar el registro?')) {
    // buscar indice del dato
    const indexPerson = personList.findIndex((item) => item.email === email);
    // eliminar dato del arreglo
    personList.splice(indexPerson, 1);
  }
  // llamar a la funcion que dibuja o renderiza la tabla en el HTML
  showData();
};


// llamada inicial a la metodo que llena la tabla HTML con el arreglo de objetos
showData();
