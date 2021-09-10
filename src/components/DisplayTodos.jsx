import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodos = (props) => {
  const todoState = useSelector((state) => state.todos);

  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {todoState?.length > 0 && sort === "active"
            ? todoState?.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem key={item.id} item={item} />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {todoState?.length > 0 && sort === "completed"
            ? todoState?.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem key={item.id} item={item} />
                  )
                );
              })
            : null}
          {/* for all items */}
          {todoState?.length > 0 && sort === "all"
            ? todoState?.map((item) => {
                return <TodoItem key={item.id} item={item} />;
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
