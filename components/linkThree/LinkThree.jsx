import Titles from "../assets/Titles";
import HorariosMob from "./HorariosMob";

export default function LinkThree() {
  return (
    <section
      id="linkThree"
      className="w-full px-3 h-auto pt-10 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm"
    >
      <div className="container w-full mx-auto">
        <div className="w-full">
          <Titles title="Horários" delay={0.2} />
        </div>
        <hr className="border-white" />
      <HorariosMob />
      </div>
    </section>
  );
}
