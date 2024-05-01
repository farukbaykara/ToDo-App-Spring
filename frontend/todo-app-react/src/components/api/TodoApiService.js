import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})



export function getAllTodosForUser(username){
    return apiClient.get(`/api/users/${username}/todos`, {},{
        auth: {
        username: "user",
        password: "password"
        }
    })
}