import axios from "axios";


const api = 'https://jsonplaceholder.typicode.com';

export const getAllusers = () => {
    return axios.get(`${api}/users`)
}   

export const getUser = (id) => {
    return axios.get(`${api}/users/${id}`)
}

export const createUser = (user) => {
    return axios.post(`${api}/users`, user)
}

export const updateUser = (user) => {
    return axios.put(`${api}/users/${user.id}`, user)
}

export const deleteUser = (id) => {
    return axios.delete(`${api}/users/${id}`)
}
