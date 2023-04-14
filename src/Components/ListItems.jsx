import { useState, useEffect } from "react";

function ListItems({ todo }) {
  console.log(todo.text);
  return (
    <div>
      <li>{todo.text}</li>
    </div>
  );
}
export default ListItems;
