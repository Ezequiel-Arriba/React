export const Boton = ({ texto, color }) => {
    const estilos = {
        backgroundColor: color,
        color: 'white',

    };
    const saludar = () => {
        alert("Hola Ezequiel!!!");
    };
    return (
        <button style={estilos} onClick={saludar}>{texto}</button>
    );
};
