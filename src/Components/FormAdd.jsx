import { useState } from "react";

function FormAdd({ addTodo }) {
  const [ItemList, SetItemList] = useState("");
  const [Id, setId] = useState(0);
  const todoCreate = (ItemList) => {
    if (ItemList !== "") {
      const todoObj = { text: ItemList, id: Id };
      setId(Id + 1);
      addTodo(todoObj);
      SetItemList("");
    }
  };
  return (
    <div>
      <div className="FormListItens">
        <input
          type="text"
          id="ItmLayer"
          className="txtList"
          placeholder="Qual item deseja adcionar?"
          value={ItemList}
          onChange={(e) => {
            SetItemList(e.target.value);
          }}
        />
        <button
          type="text"
          className="btnList"
          onClick={() => todoCreate(ItemList)}
        >
          Adicionar ITEM
        </button>
      </div>
    </div>
  );
}
export default FormAdd;
