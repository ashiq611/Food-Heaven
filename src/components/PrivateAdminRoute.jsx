import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { Navigate } from "react-router-dom";


const PrivateAdminRoute = ({children}) => {

    const authContext = useContext(AuthContext);

    const isLoggedIn = authContext.isLoggedIn;
    const role = authContext?.user?.special_user;

    return (
        isLoggedIn && (role && (role === 'admin' || role === 'super-admin')) ? children : <Navigate to='/' />
    );
};

export default PrivateAdminRoute;