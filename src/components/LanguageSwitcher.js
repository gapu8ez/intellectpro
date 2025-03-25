import React, { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("mn");

  useEffect(() => {
    // Хадгалагдсан хэл байгаа эсэхийг шалгах
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "mn" ? "en" : "mn";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сонголтыг хадгалах
  };

  return (
    <button className="lang-btn" onClick={toggleLanguage}>
      {language === "mn" ? "🇲🇳 Монгол" : "🇺🇸 English"}
    </button>
  );
};

export default LanguageSwitcher;
