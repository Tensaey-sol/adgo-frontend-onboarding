import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";

interface Description {
  line1: string;
  line2: string;
}

function App() {
  const { t, i18n } = useTranslation();
  const { line1, line2 } = t("description", {
    returnObjects: true,
  }) as Description;

  const isArabic = i18n.language === "ar";
  const textAlign = isArabic ? "text-right" : "text-left";

  return (
    <div className="min-w-[320px] min-h-screen m-0 p-5 text-[rgba(255,255,255,0.87)] bg-[#242424] font-sans">
      <LanguageSelector />
      <div className="flex flex-col items-center w-full max-w-max mx-auto">
        <h1 className="w-full text-center text-3xl font-bold">
          {t("greeting")}
        </h1>
        <span className={`w-full ${textAlign}`}>
          <Trans
            i18nKey={line1}
            values={{ name: "Guest1!" }}
            components={{ 1: <b /> }}
          />
        </span>
        <p className={`w-full ${textAlign}`}>{line2}</p>
      </div>
    </div>
  );
}

export default App;
