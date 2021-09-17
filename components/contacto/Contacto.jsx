import Titles from "../assets/Titles";
import { FiPhone, FiMapPin, FiAtSign } from "react-icons/fi";

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
        <div className="flex mt-10">
          <div className="bg-purple-600 w-full p-8 rounded-2xl sm:w-[40%]">
            <h2 className="text-center text-white text-2xl sm:text-left">
              Informações de contacto
            </h2>
            <hr />
            <div className="flex items-center mt-16 space-x-4">
              <FiPhone className="text-white text-2xl font-extralight" />
              <p className="text-white text-sm font-light">
                +351 123 456 789 / +351 123 456 789 +351 123 456 789
              </p>
            </div>
            <div className="flex items-center mt-8 space-x-4">
              <FiAtSign className="text-white text-2xl font-extralight" />
              <p className="text-white text-sm font-light">email@email.com</p>
            </div>
            <div className="flex items-center mt-8 space-x-4">
              <FiMapPin className="text-white text-2xl font-extralight" />
              <p className="text-white text-sm font-light">Morada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
