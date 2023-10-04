import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    notify();
  };

  const notify = () => toast(t("NOTIFICATION.LANGUAGE"));

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
      <ToastContainer />
    </>
  );
}
