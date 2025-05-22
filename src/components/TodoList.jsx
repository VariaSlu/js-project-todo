import { React } from 'react';
import { useTodoStore } from '../Store/useTodoStore';
import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';

export const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks);

  if (tasks.length === 0) return <EmptyState />;

  return (
    <ul className="p-4 divide-y">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}