import Titles from "../assets/Titles";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full h-auto pt-14 pb-28 px-2 bg-white flex justify-center"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <Titles title="Contacto" delay={0.2} />
        </div>
        <hr />
      </div>
    </section>
  );
}
