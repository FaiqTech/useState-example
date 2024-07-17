import React, { useState } from "react";

const PasswordGenerator = () => {
  // Parolu saxlayan state
  const [password, setPassword] = useState("");

  // Parolu yaradan funksiya
  const generatePassword = () => {
    const length = 8; // Parolun uzunluğu
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Parol üçün istifadə edilə bilən simvollar

    // Təsadüfi simvol seçən funksiya
    const getRandomChar = () =>
      charset[Math.floor(Math.random() * charset.length)];

    // Yaradılan parolu generasiya edən kod
    const generatedPassword = Array.from({ length }, getRandomChar).join("");
    setPassword(generatedPassword); // Yeni parolu state-ə yazır
  };

  return (
    <div>
      {/* Düymənin stilləri və klik edildikdə parolu yaradan funksiya */}
      <button
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={generatePassword}
      >
        Parola Oluştur
      </button>
      {/* Yaradılan yeni parolu göstərən mətn */}
      <p>Yeni Parola: {password}</p>
    </div>
  );
};

export default PasswordGenerator;
