import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { scaleAnimationUp } from "../../utils/Animations";

export default function BoxDestaque(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={scaleAnimationUp}
      animate={controls}
      transition={{ delay: 0.4, type: "tween" }}
      className="sm:w-[370px] h-[450px] w-full my-4 rounded-md shadow bg-purple-500 flex justify-center items-center"
    >
      {props.title}
    </motion.div>
  );
}
