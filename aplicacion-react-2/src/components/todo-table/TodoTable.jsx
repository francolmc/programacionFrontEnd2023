import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

// Inicio del componente funcional
const TodoTable = () => {
  // se define el hook useSate que nos permite manejar los valores del localstorage en el componente
  const [todoList, setTodoList] = useState([]);

  // se define el hook useEffect para cargar la data del localstorage en el estado (todoList)
  // todo esto al momento de cargar el componente
  useEffect(() => {
    const refreshTable = () => {
      // se recupera la data que se encuentra almacenada en el localstorage
      // adicionalmente se convierte la data a formato JSON
      // tambien se considera que en caso de no existir la data se muestra un arreglo vacio
      const data = JSON.parse(localStorage.getItem("todoList") || "[]");
      // se asigna la data al estado (todoList)
      setTodoList(data);
    };

    refreshTable();
    // Se deja un escucha para el evento storage que sera disparado por el formulario
    window.addEventListener("storage", () => refreshTable());
    return () => window.removeEventListener("storage", () => refreshTable());
  }, []);

  // TODO: metodo para completar tarea
  const completeTodo = (todo) => {
    const data = JSON.parse(localStorage.getItem("todoList") || "[]");
    const todoIndex = data.findIndex((item) => item.todo === todo);
    data[todoIndex].completed = !data[todoIndex].completed;
    localStorage.setItem("todoList", JSON.stringify(data));
    setTodoList(data);
  };
  // TODO: metodo para eliminar tarea
  const deleteTodo = (todo) => {
    let data = JSON.parse(localStorage.getItem("todoList") || "[]");
    const todoIndex = data.findIndex((item) => item.todo === todo);
    data.splice(todoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(data));
    setTodoList(data);
  };
  // TODO: metodo para filtrar entre mostrar todo o solo taras por completar
  const filterTodo = (completed) => {
    const data = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodoList(data.filter((item) => item.completed === completed));
  };

  return (
    <div>
      <Form.Check
        onChange={(e) => filterTodo(e.target.checked)}
        label={"Mostrar completadas"}
      />
      <Table striped bordered hover>
        {/* se muestra el componente table */}
        <thead>
          <tr>
            <th>Todo</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* se utiliza el metodo map para recorrer el arreglo de datos */}
          {todoList.map((item, index) => (
            <tr key={index}>
              {/* se necesita asignar el indice cada una de filas */}
              <td>{item.todo}</td>
              <td>
                <Form.Check
                  checked={item.completed}
                  onChange={() => completeTodo(item.todo)}
                ></Form.Check>
              </td>
              {/* en este caso como el atributo completed es boolean se realiza la consulta para decidir que texto mostrar */}
              <td>
                <Button variant="danger" onClick={() => deleteTodo(item.todo)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoTable;
