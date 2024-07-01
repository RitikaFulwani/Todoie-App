import React from 'react';

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>{todo}</span>
    </div>
  );
}

export default TodoItem;
