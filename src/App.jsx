import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {

  return (


    <>
      <div>
        <Header />
        <ItemListContainer
          titulo={"Listado de productos"}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
