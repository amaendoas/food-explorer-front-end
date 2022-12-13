import * as C from "./styles";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }


  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt="logo" />
      </C.Logo>
      <C.Content>
        <h1>Faça seu login</h1>
        <Input
        title="Email"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        type="email"
        onChange={e => setEmail(e.target.value)}
        />
        <Input
        title="Senha"
        placeholder="Mínimo 6 caracteres"
        type="password"
        onChange={e => setPassword(e.target.value)}
        />
      <Button title="Entrar" onClick={handleSignIn}/>
      <Link to="/signup">
        Criar uma conta
      </Link>
      </C.Content>
    </C.Container>
  )
};