import { useState } from "react";
import FormAdd from "../Components/FormAdd";
import ListItems from "../Components/ListItems";

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
