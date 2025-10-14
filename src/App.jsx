import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {

  const arrayProductos = [
    { nombre: "Remera", precio: 15000, descripcion: "Azul manga corta", id: 1 },
    { nombre: "Pantalon", precio: 30000, descripcion: "Verde camuflada", id: 2 },
    { nombre: "Gorra", precio: 20000, descripcion: "De equipe de futbol", id: 3 },
  ];


  return (
    <>
      <div>
        <Header />
        <ItemListContainer
          titulo={"Listado de productos"}
          productos={arrayProductos}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
