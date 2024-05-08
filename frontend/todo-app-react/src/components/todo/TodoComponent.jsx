import { get } from "jquery";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import { getTodosForUser } from "../api/TodoApiService";
import { useState } from "react";

export default function TodoComponent(){
    
    const {id} = useParams()

    const[description, setDescription] = useState('')


    const authContext = useAuth()
    const username = authContext.username


    useEffect(
        () => retrieveTodos(),[id]
    )


    function retrieveTodos(){
        getTodosForUser(username, id)
            .then( (response) => 
                setDescription(response.data.description))
            .catch( (error) => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
        </div>
    );
}