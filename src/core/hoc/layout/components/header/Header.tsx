import "./Header.scss";
import Button, {
  ButtonTypes,
} from "../../../../../shared/components/button/Button";
import { useNavigate } from "react-router-dom";

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
          <Button
            type={ButtonTypes.secondary}
            text={"Workflows"}
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
