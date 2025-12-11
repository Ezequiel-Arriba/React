import { Navigate } from "react-router-dom";
import { UseAuthContext } from "../../context/AuthContext/UseAuthContext.js";

export const RutaProtegida = ({ children }) => {
    const { user } = UseAuthContext();

    if (!user) {
        return <Navigate to="/" replace/>
    }

    return children;
}