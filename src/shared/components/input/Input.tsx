import "./Input.scss";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: any;
}

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
      />
    </>
  );
}
