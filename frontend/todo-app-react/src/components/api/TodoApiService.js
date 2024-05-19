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

export function updateTodoApi(username, id, todo){
    return apiClient.put(`/api/users/${username}/todos/${id}`, todo, {
        auth: {
        username: "user",
        password: "password"
        }
    })
}

export function createTodoApi(username, todo){
    return apiClient.post(`/api/users/${username}/todos`, todo, {
        auth: {
        username: "user",
        password: "password"
        }
    })
}