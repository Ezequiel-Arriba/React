export const Button = ({ texto, color }) => {
    const estilos = {
        backgroundColor: color,
        color: "white",

    };

    return <button style={estilos}>{texto}</button>;

};