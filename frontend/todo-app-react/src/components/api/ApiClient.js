import axios from 'axios'
import { useAuth } from '../security/AuthContext'



export const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})
