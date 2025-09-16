import './App.css'
import { Button } from './components/Button';
import { Item1 } from './components/Item1';
import { Item2 } from './components/Item2';
import { Item3 } from './components/Item3';
import { Item4 } from './components/Item4';
import { Item5 } from './components/Item5';
import { Item6 } from './components/Item6';

function App() {
  const prod = { nombre: "Remera", precio: 3000, descripcion: "Azul manga corta" };
  return (
    <>
      <div>
        <Button texto={"Enviar"} color={"green"} />
        <Button texto={"Cancelar"} color={"red"} />

        <Item1
          nombre={prod.nombre}
          precio={prod.precio}
          descripcion={prod.descripcion}
        >
          <button>es un boton</button>
        </Item1>

        <Item2 item={prod} />
        <Item3 {...prod} />
        <Item4 {...prod} destacado={true} />

        <Item5>
          <h1>Tiene Childrens</h1>
          <p>Item 5</p>
          <p>{prod.nombre}</p>
          <p>{prod.precio}</p>
          <p>{prod.descripcion}</p>
        </Item5>

        <Item6 nombre="Pantalon" precio="15000" />
      </div>
    </>
  )
}

export default App
