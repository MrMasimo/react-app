import '../../app.scss';
import {Provider} from "react-redux";
import {store} from "../../store";
import HomePage from "../../pages/HomePage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {RegistrationPage} from "../../pages/RegistrationPage";
import {LoginPage} from "../../pages/LoginPage";
import {AuthProvider, useAuthContext} from "../../context/authContext";
import {Header} from "../Header/Header";

const PrivateRoute = ({children}) => {
    const { isLogin } = useAuthContext()
    if (!isLogin) {
        return <Navigate to="/login"/>
    }

    return children
}

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Provider store={store}>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
                        <Route path="/registration" element={<RegistrationPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </Provider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;