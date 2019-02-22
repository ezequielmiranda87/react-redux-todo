import React from 'react';
import './Todos.css'


const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div
                    onClick ={()=>{deleteTodo(todo.id)}}
                    className="collection-item todo"
                    key = {todo.id}
                >
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todos left, yay</p>
    )

    return(
        <div className="todos collection">
            { todoList }
        </div>
    )

}

export default Todos;