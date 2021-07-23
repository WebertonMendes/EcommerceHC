import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';

import { Container, Form } from "./styles";

import Logo from "../../assets/logo.svg";

export default function SignIn() {
    const history = useHistory();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleLogin() {
        const UserData = { email, password }
        const user = JSON.parse(localStorage.getItem("@Caped:UserRegistration"));

        if (
            user.email !== UserData.email ||
            user.password !== UserData.password
        ) {
            history.push('/sign-in');
            return alert("Usuário ou senha incorretos, tente novamente! 😨")
        }
        
        const productsInCart = JSON.parse(localStorage.getItem("@Caped:CartProduct"));

        if (productsInCart.length > 0) {
            history.push('/cart')
        } else {
            history.push('/store');
        
            return (alert("Seja bem vindo(a) parceiro(a)! 🤗"));
        }
    }

    return (
        <Container>
            <img src={Logo} alt="Logo Caped" />
            <h1>Faça o login</h1>

            <Form>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                
                <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit" onClick={handleLogin}>Login</button>
            </Form>

            <Link to="/">Voltar</Link>
        </Container>
    )
}