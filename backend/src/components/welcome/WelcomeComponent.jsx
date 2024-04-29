
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { error } from 'jquery';

export default function WelcomeComponent(){

    const {username} = useParams();

    function callHelloWorld(){
        axios.get('http://localhost:8080/api/hello', {},{
            auth: {
              username: "user",
              password: "password"
            }
          })
            .then( (response) =>successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally( () => console.log("cleanup"))
    }

    function successfulResponse(response){
        console.log(response)
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
                <button className="btn btn-success" onClick={callHelloWorld}>Call GET HelloWorld</button>
            </div>
        </div>
    
    );
}