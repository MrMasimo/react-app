import {Link, useNavigate} from "react-router-dom";
import {Form} from "../components/Form/Form";

export const RegistrationPage = () => {
    const navigate = useNavigate();

    const registrationHandler = async (email, password) => {
        const payload = {email, password};

        try {
            await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            })
            navigate('/login')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <main className="container">
            <h1>Регистрация</h1>

            <Form
                buttonText="Зарегистрироваться"
                submitHandler={registrationHandler}
            />

            <Link to={'/login'}>Вход</Link>
        </main>
    );
}