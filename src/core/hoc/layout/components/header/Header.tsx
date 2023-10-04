import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../shared/components/button";
import { ButtonTypes } from "../../../../../shared/constants/ButtonTypes";
import { useTranslation } from "react-i18next";

export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleLogout() {
    localStorage.removeItem("postinjho-token");
    navigate("/");
  }

  function viewProfile() {
    navigate("/profile");
  }

  return (
    <>
      <div className={"c-header"}>
        <div>
          <span className={"c-header__title"}>{t("BASE.TITLE")}</span>
          <Button
            type={ButtonTypes.secondary}
            text={t("BASE.PROFILE")}
            onClick={viewProfile}
          />
        </div>
        <Button
          type={ButtonTypes.secondary}
          text={t("BASE.LOGOUT")}
          onClick={handleLogout}
        />
      </div>
    </>
  );
}
