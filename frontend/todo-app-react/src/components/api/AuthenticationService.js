
import { apiClient } from './ApiClient';




export function executeBasicAuthentication(token){
    return apiClient.get(`/auth/basicauth`, {
        headers: {Authorization: token}
    },{})
}


export function executeJwtAuthentication(username,password)
{
    
    const authdata = {
        email: username,
        password: password
    }

    
    return apiClient.post(`/auth/login`,authdata, {})
}