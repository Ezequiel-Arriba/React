import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";

export const UseAuthContext = () => {
    return useContext (AuthContext);
}