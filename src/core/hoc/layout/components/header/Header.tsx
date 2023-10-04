import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button";
import { ButtonTypes } from "../../../../../shared/constants/ButtonTypes";

export default function Header() {
  const navigate = useNavigate();

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
          <span className={"c-header__title"}>Postinjho</span>
          <Button
            type={ButtonTypes.secondary}
            text={"Profile"}
            onClick={viewProfile}
          />
        </div>
        <Button
          type={ButtonTypes.secondary}
          text={"Logout"}
          onClick={handleLogout}
        />
      </div>
    </>
  );
}
