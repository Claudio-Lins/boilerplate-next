import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { animationLeft } from "../../utils/Animations";

export default function BoxPrograms(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={props.variants || animationLeft}
      animate={controls}
      transition={{ delay: props.delay, type: "tween" }}
      className="flex justify-center items-center w-[300px] sm:w-[200px] h-[110px] bg-pink-400 rounded-[15px] shadow"
    >
      {props.title}
    </motion.div>
  );
}
