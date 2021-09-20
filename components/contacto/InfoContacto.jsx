import { FiAtSign, FiMapPin, FiPhone } from "react-icons/fi";
import SocialNetwork from "./SocialNetwork";

import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { animationLeft } from "../../utils/Animations";

export default function InfoContacto(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={animationLeft}
      animate={controls}
      transition={{ delay: 0.4, type: "tween" }}
      className="bg-purple-600 w-full p-8 rounded-2xl shadow-md lg:h-[570px] lg:w-[40%] xl:p-16"
    >
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
      <div className="flex justify-center mt-20 lg:mt-28 xl:mt-40">
        <SocialNetwork />
      </div>
    </motion.div>
  );
}
