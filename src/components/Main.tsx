import Button from "./Button";

export default function Main() {
  return (
    <div className="main">
      <section className="text">
        <h2>Not your average potion...</h2>
        <p>The best potions at the best price for any deed imaginable.</p>
        <Button text="Explore Products" />
      </section>
      <section className="images">
        <img src="./image0.png" width={"120px"} />
        <img src="./image5.png" width={"120px"} />
        <img src="./image6.png" width={"120px"} />
      </section>
    </div>
  );
}
