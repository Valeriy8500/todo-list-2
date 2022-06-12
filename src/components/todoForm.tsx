import React from 'react';

interface ITodoFormProps {
  addHandler: (title: string) => void;
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addHandler }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      addHandler(ref.current!.value);
      ref.current!.value = '';
    }
  };

  const onAddBtn = (): void => {
    addHandler(ref.current!.value);
    ref.current!.value = '';
  };

  return (
    <div className='todo-form-container'>
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
      <button
        className='todo-form-btn'
        onClick={() => onAddBtn()}>
        Добавить
      </button>
    </div>
  )
};
