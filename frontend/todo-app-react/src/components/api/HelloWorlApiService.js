import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})



export function getHelloWorld(){
    return apiClient.get('/api/hello', {},{
        auth: {
        username: "user",
        password: "password"
        }
    })
}

export function getHelloWorldName(username){
    return apiClient.get(`/api/hello/${username}`, {},{
        auth: {
        username: "user",
        password: "password"
        }
    })
}