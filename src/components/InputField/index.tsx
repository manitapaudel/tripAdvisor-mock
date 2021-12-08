import { InputFieldProps } from "../../types/InputFieldTypes";

const InputField: React.FC <InputFieldProps> = ({
  className = "",
  children,
  value,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className="font-medium text-green-600">
        {children}
      </label>
      <br />
      <input
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`mt-1.5 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full ${className}`}
      />
    </>
  );
};

export default InputField;
