import React from 'react';

const Form = ( { setInputText, setTodos, todos, inputText, setStatus } ) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(inputText !== ""){
        setTodos([ ...todos, { text: inputText, completed: false, id: Math.random()*1000  
        }]);
    
        setInputText("");
    }
    }

    const statusHandler = e => {
        setStatus(e.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
                <button className="todo-button" onClick={submitHandler} type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;