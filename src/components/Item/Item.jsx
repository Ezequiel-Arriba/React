export const Item = ({item, children}) => {
    return (
        <article key={item.id}>
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.precio}</p>
            <p>Descripcion: {item.descripcion}</p>
            {children}
        </article>
    )
}