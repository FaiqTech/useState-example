import React, { useState } from "react";
//Bir input sahəsində daxil edilən parolu bir düymə ilə göstərib gizlədə bilən bir komponent yaradın.

const PasswordToggle = () => {
  // Parol mətnini saxlayan state
  const [password, setPassword] = useState("");
  // Parolun görünməsini idarə edən state
  const [showPassword, setShowPassword] = useState(false);

  // Parolun görünməsini dəyişdirən funksiya
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Parolun görünməsi state-ə görə dəyişir */}
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parolu daxil edin..."
      />
      {/* Düymə klik edildikdə parolun görünməsini dəyişdirən funksiya çağırılır */}
      <button onClick={toggleShowPassword}>
        {showPassword ? "Gizlət" : "Göstər"}
      </button>
    </div>
  );
};

export default PasswordToggle;
