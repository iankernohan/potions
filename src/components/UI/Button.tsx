interface Props {
  text: string;
  style?: object;
  onClick?: () => void;
}

export default function Button({ text, style, onClick }: Props) {
  return (
    <button onClick={onClick} className="button" style={style}>
      {text}
    </button>
  );
}
