import axios from "axios";
import { Task } from "./interfaces/task";

const BASE_URL = 'https://64f670dc9d77540849524e57.mockapi.io/todo'


export const addTaskApi = ({ title, content }: Task) => {
    return axios({
        method: "POST",
        url: BASE_URL.concat("/tasks"),
        data: {
            title,
            content
        }
    })
}

export const updateTaskApi = ({ title, content, id }: Task) => {
    return axios({
        method: "PUT",
        url: BASE_URL.concat("/tasks/").concat(id),
        data: {
            title,
            content
        }
    })
}

export const getTaskByIdApi = (id: string) => {
    return axios({
        method: "GET",
        url: BASE_URL.concat("/tasks/").concat(id)
    })
}


export const deleteTaskApi = (id: string) => {
    return axios({
        method: "DELETE",
        url: BASE_URL.concat("/tasks/").concat(id)
    })
}

export const listTaskApi = () => {
    return axios({
        method: "GET",
        url: BASE_URL.concat("/tasks/")
    })
}

