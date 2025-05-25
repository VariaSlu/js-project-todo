import { React } from 'react';
import { useTodoStore } from '../Store/useTodoStore';
import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';

export const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);



  if (tasks.length === 0) return <EmptyState />;

  return (
    <ul className="tasks list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className="custom-checkbox" />
            <span className="task-text">{task.title}</span>
          </label>
          <button
            className="delete-button"
            aria-label="Delete task"
            onClick={() => removeTask(task.id)}>Delete</button>
          <hr class="dashed"></hr>
        </li>
      ))}
    </ul>
  );
}