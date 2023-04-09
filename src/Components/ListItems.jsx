import { useState, useEffect } from "react";

function ListItems(props) {
  const [ListItAR, SetListItAR] = useState([props.stList]);
  return (
    <div>
      <li>{props.stList}</li>
    </div>
  );
}
export default ListItems;
