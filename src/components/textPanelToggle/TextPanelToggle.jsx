import React, { useState } from "react";

//Bir düyməyə klikləyərək bir mətn panelini açıb bağlayan bir komponent yaradın.
const TextPanelToggle = () => {
  // Mətn panelinin görünməsini idarə edən state
  const [isVisible, setIsVisible] = useState(false);

  // Mətn panelini açıb-bağlayan funksiya
  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Düymə klik edildikdə mətn panelini açıb-bağlayan funksiya çağırılır */}
      <button onClick={togglePanel}>{isVisible ? "Gizlət" : "Göstər"}</button>
      {/* Mətn paneli state-ə görə göstərilir və ya gizlədilir */}
      {isVisible && <p>Bu mətn paneli açıqdır.</p>}
    </div>
  );
};

export default TextPanelToggle;
