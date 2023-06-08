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
  personList.push(new Person("prueba@prueba.cl", "Prueba", "Prueba2"));

  // obtener la tabla del documento HTML
  const tableHTML = document.getElementById('personlist');
    console.log(tableHTML);
  // limpiar contenido de la tabla
  tableHTML.innerHTML = "";
  for (let i = 0; i < personList.length; i++) {
    const rowTableHTML = document.createElement("tr");
    const colTableHTML = document.createElement("td");
    colTableHTML.classList.add(this.personList[i].email);
    rowTableHTML.appendChild(colTableHTML);
    tableHTML.appendChild(rowTableHTML);
  }
};

showData();
