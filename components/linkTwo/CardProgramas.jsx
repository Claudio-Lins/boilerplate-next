import Image from "next/image";

import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { animationLeft } from "../../utils/Animations";

export default function CardProgramas({ programas }) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={animationLeft}
      animate={controls}
      transition={{ delay: 0.03, type: "spring" }}
      className=" bg-white w-full shadow-md h-24 mx-3 border rounded-2xl flex justify-around items-center overflow-hidden md:w-96"
    >
      <div className="relative w-[60%] h-full">
        <Image
          src={programas.cover.url || "/assets/picture.svg"}
          alt="image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className=" flex-1 w-full flex flex-col items-center justify-center h-4/5 px-1 sm:h-full">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-base font-bold mb-0 text-gray-600 leading-snug">
            {programas.title}
          </h1>
          {/* <span className="text-xs text-indigo-300 mt-0">{programas.by}</span> */}
        </div>
        <p className="text-xs text-center text-gray-500">{programas.description}</p>
      </div>
    </motion.div>
  );
}
