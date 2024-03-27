import {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(window.localStorage.getItem('user') || null)

    const login = (data) => {
        window.localStorage.setItem('user', JSON.stringify(data))
        setUser(JSON.stringify(data));

        navigate('/')
    }
    const logout = () => {
        window.localStorage.removeItem('user')
        setUser(null);
    }

    const isLogin = user !== null

    const authData = {
        user,
        login,
        logout,
        isLogin
    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}