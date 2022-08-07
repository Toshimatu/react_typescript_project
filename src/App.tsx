import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodoList from './components/NewTodoList';
import { Todo } from './Todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  };

  return (
    <div className="App">
      <NewTodoList onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;