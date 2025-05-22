
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './index.css';

export const App = () => {
  return (

    <main className="app-container">
      <Header />
      <TodoForm />
      <TodoList />
    </main>
  )
}