import "./LoginForm.scss";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import generateToken from "token-generator-mk-q";

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
      localStorage.setItem("postinjho-token", generateToken(12, true));
      navigate("/posts");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSubmit();
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNickname(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
            />
          </div>
          <div className={"login-form__input"}>
            <span>Password:</span>
            <Input
              placeholder={"Type in your password..."}
              type={"password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
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
