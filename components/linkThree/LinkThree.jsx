import Titles from "../assets/Titles";
import HorariosDesk from "./HorariosDesk";
import HorariosMob from "./HorariosMob";
import Schedule from "./schedule/Schedule";

export default function LinkThree({ schedule }) {
  return (
    <section
      id="linkThree"
      className="w-full px-3 h-auto py-10  shadow-sm"
    >
      <div className="container w-full mx-auto">
        <div className="w-full">
          <Titles title="Horários" delay={0.2} />
        </div>
        <hr className="border-white sm:mt-2" />
        <HorariosMob schedule={schedule} />
        <Schedule schedule={schedule} />
      </div>
    </section>
  );
}
