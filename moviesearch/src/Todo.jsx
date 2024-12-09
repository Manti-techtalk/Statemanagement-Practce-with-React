import React, { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleClick = () => {
        if (todo.trim() !== '') {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    return (
        <>
            <h1>Todo List</h1>
            <label htmlFor="todo">Todo:</label>
            <input 
                type="text" 
                name="todo" 
                id="todo" 
                placeholder="Enter a todo" 
                value={todo} 
                onChange={handleChange} 
            />
            <button onClick={handleClick}>Add</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
