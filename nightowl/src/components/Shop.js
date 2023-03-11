import React, { useState, useEffect } from "react";

export const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      let url = `http://localhost:5000/shop`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      }
    }
    getItems();
  }, []);

  return (
    <div className="container">
      {items.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.name}</li>
            <li>{item.itemType}</li>
            <li>{item.color}</li>
            <li>{item.price}</li>
          </ul>
        );
      })}
    </div>
  );
};
