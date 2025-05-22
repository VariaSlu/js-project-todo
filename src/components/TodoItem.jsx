import React from 'react';
import { useTodoStore } from '../Store/useTodoStore';

export const TodoItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);

  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div
        className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => toggleTask(task.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleTask(task.id)}
        aria-label="Toggle task"
      >
        {task.title}
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-500 hover:text-red-700"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}