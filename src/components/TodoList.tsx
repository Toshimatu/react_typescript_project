import React from 'react';
import './TodoList.css';

interface itemProps {
    items: {
        id: string,
        text: string,
    }[];
    onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<itemProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => 
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, item.id)}>削除</button>
                </li>)
            }
        </ul>
    )
}

export default TodoList;