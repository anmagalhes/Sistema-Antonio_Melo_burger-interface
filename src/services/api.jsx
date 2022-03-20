import axios from "axios"

const apiTonyBurger = axios.create({
  baseURL: "http:/localhost:3001"
})

export default apiTonyBurger
