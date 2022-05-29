import React from 'react';
import NavBar from './components/navbar';
import { TodoForm } from './components/todoForm';
import TodoList from './components/todoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <TodoForm addHandler={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
