import React from 'react';
import { useTodoStore } from '../Store/useTodoStore';

export const TodoItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);

  return (
    <li className="taskItem">
      <div
        className={`task-mark-complete ${task.completed ? 'task-mark-incomplete' : ''}`}
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
        className="remove-button"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}