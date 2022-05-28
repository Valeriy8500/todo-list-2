import React from 'react';

interface ITodoFormProps {
    addHandler: (title: string) => void;
}

/**
 * В компоненте представленны 2 варианта его реализации: через useState и useRef
 */
export const TodoForm: React.FC<ITodoFormProps> = (props) => {
    const ref = React.useRef<HTMLInputElement>(null);
    // const [title, setTitle] = React.useState<string>('');

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.addHandler(ref.current!.value);
            ref.current!.value = '';
            // setTitle('');
        }
    };

    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // };

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                id='title'
                placeholder='Введите название дела'
            // onChange={changeHandler}
            // value={title}
            />
            <label htmlFor="title" className='active'>
                Введите название дела
            </label>
        </div>
    )
};