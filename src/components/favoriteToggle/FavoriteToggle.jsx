import React, { useState } from "react";

// İstifadəçi bir ürək ikonuna klikləyərək bir elementi favori edə bilsin və ya favoridən çıxara bilsin. İkon vəziyyətə görə dolu və ya boş görünsün.

const FavoriteToggle = () => {
  // Elementin favori olub-olmadığını idarə edən state
  const [isFavorite, setIsFavorite] = useState(false);

  // Favori vəziyyətini dəyişdirən funksiya
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      {/* İkona klik edildikdə favori vəziyyətini dəyişdirən funksiya çağırılır */}
      <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
    </div>
  );
};

export default FavoriteToggle;
