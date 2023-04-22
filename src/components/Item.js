import React, { useState } from "react";

function Item({ name, category }) {
  const [itemInCart, setItemInCart] = useState(false);

  function handlingClick() {
    setItemInCart((prevItem) => !prevItem);
  }

  const itemClass = itemInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlingClick}>
        {itemInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;