import {useEffect, useState, useCallback} from "react";
import {LoginInput} from "./LoginInput";
import Styles from './loginform.module.css';

export const LoginForm = () => {
    const [user, setUser] = useState('')
    const [isUserError, setIsUserError] = useState(false)
    const [email, setEmail] = useState('')
    const [isEmailError, setIsEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [isFormError, setIsFormError] = useState(true)

    const loginHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setIsUserError(!!(user.length && user.length < 4))
    }, [user]);

    useEffect(() => {
        setIsEmailError(!!(email.length && !String(email).toLowerCase().match(/^\S+@\S+\.\S+$/)))
    }, [email]);

    useEffect(() => {
        setIsPasswordError(!!(password.length && password.length < 8))
    }, [password]);

    useEffect(() => {
        setIsFormError(isUserError || isEmailError || isPasswordError || !user.length || !email.length || !password.length)
    }, [user, email, password, isUserError, isEmailError, isPasswordError]);

    const setUserValue = useCallback((value) => {
        setUser(value)
    }, [])
    const setEmailValue = useCallback((value) => {
        setEmail(value)
    }, [])
    const setPasswordValue = useCallback((value) => {
        setPassword(value)
    }, [])
    
    return(
        <div>
            <form action="" className={Styles.login_form} onSubmit= {loginHandler}>

            <h2>Форма регистрации</h2>

            <LoginInput
                name="Имя пользователя"
                type="text"
                value={user}
                setValue={setUserValue}
                isError={isUserError}
            />

            <LoginInput
                name="Почта"
                type="email"
                value={email}
                setValue={setEmailValue}
                isError={isEmailError}
            />

            <LoginInput
                name="Пароль"
                type="password"
                value={password}
                setValue={setPasswordValue}
                isError={isPasswordError}
            />
            <button
                type="submit"
                disabled={isFormError}
            >Зарегистрироваться</button>
            </form>
        </div>
    )
}