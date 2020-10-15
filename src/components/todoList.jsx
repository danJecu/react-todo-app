import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map(todo => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
