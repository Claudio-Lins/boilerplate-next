import {
  animationDown,
  animationLeft,
  animationRight,
  animationUp,
  scaleAnimationUp,
} from "../../utils/Animations";
import Button from "../assets/Button";
import Titles from "../assets/Titles";
import BoxDestaque from "./BoxDestaque";
import Busca from "./Busca";

export default function LinkOne() {
  return (
    <section
      id="linkOne"
      className="w-full px-3 min-h-screen py-8 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex w-full">
          <Titles title="Destaque" delay={0.2} />
          <Busca />
        </div>

        <hr className="border-white" />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <BoxDestaque
            title="Destaque #01"
            delay={0.4}
            variants={animationUp}
          />
          <BoxDestaque
            title="Destaque #02"
            delay={0.6}
            variants={animationUp}
          />
          <BoxDestaque
            title="Destaque #03"
            delay={0.8}
            variants={animationUp}
          />
        </div>
        <Button title="Todos" delay={1} variants={scaleAnimationUp} />
      </div>
    </section>
  );
}
