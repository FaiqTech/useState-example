import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Düzgün email daxil edin.");
    } else {
      setError("");
      alert(`Ad: ${name}\nEmail: ${email}`);
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Emailiniz"
        />
        <button type="submit">Göndər</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FormValidation;
