import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';

import { Container, Form } from "./styles";

import Logo from "../../assets/logo.svg";

export default function SignUp() {
    const history = useHistory();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleRegister() {
        const UserRegistration = {
            name,
            email,
            password
        }

        localStorage.setItem("@Caped:UserRegistration", JSON.stringify(UserRegistration))

        setName("");
        setEmail("");
        setPassword("");
        
        history.push('/sign-in');
        
        return (alert("Cadastrado com sucesso! Faça o login para finalizar a sua compra. 🤗"));
    }

    return (
        <Container>
            <img src={Logo} alt="Logo Caped" />
            <h1>Cadastre-se</h1>

            <Form>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                
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

                <button onClick={handleRegister}>Cadastrar</button>
            </Form>

            <Link to="/">Voltar</Link>
        </Container>
    )
}