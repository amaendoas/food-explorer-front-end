import * as C from "./styles";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt="logo" />
      </C.Logo>
      <C.Content>
        <h1>Crie sua conta</h1>
        <Input
        title="Nome"
        placeholder="Exemplo: Maria da Silva"
        type="text"
        />
        <Input
        title="Email"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        type="email"
        />
        <Input
        title="Senha"
        placeholder="Mínimo 6 caracteres"
        type="password"
        />
      <Button title="Criar Conta"/>
      <Link to="/">
        Já tenho uma conta
      </Link>
      </C.Content>
    </C.Container>
  )
};