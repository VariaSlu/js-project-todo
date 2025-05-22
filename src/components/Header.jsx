import { useTodoStore } from '../Store/useTodoStore';

export const Header = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const incomplete = tasks.filter((t) => !t.completed).length;

  return (
    <header className="p-4 text-center bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Now</h1>
      <p>{incomplete} tasks remaining</p>
    </header>
  );
}
