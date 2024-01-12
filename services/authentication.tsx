import axios from "axios";

const BASE_URL = 'http://localhost:3000/v1'

interface RegisterData {
    name: string
    email: string
    password: string
}

interface LoginData {
    email: string
    password: string
}
export const registerApi = ({ name, email, password }: RegisterData) => {
    return axios({
        method: "POST",
        url: BASE_URL.concat("/auth/register"),
        data: {
            name,
            email,
            password
        }
    })
}

export const loginApi = ({ email, password }: LoginData) => {
    return axios({
        method: "POST",
        url: BASE_URL.concat("/auth/login"),
        data: {
            email,
            password
        }
    })
}