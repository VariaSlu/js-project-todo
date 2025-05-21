const { tasks } = useTodoStore();
const total = tasks.length;
const incomplete = tasks.filter(task => !task.completed).length;
