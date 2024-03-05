interface Props {
  title: string;
}

export default function Heading({ title }: Props) {
  return (
    <div className="heading">
      <h3>{title}</h3>
      <hr />
    </div>
  );
}
