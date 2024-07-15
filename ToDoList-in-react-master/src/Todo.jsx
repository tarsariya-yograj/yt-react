import React, { useState } from "react";

function List() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border-2 m-3 outline-none p-3 rounded-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit" className="p-3 rounded-lg border-2">Add</button>
      </form>
      <hr />
      <h4 >TASK LIST</h4>
      <ul className=" w-3/4 m-auto p-1">
        {todos.map((todo) => (
          <li className=" w-2/4 m-auto" key={todo.id}>
            {todo.text}
            <button className="border-2 border-black px-4 py-2 mx-11 my-4 rounded-lg" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
