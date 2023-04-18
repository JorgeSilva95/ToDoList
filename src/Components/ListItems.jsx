function ListItems({ todo }) {
  console.log(todo.text);
  return (
    <div>
      <li>
        {todo.id + 1}&nbsp;
        {todo.text}
      </li>
    </div>
  );
}
export default ListItems;
