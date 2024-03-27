import {useAuthContext} from "../context/authContext";
import {Form} from "../components/Form/Form";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const {login} = useAuthContext();

    const loginHandler = async ({email, password}) => {
        const payload = {email, password};

        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            })
            const {id, email} = await response.json()

            login({id, email})

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <main className="container">
            <h1>Вход</h1>

            <Form
                buttonText="Войти"
                submitHandler={loginHandler}
            />

            <Link to={'/registration'}>Регистрация</Link>
        </main>
    );
}