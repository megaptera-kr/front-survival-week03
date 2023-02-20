import { ChangeEvent, useRef } from 'react';

type TextFieldProps = {
  filterText: string
  label: string
  name: string
  placeholder: string
  onChange: (value: string) => void
}

function TextField({
  filterText, label, name, placeholder, onChange,
}: TextFieldProps) {
  const onClickChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  const id = useRef(`input-${name}`.replace(/ /g, '-').toLowerCase());

  return (
    <>
      <label htmlFor={id.current}>{label}</label>
      <input
        type="text"
        id={id.current}
        placeholder={placeholder}
        value={filterText}
        onChange={onClickChange}
      />
    </>
  );
}

export default TextField;
