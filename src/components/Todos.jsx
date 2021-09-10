import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Todos = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          completed: false,
        })
      );
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default Todos;
