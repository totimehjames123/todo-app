import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleEdit, updateTodoText } from './redux/todos';
import './index.css'

function App() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      if (todoText.length <= 30){
        dispatch(addTodo({ id: Date.now(), text: todoText }));
        setTodoText('');
      }
      else{
        alert('Text length should be less or equal to 30!')
      }

    } else {
      alert('This field is required');
    }
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  const handleUpdateTodo = (todo) => {
    const updatedText = prompt('Enter updated text:', todo.text);
    if (updatedText !== null && updatedText.trim() !== '') {
      dispatch(updateTodoText({ id: todo.id, text: updatedText }));
    } else if (updatedText !== null && updatedText.trim() === '') {
      alert('Todo text cannot be empty.');
    }
  };

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>Redux Todo App</h1>
      
      <div className="input-container">
        <input type="text" className="todo-input" placeholder="Add a todo ..." value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      </div>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <span className='text-width' onDoubleClick={() => alert(todo.text)}>{todo.text}</span>
          <button className="delete-button" onClick={() => handleRemoveTodo(todo)}>Delete</button>
          <button className="update-button" onClick={() => handleUpdateTodo(todo)}>Update</button>
    </div>
  ))}
</div>

  );
}

export default App;
