import "./ToDoApp.css";
import React, {useState} from 'react';
import { BrowserRouter,Routes,Route, useNavigate,useParams, Navigate } from "react-router-dom";
import WelcomeComponent from "../welcome/WelcomeComponent";
import ListToDoComponent from "../listtodo/ListToDoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "../logout/LogoutComponent";
import LoginComponent from "../login/LoginComponent";
import AuthProvider from "../security/AuthContext";
import { useAuth } from "../security/AuthContext";

function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}



export default function ToDoApp(){
    return (
        <div className="ToDoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}></Route>
                        <Route path="/login" element={<LoginComponent/>}></Route>
                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }/>
                        
                        <Route path="*" element={<ErrorComponent/>}></Route>
                        
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListToDoComponent/>
                            </AuthenticatedRoute>
                        }></Route>
                        
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }></Route>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>

        </div>
    );
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>Sorry, There is an error</h1>
        </div>
    )
}