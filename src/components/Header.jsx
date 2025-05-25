import { useTodoStore } from '../Store/useTodoStore';

export const Header = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const incomplete = tasks.filter((t) => !t.completed).length;

  return (
    <header className="header-text">
      <h1 className="headline">Now</h1>
      <p>{incomplete} tasks remaining</p>
    </header>
  );
}
