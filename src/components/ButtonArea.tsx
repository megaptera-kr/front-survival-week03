import { MouseEvent } from "react";

const menuTypeList = ["전체", "한식", "중식", "일식"];
interface ButtonAreaProps {
  setMenuCategory: (value: string) => void;
}
export default function ButtonArea({ setMenuCategory }: ButtonAreaProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    console.log(value);
    setMenuCategory(value);
  };
  return (
    <ul
      className="button-wrapper"
      style={{ display: "flex", listStyle: "none", padding: "0px" }}
    >
      {menuTypeList.map((name, idx) => {
        return (
          <li key={`${name}_${idx}`} style={{ marginRight: "1rem" }}>
            <button value={name} onClick={handleClick}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
