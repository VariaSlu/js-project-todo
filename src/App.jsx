
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (

    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <TodoForm />
      <TodoList />
    </main>
  )
}