import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // Using prevTodos ensures you are always working with the latest state
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Refined: Accept 'id' as a parameter
    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input 
                placeholder="add a task" 
                value={newTodo} 
                onChange={updateTodoValue} 
            />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Tasks to do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;
                        {/* Correctly passing the id to the function */}
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}