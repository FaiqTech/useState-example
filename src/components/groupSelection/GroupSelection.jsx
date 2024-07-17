import React, { useState } from "react";

const GroupSelection = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Element 1", selected: false },
    { id: 2, name: "Element 2", selected: false },
    { id: 3, name: "Element 3", selected: false },
  ]);

  const toggleSelectAll = (selectAll) => {
    setItems(items.map((item) => ({ ...item, selected: selectAll })));
  };

  const toggleSelectItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <div>
      <button onClick={() => toggleSelectAll(true)}>Hamısını Seç</button>
      <button onClick={() => toggleSelectAll(false)}>Hamısını Təmizlə</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleSelectItem(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSelection;
