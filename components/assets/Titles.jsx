import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { titleAnimationLeft } from "../../utils/Animations";

export default function Titles(props) {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={titleAnimationLeft}
      animate={controls}
      transition={{ delay: props.delay, type: "tween" }}
      className="font-bold text-2xl text-[#1A5B47] sm:text-4xl mb-2 sm:mb-4 drop-shadow-md"
    >
      <h1>{props.title}</h1>
    </motion.div>
  );
}
