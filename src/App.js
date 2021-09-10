import React from "react";
import "./css/main.css";
// import "./css/dark.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { useState } from 'react';


import { motion } from "framer-motion";
function App() {
  const [light, setLight] = useState(true);
  return (
    <div className="App">
      {/* <button onClick = {(e) => setLight(!light)}> Dark </button> */}
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;