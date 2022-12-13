import * as C from "./styles";
import { useState } from "react";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function clearInputs() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = '')
  }

  async function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    try {
      await api.post("/users", { name, email, password })
      alert('Usuário cadastrado com sucesso!')
      clearInputs()
      navigate("/")
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    }

  }

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
        onChange={e => setName(e.target.value)}
        />
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
      <Button title="Criar Conta" onClick={handleSignUp}/>
      <Link to="/">
        Já tenho uma conta
      </Link>
      </C.Content>
    </C.Container>
  )
};