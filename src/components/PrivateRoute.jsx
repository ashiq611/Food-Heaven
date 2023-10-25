import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    return isLoggedIn ? children : <Navigate to='/' />
};

export default PrivateRoute;