
import {useState} from "react";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { error } from 'jquery';
import { getHelloWorld, getHelloWorldName } from "../api/HelloWorlApiService";

export default function WelcomeComponent(){

    const {username} = useParams();


    const [message, setMessage] = useState(null)


    function callHelloWorld(username){

        getHelloWorldName(username)
            .then( (response) =>successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally( () => console.log("cleanup"))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }


    return (
        <div className='welcomeComponent'>
            <h1>Welcome in {username}</h1>
            <div>
                Manage your todos <Link to="/todos">here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorld(username)}>Call GET HelloWorld</button>
            </div>
            <div className="text-info">
                Response of the call is {message}
            </div>
        </div>
    
    );
}