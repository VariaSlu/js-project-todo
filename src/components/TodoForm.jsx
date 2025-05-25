import React, { useState } from 'react';
import { useTodoStore } from '../Store/useTodoStore';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <input
        className="input-form"
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="task-submit">
        Add
      </button>
    </form>
  );
}