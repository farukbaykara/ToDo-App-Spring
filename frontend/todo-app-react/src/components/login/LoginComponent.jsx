
import React, {useState} from 'react';
import { BrowserRouter,Routes,Route, useNavigate,useParams } from "react-router-dom";

import {useAuth} from '../security/AuthContext';

export default function LoginComponent(){

    const [username, setUsername] = useState('username');

    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();


    function handleUsernmaeChange(event){

        setUsername(event.target.value);
    }

    function handlePasswordChange(event){

        setPassword(event.target.value);
    }

    async function handleLoginButton(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true);
            navigate("/login")
        }
    }

    function ShowErrorMessageComponent(){
       
        if(showErrorMessage){
            return (
                <div className="errorMessage">Login Failed</div>
            );
        }

        return null;

    }

    return (
        <div className="LoginComponent">

            <ShowErrorMessageComponent/>
            User Name: <input type="text" name="username" value={username} onChange={handleUsernmaeChange}/>
            <br/>
            Password: <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            <br/>
            <button name="loginButton" type="button" onClick={handleLoginButton}>Login</button>
        </div>
    );
}
