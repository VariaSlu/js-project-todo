import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useTodoStore = create((set) => ({
  tasks: [
    { id: nanoid(), title: 'Your first task is to find what feels effortless to you.', completed: false },
    { id: nanoid(), title: 'Your second task is to put maximum effort into it.', completed: false },
  ],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: nanoid(), title, completed: false }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}))

