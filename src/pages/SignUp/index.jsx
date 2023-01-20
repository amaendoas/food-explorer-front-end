import * as C from "./styles";
import { useState } from "react";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Alert } from "../../components/Alert";
import { useAuth } from "../../contexts/auth";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { success, alertMsg, setAlertMsg, setSuccess } = useAuth();

  function clearInputs() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = '')
  }

  async function handleSignUp() {
    if(!name || !email || !password) {
        setAlertMsg('Preencha todos os campos!')
        setSuccess(false)
        return
    }

    try {
      await api.post("/users", { name, email, password })
      setAlertMsg('Usuário cadastrado com sucesso!')
      setSuccess(true)
      clearInputs()
      navigate("/")
    } catch(error) {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg("Não foi possível cadastrar")
        setSuccess(false)
      }
    }

  }

  return (
    <C.Container>
      <Alert msg={alertMsg} isSuccess={success}/>
      <C.Logo>
        <img src={logo} alt="logo" />
      </C.Logo>
      <C.Content>
        <C.SignUp>
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
        </C.SignUp>
      </C.Content>
    </C.Container>
  )
};