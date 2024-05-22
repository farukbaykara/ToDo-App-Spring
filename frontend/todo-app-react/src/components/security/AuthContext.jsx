
import { createContext, useState , useContext} from "react";
import {apiClient} from '../api/ApiClient'
import { executeBasicAuthentication , executeJwtAuthentication} from "../api/AuthenticationService";

//Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Share context with other components
export default function AuthProvider({children}){
    
    const [isAuthenticated, setAuthenticated] = useState(false);



    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    async function login(username,password){


        //const baToken = 'Basic ' + window.btoa(username + ":" + password)
        
        try{
            //const response = await executeBasicAuthentication(baToken)
            
            const response = await executeJwtAuthentication(username,password)

            if(response.status === 200){

                const jwtToken = "Bearer " + response.data.token
                console.log(jwtToken)
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        
                        return config
                    }
                )

                return true
                
            }
            else{
                logout()
                return false
            }
        }
        catch(error){
            console.error("Error authenticating:", error)
            logout()
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    const valueToBeShared = {isAuthenticated,login,logout, username, token};

    return(
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    );
}