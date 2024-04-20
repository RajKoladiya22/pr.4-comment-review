import { AddForm } from "./AddForm";
import "./App.css";
import { useState } from "react";
import { List } from "./list";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getdata = (newTask) => {
    setTodos([...todos, newTask]);
    console.log(todos);
  };

  return (
    <>
      <AddForm getdata={getdata} />
      {/* <List todos={todos}/> */}
    </>
  );
};

export default App;
