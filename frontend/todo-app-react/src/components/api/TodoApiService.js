import axios from 'axios'

import {apiClient} from './ApiClient'

const basicAuth = {Authorization: "Basic dXNlcjpwYXNzd29yZA=="}


export function getAllTodosForUser(username){
    return apiClient.get(`/api/users/${username}/todos`)
}


export function deleteTodosForUser(username, id){
    return apiClient.delete(`/api/users/${username}/todos/${id}`)
}

export function getTodosForUser(username, id){
    return apiClient.get(`/api/users/${username}/todos/${id}`)
}

export function updateTodoApi(username, id, todo){
    return apiClient.put(`/api/users/${username}/todos/${id}`, todo)
}

export function createTodoApi(username, todo){
    return apiClient.post(`/api/users/${username}/todos`, todo)
}

