import { Children } from "react";

export const Item1 = ({nombre, precio, descripcion, children}) => {
    return (
        <article>
            <p>Item 1</p>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
            {children}
        </article>
    );
};