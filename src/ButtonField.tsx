type ButtonFieldProps = {
    buttonValue: string;
    buttonClicked: string;
    setButtonClicked: (value : string) => void;
}

export default function ButtonField({ buttonValue, buttonClicked, setButtonClicked }: ButtonFieldProps) {
  const handleClick = () => {
    if (buttonValue === '전체') {
      console.log(`${buttonValue} clicked!`);

      setButtonClicked(buttonClicked = buttonValue);
      console.log(buttonClicked);
    } else {
      console.log(`${buttonValue} clicked!`);

      setButtonClicked(buttonClicked = buttonValue);
      console.log(buttonClicked);
    }
  };

  return (
    <input
      type="button"
      value={buttonValue}
      onClick={handleClick}
    />
  );
}
