import React from 'react';

interface ITodoFormProps {
  addHandler: (title: string) => void;
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addHandler }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addHandler(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id='title'
        placeholder='Введите название дела'
      />
      <label htmlFor="title" className='active'>
        Введите название дела
      </label>
    </div>
  )
};
