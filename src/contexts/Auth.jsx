import { useState, createContext } from "react";
import { redirect } from "react-router-dom";


export const AuthContext = createContext();

const storedToken = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem("user"));

    return { token, user}
}

const AuthContextProvider = (props) => {

    const tokenData = storedToken();

    let initToken = null;
    let initUser = null;

    if (tokenData) {
        initToken = tokenData.token;
        initUser = tokenData.user;
    }

    const [token, setToken] = useState(initToken);
    const [user , setUser] = useState(initUser);

    const isUserLogin = !!token;

    const logoutHandler = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        redirect("/");
        
    }

    const loginHandler = (user, token) => {
        setToken(token);
        setUser(user);

        localStorage.setItem('token', token);
        localStorage.setItem('user' , JSON.stringify(user));

    }

    const authContextValue = {
      token: token,
      user: user,
      isLoggedIn: isUserLogin,
      login: loginHandler,
      logout: logoutHandler,
    };

    return (
      <AuthContext.Provider value={authContextValue}>
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthContextProvider;