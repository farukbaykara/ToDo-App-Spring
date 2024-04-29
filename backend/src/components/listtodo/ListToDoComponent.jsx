


export default function ListToDoComponent(){
    
    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate());



    const todos = [ {id: "1", item: "Learn AWS", done: false, targetDate: targetDate},
                    {id: "2", item: "Learn Spring", done: false, targetDate: targetDate},
                    {id: "3", item: "Learn DevOps", done: false, targetDate: targetDate},]
    
    
    
    
    
    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>item</td>
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
                                        <td>{todo.item}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
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