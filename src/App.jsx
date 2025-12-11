import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/AdminComponets/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './Layouts/MainLayout.jsx'
import { AdminLayout } from './Layouts/AdminLayout.jsx'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login.jsx'

function App() {

  return (
    <>

      <div>
        
        <Routes>

          <Route element={<MainLayout />}>
            <Route
              path='/'
              element={<ItemListContainer />}
            />
            <Route
              path='/products/:category'
              element={<ItemListContainer />}
            />
            <Route path='/products/detail/:id' element={<ItemDetailContainer titulo={"Detalles del Producto"} />} />
            <Route path='/carrito' element={<Cart />} />
          </Route>


          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />
            
            <Route 
              path="agregar-producto" 
              element={
              <RutaProtegida>
                <ProductFormContainer />
              </RutaProtegida>
            }
            />

            
          </Route>
        </Routes>


        <Footer />
      </div>

    </>
  )
}

export default App
