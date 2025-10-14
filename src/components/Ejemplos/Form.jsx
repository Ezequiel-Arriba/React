import { useState } from "react";

export const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = () => {
    alert(
        "Esta funcionando, espero"

    );
    setNombre("");
    setEmail("");
    setPassword("");
}

    return <form onSubmit={ handleSubmit }>
        <input type="text"
            placeholder="Ingrese Nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <input
            type="email"
            placeholder="Ingrese Email"
            name="email"
            value={email}
            onChange={ (e) =>  setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Ingrese Password"
            name="pass"
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
        />
        <input type="submit" value={"Enviar"} />
    </form>



}