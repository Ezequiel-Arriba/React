import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/useCartContext';

export const Nav = () => {
  const {getTotalItems} = useCartContext();
    return (
        <nav>
            <ul>
                <li>
                  <Link to={"/"}> Home </Link>
                </li>
                <li>
                  <Link to={"products/equipos"}> Equipamentos</Link>
                </li>
                <li>
                  <Link to={"products/controldeplagas"}> Control de Plagas  </Link>
                </li>
                <li>
                  <Link to={"/enpresa"}> Enpresa </Link>
                </li>
                <li>
                  <Link to={"/contacto"}> Contacto </Link>
                </li>
                <li>
                  <Link to={"/carrito"}> Carrito</Link>
                  {getTotalItems() > 0 && (
                    <span> {getTotalItems()} </span>
                  )}
                                    
                </li>
            </ul>
        </nav>
    );
};