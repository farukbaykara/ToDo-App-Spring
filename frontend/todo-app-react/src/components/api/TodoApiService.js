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


export function deleteTodosForUser(username, id){
    return apiClient.delete(`/api/users/${username}/todos/${id}`, {},{
        auth: {
        username: "user",
        password: "password"
        }
    })
}

export function getTodosForUser(username, id){
    return apiClient.get(`/api/users/${username}/todos/${id}`, {},{
        auth: {
        username: "user",
        password: "password"
        }
    })
}