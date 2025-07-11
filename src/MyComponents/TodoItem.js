import React from 'react';
import { FaCheckCircle, FaTrashAlt, FaRegCircle } from 'react-icons/fa';

export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div className={`todo-item glass-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
      <div className="todo-actions">
        <button className="toggle-btn" onClick={() => onToggleComplete(todo)}>
          {todo.completed ? <FaCheckCircle /> : <FaRegCircle />}
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};