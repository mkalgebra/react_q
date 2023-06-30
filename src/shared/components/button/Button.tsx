import "./Button.scss";

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonTypes;
}

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
