import { ButtonTypes } from "../constants/ButtonTypes";

export default interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonTypes;
}
