import React from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  textField: string;
  setTextField: (value: string) => void;
};

export default function TextFiled({
  label, placeholder, textField, setTextField,
}: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTextField(value);
  };

  const id = `input-${label}`;
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          paddingRight: '1rem',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={textField}
        onChange={handleChange}
      />
    </div>
  );
}
