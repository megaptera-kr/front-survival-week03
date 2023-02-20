type ButtonProps = {
  label: string

  onClick: () => void

}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
