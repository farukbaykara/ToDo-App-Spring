
import { createContext, useState , useContext} from "react";

//Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Share context with other components
export default function AuthProvider({children}){
    
    const [isAuthenticated, setAuthenticated] = useState(false);

    const valueToBeShared = {isAuthenticated,login,logout};

    function login(username,password){
        if(username === 'username' && password === 'password'){
            setAuthenticated(true)
            return true
            
        }
        else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }


    return(
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    );
}