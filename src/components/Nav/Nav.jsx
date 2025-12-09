import { Link } from 'react-router-dom';
export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                  <Link to={"/"}> Home </Link>

                </li>
                <li>
                  <Link to={"/products"}> Productos </Link>
                </li>
                <li>
                  <Link to={"/servicios"}> Servicios </Link>
                </li>
                <li>
                  <Link to={"/enpresa"}> Enpresa </Link>
                </li>
                <li>
                  <Link to={"/contacto"}> Contacto </Link>
                </li>
            </ul>
        </nav>
    );
};