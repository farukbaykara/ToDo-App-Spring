
import { createContext, useState , useContext} from "react";

//Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Share context with other components
export default function AuthProvider({children}){
    
    const [isAuthenticated, setAuthenticated] = useState(false);



    const [username, setUsername] = useState(null);

    function login(username,password){
        if(username === 'user' && password === 'password'){
            setAuthenticated(true)
            setUsername(username)
            return true
            
        }
        else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    const valueToBeShared = {isAuthenticated,login,logout, username};

    return(
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    );
}