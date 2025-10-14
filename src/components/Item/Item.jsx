import "./Item.css";

export const Item = ({ item, children }) => {
    return (
        <article key={item.id} className="product-item">
            <h2 className="product-title">{item.name}</h2>
            <p>Precio: U$S {item.price}</p>
            <p>Categoria: {item.category}</p>
            <p>Descripcion: {item.description}</p>
            <img src={item.imageUrl} alt="100px" />

            {children}
        </article>
    )
}