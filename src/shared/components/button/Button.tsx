import "./Button.scss";
import ButtonProps from "../../models/Button";

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        data-testid={"c-button"}
        className={`c-button c-button--${props.type ? props.type : "primary"}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
}
