import React, { useRef } from "react";
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (addText: string) => void;
};

const NewTodoList: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>TODO追加 </label>
                <input type='text' id='todo-text' ref={textInputRef} />
            </div>
            <button type='submit'>ボタン</button>
        </form>
    )
}

export default NewTodoList;