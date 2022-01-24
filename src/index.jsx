import React from "react"
import ReactDOM from "react-dom"

import Login from "./Containers/login"
import GlobalStyle from "./styles/GlobalStyles"

ReactDOM.render(
  <>
    <Login />
    <GlobalStyle />
  </>,
  document.getElementById("root")
)
