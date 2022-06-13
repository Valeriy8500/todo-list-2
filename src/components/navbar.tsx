import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav>
      <div className="nav-wrapper purple darknet-2 px1">
        <a href="/todo-list-2" className="brand-logo">Todo-List</a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/todo-list-2">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/todo-list-2/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
