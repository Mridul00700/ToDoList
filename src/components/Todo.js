import React from 'react';

const Todo = ({ text, setTodos, todos, id, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== id));
    }    
    const completeHandler =() => {
        setTodos(todos.map( item => {
            if(item.id === id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item; 
        }))
    }

    return (
        <div className= "todo" > 
        <li className={`todo-item ${todo.completed? "completed" : ''}` }> {text}</li>
        <button className="complete-btn" onClick={completeHandler}>
            <i className="fas fa-check" ></i>
            </button>
        <button  onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
