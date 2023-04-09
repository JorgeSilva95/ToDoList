import { useState, useEffect } from "react";
import ListItems from "./ListItems";

function FormAdd(props) {
  const [ItemList, SetItemList] = useState("");
  const SubmitItem = (e) => {
    e.preventDefault();
    console.log(ItemList);
  };
  return (
    <div>
      <form className="FormListItens" onSubmit={SubmitItem}>
        <input
          type="text"
          id=""
          className="txtList"
          placeholder="Qual item deseja adcionar?"
          onChange={(e) => {
            SetItemList(e.target.value);
          }}
        />
        <input type="submit" value="Adicionar ITEM" className="btnList" />
      </form>
      <ListItems stList={ItemList}></ListItems>
    </div>
  );
}
export default FormAdd;
