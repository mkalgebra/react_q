import "./Input.scss";
import InputProps from "../../models/Input";

export default function Input(props: InputProps) {
  return (
    <>
      <input
        className={"c-input"}
        data-testid={"c-input"}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
}
