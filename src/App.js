import React, { useState, useEffect } from 'react';
import Form from './components/form';
import TodoList from './components/todoList';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocal();
  }, [todos, status]);

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1 style={{ fontFamily: "'Wallpoet', cursive", fontSize: '72px' }}>
          To Do List
        </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
