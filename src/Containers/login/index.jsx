import React from "react"

import LoginImg from "../../assets/Login_imagem.svg"
import Logo from "../../assets/logo.svg"
import {
  Contanier,
  LoginImagem,
  ContanierItens,
  Label,
  Input,
  Button,
  SignInLink
} from "./styles"

function login() {
  return (
    <Contanier>
      <LoginImagem src={LoginImg} all="login-imagem" />,
      <ContanierItens>
        <img src = {Logo} all="logo-imagem"/>
        <h1>Login</h1>
        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <Button>SignIn</Button>
        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContanierItens>
    </Contanier>
  )
}
export default login
