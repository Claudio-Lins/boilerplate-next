import Titles from "../assets/Titles";
import InfoContacto from "./InfoContacto";
import Formulario from "./Formulario";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full h-auto pt-10 pb-28 px-2 bg-white flex justify-center"
    >
      <div className="container w-full mx-auto">
        <div className="w-full">
          <Titles title="Contacto" delay={0.2} />
        </div>
        <hr />
        <div className="flex flex-col w-full justify-center items-center sm:flex-row sm:space-x-4 mt-10">
          <InfoContacto />
          <Formulario />
        </div>
      </div>
    </section>
  );
}
