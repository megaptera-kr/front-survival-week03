import { useCallback } from "react";

interface Props {
  options: Array<{ label: string; value: string }>;
  selected: string;
  onClick: (value: string) => void;
}

const Select = ({ options, onClick }: Props) => {
  const handleClick = useCallback((selected: string) => {
    onClick(selected);
  }, []);

  return (
    <ul>
      {options.map(row => {
        return (
          <li key={row.value}>
            <button onClick={() => handleClick(row.value)}>{row.label}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Select;
