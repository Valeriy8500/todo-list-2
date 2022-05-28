import React from 'react';
import NavBar from './components/navbar';
import { TodoForm } from './components/todoForm';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState([]);

  const addHandler = (title: string) => {
    console.log('add: ', title);
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <TodoForm addHandler={addHandler} />
      </div>
    </>
  );
}

export default App;
