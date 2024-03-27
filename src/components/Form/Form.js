import {useState} from "react";

export const Form = (props) => {
    const {buttonText} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [formError, setFormError] = useState(null)

    const emailChangeHandler = (e) => {
        if (e.target.value.length < 1) {
            setEmailError('Пользователь не может быть пустым')
        } else {
            setEmailError(null)
        }

        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        if (e.target.value.length < 6) {
            setPasswordError('Пароль не должен быть короче 6 символов')
        } else {
            setPasswordError(null)
        }

        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(email&&password){
            props.submitHandler({email, password})
        }else{
            setFormError('Заполните поля')
        }
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={emailChangeHandler} />
                {emailError && <div className="error">{emailError}</div>}
            </div>
            <div>
                <label>Пароль</label>
                <input type="password" name="password" value={password} onChange={passwordChangeHandler} />
                {passwordError && <div className="error">{passwordError}</div>}
            </div>

            <div>
            { formError&&(!email||!password) && <div className="error">{formError}</div>}
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
}