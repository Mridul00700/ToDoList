import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFileteredTodos] = useState([]);

  useEffect(()=> {
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();

  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFileteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFileteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFileteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }






  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
