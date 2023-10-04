import "./LoginForm.scss";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import generateToken from "token-generator-mk-q";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem("postinjho-token");
    if (token) {
      navigate("/posts");
    }
  }, []);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (nickname === "admin" && password === "admin") {
      localStorage.setItem("postinjho-token", generateToken(12, true));
      navigate("/posts");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <section className={"login-form"}>
        <div className={"login-form__card"}>
          <h1>{t("LOGIN.CAPTION")}</h1>
          <div className={"login-form__input"}>
            <span>{t("LOGIN.USERNAME")}:</span>
            <Input
              placeholder={`${t("LOGIN.USERNAME.PLACEHOLDER")}...`}
              value={nickname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNickname(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
            />
          </div>
          <div className={"login-form__input"}>
            <span>{t("LOGIN.PASSWORD")}:</span>
            <Input
              placeholder={`${t("LOGIN.PASSWORD.PLACEHOLDER")}...`}
              type={"password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
            />
          </div>
          <div className={"login-form__action"}>
            <Button text={t("LOGIN.ACTION")} onClick={handleSubmit} />
          </div>
        </div>
      </section>
    </>
  );
}
