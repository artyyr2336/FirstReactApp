import axios from "axios"

const Api = axios.create({
	baseURL: "",
	timeout: 10000,
})

export default Api
