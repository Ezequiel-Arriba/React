import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  const arrayProductos = [
    { nombre: "Remera", precio: 15000, descripcion: "Azul manga corta" },
    { nombre: "Pantalon", precio: 30000, descripcion: "Verde camuflada" },
    { nombre: "Gorra", precio: 20000, descripcion: "De equipe de futbol" },
  ];
  
    
  return (
    <>
      <div>
        <Header />
        <ItemListContainer 
          titulo={"Bien venidos"} 
          Productos={arrayProductos}/>
        <Footer />
      </div>
    </>
  )
}

export default App
