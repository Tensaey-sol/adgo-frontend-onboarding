import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "am", lang: "Amharic" },
  { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container flex flex-col">
      <div className="flex gap-2.5">
        {languages.map((lng) => {
          return (
            <button
              className={`rounded-lg border border-transparent px-4 py-2 text-base font-medium transition-colors duration-200 ${
                lng.code === i18n.language
                  ? "bg-[#646cff]"
                  : "bg-[#1a1a1a] hover:border-[#646cff]"
              }`}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
