const MenuButtons = ['전체', '중식', '한식', '일식'];

function Button() {
  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {MenuButtons.map((menuButton) => (
        <button type="button" key={menuButton} style={{ marginRight: 15 }}>
          {menuButton}
        </button>
      ))}
    </div>
  );
}

export default Button;
