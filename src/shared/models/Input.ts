export default interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: any;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}
