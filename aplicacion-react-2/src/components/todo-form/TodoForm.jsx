import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = () => {
  // Se define el hook useState para almacenar el estado del valor del cuadro de texto
  const [todo, setTodo] = useState("");
  const [message, setMessage] = useState("");

  // Esta funcion se define para guardar la tarea en el localstorage
  const saveTodo = () => {
    // primero se recupera la data del localstorage que deberia ser un JSON es por esto que se realiza la conversion de string a JSON
    const data = JSON.parse(localStorage.getItem("todoList") || "[]");
    // TODO: agregar validacion para no ingresar la misma tarea repetida
    // ahora se agrega la tarea a la data entregando como parametro un objecto JSON con los datos de la tarea
    if (data.findIndex((item) => item.todo === todo) >= 0) {
      setMessage("El registro ya existe");
    } else {
      data.push({
        todo,
        completed: false, // inicialmente las tareas ingresadas tiene su estado completed en false
      });
      setMessage("");
    }
    // finalmente se convirte el arreglo de objectos JSON a string y se guarda en el localstorage de regreso
    localStorage.setItem("todoList", JSON.stringify(data)
    setTodo("");
    // disparar evento para la actualizacion de la tabla
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      {/* se muestra todo lo necesario para mostrar lo requerido en el componente */}
      <h5>Formulario Todo</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el titulo de la tarea"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />{" "}
          {/* en este caso se hace uso del evento onChange para guardar el valor del input en el estado (todo) */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="secondary" onClick={saveTodo}>
            Guardar tarea
          </Button>
          {/* este es el boton que llama al metodo para guardar la tarea */}
        </Form.Group>
        <Form.Group>
          {message !== "" ? <div style={{ color: "red" }}>{message}</div> : ""}
        </Form.Group>
      </Form>
    </>
  );
};

export default TodoForm;
