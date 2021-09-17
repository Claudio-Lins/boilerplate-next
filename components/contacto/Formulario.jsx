import ImputForm from "../form/InputForm";
import SelectForm from "../form/SelectForm";

import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { animationLeft } from "../../utils/Animations";

export default function Formulario(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={animationLeft}
      animate={controls}
      transition={{ delay: 0.4, type: "tween" }}
      className="bg-white flex flex-col mt-4 w-full p-8 border rounded-2xl"
    >
      <h2 className="text-center w-full text-2xl">Formulário</h2>
      <form action="" className="mt-8">
        <fieldset
          id="dados-pessoais"
          className="flex flex-wrap justify-between items-center border border-solid border-gray-200 p-4 rounded-md shadow"
        >
          <legend className="text-lg bg-white text-gray-400 font-light tracking-wider px-2">
            Dados pessoais
          </legend>
          <div className="flex flex-col w-full sm:grid sm:grid-cols-2">
            <div className="my-4 w-full lg:px-2 relative">
              <ImputForm
                type="text"
                id="firstName"
                name="firstName"
                field="First Name"
                placeholder="First Name"
                htmlFor="firstName"
              />
            </div>
            <div className="my-4 w-full lg:px-2 relative">
              <ImputForm
                type="text"
                id="middleName"
                name="middleName"
                field="Middle Name"
                placeholder="Middle Name"
                htmlFor="middleName"
              />
            </div>
            <div className="my-4 w-full lg:px-2 relative">
              <ImputForm
                type="text"
                id="lastName"
                name="lastName"
                field="Last Name"
                placeholder="Last Name"
                htmlFor="lastName"
              />
            </div>
            <div className="my-4 w-full lg:px-2 relative">
              <ImputForm
                type="email"
                id="email"
                name="email"
                field="Email"
                placeholder="Email"
                htmlFor="email"
              />
            </div>
            <div className="my-4 w-full lg:px-2 relative ">
              <ImputForm
                className="appearance-none"
                type="number"
                id="phone"
                name="phone"
                field="Phone"
                placeholder="Phone"
                htmlFor="phone"
              />
            </div>
          </div>
        </fieldset>
        <fieldset
          id="endereco"
          className="flex flex-wrap justify-between items-center mt-8 border border-solid border-gray-200 p-4 rounded-md shadow"
        >
          <legend className="text-lg text-center bg-white text-gray-400 font-light tracking-wider px-2">
            Endereço
          </legend>
          <div className="my-4 w-full lg:w-1/2 lg:px-2 relative">
            <SelectForm
              id="country"
              name="country"
              field="Select your country"
            />
          </div>
        </fieldset>
      </form>
    </motion.div>
  );
}
