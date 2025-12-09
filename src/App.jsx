import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'


function App() {

  return (
    <>

      <div>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer />} 
            />
          <Route
            path='/products/:category'
            element={<ItemListContainer />} 
            />
          <Route
            path='/products/detail/:id'
            element={<ItemDetailContainer titulo={"Detalles del Producto"} />} />
          <Route path='/carrito' element={<Cart />} >
          </Route>
        </Routes>


        <Footer />
      </div>

    </>
  )
}

export default App
