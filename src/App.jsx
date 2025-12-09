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
          <Route
            path='/servicios'
            element={<p> Tela de servicios va a ser la pagina de servicios que ofrece la empresa </p>}
          />
          <Route
            path='/enpresa'
            element={<p> Tela que explica el historico y objetivos de la enpresa </p>}
          />
          <Route
            path='/contacto'
            element={<p> Tela que va mostrar los contactos de la enpresa </p>}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
