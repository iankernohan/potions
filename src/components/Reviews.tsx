import Heading from "./Heading";
import Review from "./Review";

export default function Reviews() {
  return (
    <div className="reviews">
      <Heading title="Reviews" />
      <section>
        <Review
          name="Gandalf"
          image="./wizard.jpg"
          review="Ah, my dear firends, let me regale you with my experience with the potion called Aurora Somniorum. It is truly a marvel! With just a sip, I found myself transported to a realm of dreams and enchantment. The potion's ethreal hues danced before my eyes, luling me into a deep and peacful slumber. It was as if the stars themselves whispered sweet melodies in my ear."
        />
        <Review
          name="Luna Amarvei"
          image="./fairy.png"
          review="My experience with the potion called Nebulae Caelestes was like sipping stardust from the heavens! As the potion touched my lips, a celestial symphony of flavors danced upon my tongue. I felt a gentle wave of trnaquility wash over me, as if I were floating amoung the contelations. The potion's shimmering hues filled my heart with joy and wonder, igniting a spark of cosmic inspiration within me."
        />
        <Review
          name="Grommash of the Stone"
          image="./ogre.jpg"
          review="Oi, listen up! So, I got me hands on this potion called Ignis Aeternus, and let me tell ya, it's a real firecracker! With just a swig, I felt a surge of energy coursing through me veins, like a raging inferno. This potion, uh, I mean elixir, has truly brought a new level of excitement to my days. Highly recommend for those who want to embrace their inner fire, in a... positive way, of course!"
        />
      </section>
    </div>
  );
}
