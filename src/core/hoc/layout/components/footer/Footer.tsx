import "./Footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className={"c-footer"}>
        <p>©Marijo Kis</p>
        <div>
          <span
            className={
              i18n.language === "en"
                ? "c-footer__active-lang"
                : "c-footer__inactive-lang"
            }
            onClick={() => changeLanguage("en")}
          >
            {t("BASE.EN")}
          </span>
          <span
            className={
              i18n.language === "hr"
                ? "c-footer__active-lang"
                : "c-footer__inactive-lang"
            }
            onClick={() => changeLanguage("hr")}
          >
            {t("BASE.HR")}
          </span>
        </div>
      </div>
    </>
  );
}
