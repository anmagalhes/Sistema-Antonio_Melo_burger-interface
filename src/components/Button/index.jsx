/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react"

import PropTypes from "prop-types"

import { ContanierButton } from "./styles"

export default function Button({ children, ...rest }) {
  return <ContanierButton {...rest}>{children} </ContanierButton>
}

Button.propType = {
  children: PropTypes.string
}
