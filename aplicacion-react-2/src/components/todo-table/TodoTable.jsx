import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

// Inicio del componente funcional
const TodoTable = () => {
  // se define el hook useSate que nos permite manejar los valores del localstorage en el componente
  const [todoList, setTodoList] = useState([]);

  // se define el hook useEffect para cargar la data del localstorage en el estado (todoList)
  // todo esto al momento de cargar el componente
  useEffect(() => {
    // se recupera la data que se encuentra almacenada en el localstorage
    // adicionalmente se convierte la data a formato JSON
    // tambien se considera que en caso de no existir la data se muestra un arreglo vacio
    const data = JSON.parse(localStorage.getItem("todoList") || "[]");
    // se asigna la data al estado (todoList)
    setTodoList(data);
  }, []);

  return (
    <Table striped bordered hover>
      {" "}
      {/* se muestra el componente table */}
      <thead>
        <tr>
          <th>Todo</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {/* se utiliza el metodo map para recorrer el arreglo de datos */}
        {todoList.map((item, index) => (
          <tr key={index}>
            {" "}
            {/* se necesita asignar el indice cada una de filas */}
            <td>{item.todo}</td>
            <td>{item.completed ? "Completada" : "En progreso"}</td>{" "}
            {/* en este caso como el atributo completed es boolean se realiza la consulta para decidir que texto mostrar */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoTable;
