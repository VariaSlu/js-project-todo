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
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        className="flex-1 p-2 border rounded"
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add
      </button>
    </form>
  );
}