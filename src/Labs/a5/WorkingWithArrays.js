import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    useEffect(() => {
      fetchTodos();
    }, []); 
    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };  
    const removeTodo = async (todo) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };  
    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };  
    const updateTitle = async () => {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };  
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };
    const updateTodo = async () => {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };  
    const deleteTodo = async (todo) => {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    };    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API}
          className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <input value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary me-2">
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>
        <input type="text" value={todo.title}
        onChange={(e) => setTodo({
        ...todo, title: e.target.value })}/>
        <h3>Updating an Item in an Array</h3>
        <a href={`${API}/${todo.id}/title/${todo.title}`} 
            className="btn btn-primary me-2">
            Update Title
        </a>
        <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
        <br/>
        <a href={`${API}/${todo.id}/description/${todo.description}`} 
            className="btn btn-primary me-2">
            Update Description
        </a>
        <input type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}/>
        <br/>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`} 
            className="btn btn-primary me-2">
            Update Completed
        </a>
        <input type="checkbox" value={todo.completed}
        onChange={(e) => setTodo({
        ...todo, completed: e.target.checked })}/>
        <br/>
        <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          value={todo.title}
          onChange={(e) =>
            setTodo({
              ...todo,
              title: e.target.value,
            })
          }
        />
        <textarea
          className="form-control"
          value={todo.description}
          type="text"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          className="form-control"
          value={todo.due}
          type="date"
          onChange={(e) =>
            setTodo({
              ...todo,
              due: e.target.value,
            })
          }
        />
        <label>
          <input
            value={todo.completed}
            type="checkbox"
            onChange={(e) =>
              setTodo({
                ...todo,
                completed: e.target.checked,
              })
            }
          />
          Completed
        </label>
        <button onClick={postTodo} 
          className="btn btn-warning w-100">
          Post Todo
        </button>
        <button onClick={updateTodo}
          className="btn btn-secondary w-100">
          Update Todo
        </button>
        <button onClick={createTodo}
          className="btn btn-primary w-100">
          Create Todo
          </button>
          <button onClick={updateTitle}
          className="btn btn-success w-100">
          Update Title
          </button>
          <br/>
          <ul class="list-group d-inline-block my-2">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <input checked={todo.completed}
                type="checkbox" readOnly />
              {todo.title}
              <p>{todo.description}</p>
              <p>{todo.due}</p>
              <button onClick={() => deleteTodo(todo)}
                className="btn btn-danger ms-2">
                Delete
              </button>
              <button onClick={() => fetchTodoById(todo.id)}
              className="btn btn-primary mx-2">
              Edit
              </button>
            </li>
          ))}
          </ul>
      </div>
    );
  }
  export default WorkingWithArrays;