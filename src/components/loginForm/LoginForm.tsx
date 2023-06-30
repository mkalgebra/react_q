import "./LoginForm.scss";
import Input from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LoginForm() {
  useEffect(() => {
    const token = localStorage.getItem("postinjho-token");
    if (token) {
      navigate("/posts");
    }
  }, []);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    if (nickname === "admin" && password === "admin") {
      localStorage.setItem("postinjho-token", "123123123");
      navigate("/posts");
    }
  }

  return (
    <>
      <section className={"login-form"}>
        <div className={"login-form__card"}>
          <h1>Please login in order to proceed</h1>
          <div className={"login-form__input"}>
            <span>Nickname:</span>
            <Input
              placeholder={"Type in your nickname..."}
              value={nickname}
              onChange={(e: any) => setNickname(e.target.value)}
            />
          </div>
          <div className={"login-form__input"}>
            <span>Password:</span>
            <Input
              placeholder={"Type in your password..."}
              type={"password"}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className={"login-form__action"}>
            <Button text={"Login"} onClick={handleSubmit} />
          </div>
        </div>
      </section>
    </>
  );
}
