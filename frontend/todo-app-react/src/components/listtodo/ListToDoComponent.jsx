import { getAllTodosForUser , deleteTodosForUser} from "../api/TodoApiService";
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export default function ListToDoComponent(){

    const authContext = useAuth()

    const username = authContext.username

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate());

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)
    
    function refreshTodos(username){
        getAllTodosForUser(username)
            .then( (response) => setTodos(response.data))
            .catch( (error) => console.log(error))
            .finally( () => console.log("cleanup"))
    }
    
    useEffect(
        () => refreshTodos(username),[]
    )
    
    function deleteTodo(username, id){
        deleteTodosForUser(username, id)
            .then( () => {
                setMessage(`Delete of todo ${id} successful`)
                refreshTodos(username)
            })
            .catch( (error) => console.log(error))
            .finally( () => console.log("cleanup"))
    }

    function updateTodo(username, id){
        
        
        console.log("UPDATE TODO" + id)

        navigate(`/todo/${id}`)

        /*
        deleteTodosForUser(username, id)
            .then( () => {
                setMessage(`Delete of todo ${id} successful`)
                refreshTodos(username)
            })
            .catch( (error) => console.log(error))
            .finally( () => console.log("cleanup"))
        */
    }


    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>

                            <th>Description</th>
                            <th>Status</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>

                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.username,todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.username,todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}