import ContadorClassComponent from './components/ContadorClassComponent'
import SaludoClassComponent from './components/SaludoClassComponent'
import Contador from './components/contador'
import Saludo from './components/saludo'

function App() {
  return (
    <>
      <Saludo username="Franco" />
      <SaludoClassComponent username="Daniel" />
      <h3>Componente funcional</h3>
      <Contador />
      <h3>Componente de clase</h3>
      <ContadorClassComponent />
    </>
  )
}

export default App
