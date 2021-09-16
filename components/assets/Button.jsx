import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { animationLeft } from "../../utils/Animations";

export default function Button(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={props.variants || animationLeft}
      animate={controls}
      transition={{ delay: props.delay || 0.2, type: "tween" }}
      className="bg-green-700 px-4 py-2 text-center text-white rounded-md w-1/4 mx-auto mt-4 shadow-md"
    >
      {props.title}
    </motion.div>
  );
}
