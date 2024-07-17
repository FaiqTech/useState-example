import React, { useState } from "react";

// İstifadəçi məhsul əlavə edib çıxardıqca "Səbətdə X məhsul var" mesajını yeniləyən bir komponent yaradın.

const CartCounter = () => {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Səbətdə {count} məhsul var.</p>
      <button onClick={addItem}>Məhsul Əlavə et</button>
      <button onClick={removeItem}>Məhsul Sil</button>
    </div>
  );
};

export default CartCounter;
