import { React } from 'react';
import { useTodoStore } from '../Store/useTodoStore';
import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';

export const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const toggleTask = useTodoStore((state) => state.toggleTask);


  if (tasks.length === 0) return <EmptyState />;

  return (
    <ul className="tasks list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
          </label>
        </li>
      ))}
    </ul>
  );
}