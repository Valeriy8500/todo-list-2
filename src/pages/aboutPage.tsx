import React from 'react';
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useNavigate();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
        vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
        voluptatum.
      </p>
      <button className="btn" onClick={() => history('/')}>
        Обратно к списку дел
      </button>
    </>
  )
};
