/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { useForm } from "react-hook-form"

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Contanier>
      <LoginImage src={LoginImg} all="login-imagem" />,
      <ContanierItens>
        <Logo2 src={Logo} all="logo" />

        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("emails")} />

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />

          <Button type="Sumit">Sign In</Button>
        </form>

        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContanierItens>
    </Contanier>
  )
}

export default login
