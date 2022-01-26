/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

import LoginImg from "../../assets/Login_imagem.svg"
import Logo from "../../assets/logo.svg"
import {
  Contanier,
  LoginImage,
  Logo2,
  ContanierItens,
  Label,
  Input,
  Button,
  SignInLink
} from "./styles"

function login() {
  return (
    <Contanier>
      <LoginImage src={LoginImg} all="login-imagem" />,
      <ContanierItens>
        <Logo2 src={Logo} all="logo" />

        <h1>Login</h1>
        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContanierItens>
    </Contanier>
  )
}

export default login
