import { useState } from "react";
import { UseAuthContext } from "../../context/AuthContext/UseAuthContext.js";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUserForm] = useState({name: "", password: ""});

    const {user , login} = UseAuthContext();

    const navigate = useNavigate()

    if (user) {
        return <Navigate to ="/admin/agregar-producto" replace />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const sucess = login(userForm.name, userForm.password);

        if(sucess) {
            navigate("/admin/agregar-producto");
        }else {
            alert("Credenciales incorrectas");
            setUserForm({name: "", password: ""});
        }
        
    }

    return <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div>
            <label>Nombre de usuario:</label>
            <input 
                type="text"
                name="name"
                value={userForm.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input 
                type="password"
                name="password"
                value={userForm.password}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Iniciar sesión</button>

    </form>
}
