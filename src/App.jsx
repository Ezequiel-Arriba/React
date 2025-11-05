import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<p> Tela inicial va a ser el Home de la enpresa la pagina de apresentacion </p>}
          />
          <Route
            path='/products'
            element={<ItemListContainer titulo={"Productos"} />}
          />
          <Route
            path='/products/detail/:id'
            element={<ItemDetailContainer titulo={"Detalles del Producto"} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
