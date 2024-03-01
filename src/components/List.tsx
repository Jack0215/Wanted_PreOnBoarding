import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addTodo, deleteTodo } from "../store";

const List: React.FC = () => {
  const todos = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>("");

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      dispatch(addTodo(inputText.trim()));
      setInputText("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
