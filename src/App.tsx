import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { TodosPage } from './pages/todosPage';
import { AboutPage } from './pages/aboutPage';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/todo-list-2" />
          <Route element={<AboutPage />} path="/todo-list-2/about" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
