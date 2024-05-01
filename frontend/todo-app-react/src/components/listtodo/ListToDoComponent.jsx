import { getAllTodosForUser } from "../api/TodoApiService";
import {useState, useEffect} from 'react';

export default function ListToDoComponent(){
    
    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate());



    const [todos, setTodos] = useState([])
    
    
    function refreshTodos(){
        getAllTodosForUser("user")
            .then( (response) => setTodos(response.data))
            .catch( (error) => console.log(error))
            .finally( () => console.log("cleanup"))
    }
    
    useEffect(
        () => refreshTodos(),[]
    )
    
    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
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