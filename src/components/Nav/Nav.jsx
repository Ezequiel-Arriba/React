import { Link } from 'react-router-dom';
export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={""}> Home </Link>
                    
                </li>
                <li>
                    <Link to={"/products"}> Productos </Link>
                </li>
                <li>
                    <Link to={""}> Servicios </Link>
                    
                </li>
                <li>
                    <Link to={""}> Enpresa </Link>
                    
                </li>
                <li>
                    <Link to={""}> Contacto </Link>
                    
                </li>
            </ul>
        </nav>
    );
};