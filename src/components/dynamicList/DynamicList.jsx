import { useState } from "react";

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    //_bu isareni qoyduq ki, bizim ucun lazim deyil, amma filter funksiyasinda 2ci argument olaraq indexi qebul edir
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Element daxil edin..."
      />
      <button onClick={addItem}>Əlavə et</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
