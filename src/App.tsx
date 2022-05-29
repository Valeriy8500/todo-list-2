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

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      }));
  };

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <TodoForm addHandler={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler} />
      </div>
    </>
  );
}

export default App;
