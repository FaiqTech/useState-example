import React, { useState } from "react";
//Bir düyməyə klikləyərkən bir mətnin rəngini dəyişdirən bir React komponenti yaradın. İlk klikdə mətn qırmızı olsun, ikinci klikdə mavi olsun.

const ColorToggle = () => {
  // Mətnin qırmızı və ya mavi olmasını idarə edən state
  const [isRed, setIsRed] = useState(true);

  // Rəngi dəyişdirən funksiya
  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      {/* Mətnin rəngini state-dən asılı olaraq dəyişdirir */}
      <p style={{ color: isRed ? "red" : "blue" }}>
        Bu mətn rəngini dəyişdirir.
      </p>
      {/* Düymə klik edildikdə rəngi dəyişdirən funksiya çağırılır */}
      <button onClick={handleClick}>Rəngi Dəyiş</button>
    </div>
  );
};

export default ColorToggle;
