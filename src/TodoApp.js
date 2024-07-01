import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([
    'Eat',
    'Code',
    'Sleep',
    'Repeat'
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo-app">
      <h1>Todoie App</h1>
      <div className="todo-container">
        <h2>Todo</h2>
        <TodoList todos={todos} />
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
