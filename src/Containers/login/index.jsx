/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import LoginImg from "../../assets/Login_imagem.svg"
import Logo from "../../assets/logo.svg"
import Button from "../../components/Button"
import api from "../../services/api"
import {
  Contanier,
  LoginImage,
  Logo2,
  ContanierItens,
  Label,
  Input,
  SignInLink,
  Erromessage
} from "./styles"

function login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email valido")
      .required("O email é obrigado"),
    password: Yup.string()
      .required("A Senha obrigatório")
      .min(6, "A senha deve ter 6 digitos")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post("sessions", {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Contanier>
      <LoginImage src={LoginImg} all="login-imagem" />,
      <ContanierItens>
        <Logo2 src={Logo} all="logo-code-burger" />

        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Erromessage> {errors.email?.message} </Erromessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Erromessage> {errors.password?.message} </Erromessage>

          <Button type="submit" style={{ marginTop: 30, marginBottom: 20 }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContanierItens>
    </Contanier>
  )
}

export default login
