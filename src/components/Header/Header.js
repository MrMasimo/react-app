import {useAuthContext} from "../../context/authContext";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const { isLogin, user, logout } = useAuthContext()

    const logoutHandler = () => {
        logout();
        navigate('/login')
    }

    return (
        <header className="header">
            {isLogin && <><div>{JSON.parse(user).email}</div><button onClick={logoutHandler}>Выйти</button></>}
        </header>
    );
}