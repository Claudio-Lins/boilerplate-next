import { scaleAnimationUp } from "../../utils/Animations";
import Button from "../assets/Button";
import Titles from "../assets/Titles";
import BoxDestaque from "./BoxDestaque";
import Busca from "./Busca";

export default function LinkOne() {
  return (
    <section
      id="linkOne"
      className="w-full px-3 h-auto pt-14 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container w-full mx-auto">
        <div className="flex justify-between items-center w-full">
          <Titles title="Destaque" delay={0.2} />
          <Busca />
        </div>

        <hr className="border-white" />
        <div className="flex flex-col w-full sm:flex-row sm:justify-between">
          <BoxDestaque title="Destaque #01" />
          <BoxDestaque title="Destaque #02" />
          <BoxDestaque title="Destaque #03" />
        </div>
        <Button title="Todos" delay={0.4} variants={scaleAnimationUp} />
      </div>
    </section>
  );
}
