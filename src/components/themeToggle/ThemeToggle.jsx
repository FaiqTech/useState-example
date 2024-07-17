import React, { useState } from "react";
// Bir düyməyə klikləyərək səhifənin temasını (ağ/qara) dəyişdirən bir komponent yaradın.

const ThemeToggle = () => {
  // Temanın qara və ya ağ olmasını idarə edən state
  const [isDark, setIsDark] = useState(false);

  // Temanı dəyişdirən funksiya
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        // Temanın rənglərini state-ə görə dəyişir
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{isDark ? "Qara Tema" : "Ağ Tema"}</p>
      {/* Düymə klik edildikdə temanı dəyişdirən funksiya çağırılır */}
      <button onClick={toggleTheme}>Temanı Dəyiş</button>
    </div>
  );
};

export default ThemeToggle;
