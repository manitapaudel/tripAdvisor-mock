export type InputFieldProps = {
  className?: string;
  children: string;
  id: string;
  value: string;
  placeholder: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};
