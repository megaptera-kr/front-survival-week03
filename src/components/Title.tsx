type TitleProps = {
  label: string;
};

export default function Title({ label }: TitleProps) {
  return <h1>{label}</h1>;
}
