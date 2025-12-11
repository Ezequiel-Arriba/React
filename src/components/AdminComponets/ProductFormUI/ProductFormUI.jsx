

export const ProductFormUI = ({
     product,
     errors,
     loading,
     onChange,
     onFileChange,
     onSubmit,
    }) => {
    return (
        <section>
            <form onSubmit={onSubmit}>
            <h2>Agregar producto</h2>
            <div>
                <label >Nombre: </label>
                <input type="text" name="name" value={product.name} onChange={onChange} required /> 
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                
            </div>
            <div>
                <label >Precio:</label>
                <input type="number" name="price" value={product.price} onChange={onChange} min="0" required />
                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
            </div>
            <div>
                <label >Categoria:</label>
                <input type="text" name="category" value={product.category} onChange={onChange} required/>
                {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
            </div>
            <div>
                <label >Descripcion:</label>
                <textarea name="description" value={product.description} onChange={onChange} required/>
                {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
            </div>
            <div>
                <label >Imagen:</label>
                <input type="file" name="image" onChange={(e)=> onFileChange(e.target.files?.[0] ?? null)} accept="image/*" required />
                {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Cargar Producto'}

            </button>
            </form>
            
        </section>
    )

}