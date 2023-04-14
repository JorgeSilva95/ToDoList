import { useState, useEffect } from "react";

function FormAdd({ addTodo }) {
  const [ItemList, SetItemList] = useState("");
  const [Id, setId] = useState(0);
  const todoCreate = (ItemList) => {
    const todoObj = { text: ItemList, id: Id };
    setId(Id + 1);
    addTodo(todoObj);
  };
  return (
    <div>
      <form className="FormListItens">
        <input
          type="text"
          id=""
          className="txtList"
          placeholder="Qual item deseja adcionar?"
          onChange={(e) => {
            SetItemList(e.target.value);
          }}
        />
        <input
          type="text"
          value="Adicionar ITEM"
          className="btnList"
          onClick={() => todoCreate(ItemList)}
        />
      </form>
    </div>
  );
}
export default FormAdd;
