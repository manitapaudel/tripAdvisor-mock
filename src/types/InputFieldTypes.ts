export type InputFieldProps = {
  className?: string;
  children: string;
  id: string;
  value: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "checkbox";
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};
