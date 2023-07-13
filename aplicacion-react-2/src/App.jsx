import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TodoForm from "./components/todo-form/TodoForm";
import TodoTable from "./components/todo-table/TodoTable";

function App() {
  return (
    <>
      {/* componente header */}
      <Header />
      {/* componente div para usar como marco principal de la pagina */}
      <div id="main">
        {/* componente input y el boton que nos permite poder ingresar tareas */}
        <TodoForm />
        {/* componente table que nos permite mostrar las tareas que se han ingresado */}
        <TodoTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
