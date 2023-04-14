import { useState } from "react";
import FormAdd from "../components/FormAdd";
import ListItems from "../components/ListItems";

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <FormAdd addTodo={addTodo} />
      {todos.map((todo) => (
        <ListItems todo={todo} />
      ))}
    </>
  );
}

export default Home;
