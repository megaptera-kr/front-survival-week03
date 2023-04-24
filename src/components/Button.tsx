const menuTypes = [
  { name: '전체', value: '' },
  { name: '중식', value: '중식' },
  { name: '한식', value: '한식' },
  { name: '일식', value: '일식' },
];

interface ButtonProps {
  onClickMenuButton: (value: string) => void;
}

function Button({ onClickMenuButton }: ButtonProps) {
  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {menuTypes.map((menuType) => (
        <button
          type="button"
          key={menuType.name}
          style={{ marginRight: 15 }}
          onClick={() => {
            onClickMenuButton(menuType.value);
          }}
        >
          {menuType.name}
        </button>
      ))}
    </div>
  );
}

export default Button;
