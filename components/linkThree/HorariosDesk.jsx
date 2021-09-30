import Schedule from "./schedule/Schedule";

export default function HorariosDesk({ schedule }) {
  return (
    <div className=" hidden lg:flex justify-evenly space-x-2 px-4">
      <Schedule schedule={schedule} />
    </div>
  );
}
