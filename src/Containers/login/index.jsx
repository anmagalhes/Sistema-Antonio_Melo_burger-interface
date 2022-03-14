/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

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
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

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
          <p> {errors.email?.message} </p>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />
          <p> {errors.password?.message} </p>

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
