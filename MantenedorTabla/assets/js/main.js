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
const showData = (dataList) => {
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
  if (dataList && dataList.length > 0) {
    for (let i = 0; i < dataList.length; i++) {
      tableHTML = tableHTML + `<tr>
                                <td>${dataList[i].email}</td>
                                <td>${dataList[i].firstName}</td>
                                <td>${dataList[i].lastName}</td>
                                <td><a href="#" onclick="editPerson('${dataList[i].email}')">Editar</a> | 
                                <a href="#" onclick="deletePerson('${dataList[i].email}')">Eliminar</a></td>
                              </tr>`
    }
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
  showData(personList);
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
  showData(personList);
};

// funcion para realizar la accion de editar
const editPerson = (email) => {
  // limpiar los cuadros de texto
  document.getElementById('email').value = '';
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  // buscar el registro por email
  const index = personList.findIndex((item) => item.email === email);
  // asignar los valores del registro a los cudros de texto
  document.getElementById('email').value = personList[index].email;
  document.getElementById('firstName').value = personList[index].firstName;
  document.getElementById('lastName').value = personList[index].lastName;
  // deshabilitar o dejar en modo lectura el campo email
  document.getElementById('email').disabled = true;
  // Cambiar el boton de agregar por un boton actualizar
  document.getElementById('addButton').style.display = 'none';
  document.getElementById('updateButton').style.display = 'inline';
};

// funcion para guardar los datos que se quieren actualizar
const updatePerson = () => {
  // actualizar los datos
  let email = document.getElementById('email').value;
  // buscar el registro
  const index = personList.findIndex((item) => item.email === email);
  personList[index].firstName = document.getElementById('firstName').value;
  personList[index].lastName = document.getElementById('lastName').value;
  // dejar el formulario como estaba, con los cuadros de texto limpios y habilitados,
  document.getElementById('email').disabled = false;
  document.getElementById('email').value = '';
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  // tambien con el boton agregar
  document.getElementById('addButton').style.display = 'inline';
  document.getElementById('updateButton').style.display = 'none';
  alert('El registro fue actualizado.');
  showData(personList);
};

// Buscador de registros
const searchPerson = () => {
  // asignar a constante el valor a buscar contenido en el cuadro de texto
  const textQuery = document.getElementById('searchValue').value;
  // realizar busqueda
  // el metodo find busca un elemento
  /* const result = personList.find((item) => 
    item.email.includes(textQuery) ||
    item.firstName.includes(textQuery) ||
    item.lastName.includes(textQuery)
  );*/
  // El metodo filter, busca todos los elementos
  const result = personList.filter((item) => 
    item.email.includes(textQuery) ||
    item.firstName.includes(textQuery) ||
    item.lastName.includes(textQuery)
  );
  if (result && result.length > 0) {
    if (Array.isArray(result)) {
      // recargar tabla de datos
      showData(result);
    } else {
      // recargar tabla de datos
      showData([result]);
    }
  } else {
    showData([]);
    alert('No hay resultados para la busqueda.');
  }
}

// llamada inicial a la metodo que llena la tabla HTML con el arreglo de objetos
showData(personList);
