interface Props {
  text: string;
  style?: object;
}

export default function Button({ text, style }: Props) {
  return (
    <button className="button" style={style}>
      {text}
    </button>
  );
}
