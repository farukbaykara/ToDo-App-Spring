import axios from 'axios'

import {apiClient} from './ApiClient'

export function getHelloWorld(){
    return apiClient.get('/api/hello', {},{})
}

export function getHelloWorldName(username,token){
    return apiClient.get(`/api/hello/${username}`, {
        headers: {Authorization: token}
    },{})
}