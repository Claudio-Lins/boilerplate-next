import Day from "./Day";
import HorarioDomingoMob from "./HorarioDomingoMob";
import HorarioQuartaMob from "./HorarioQuartaMob";
import HorarioQuintaMob from "./HorarioQuintaMob";
import HorarioSabadoMob from "./HorarioSabadoMob";
import HorarioSegundaMob from "./HorarioSegundaMob";
import HorarioSextaMob from "./HorarioSextaMob";
import HorarioTercaMob from "./HorarioTercaMob";

export default function HorariosDesk() {
  

  return (
    <div className=" hidden lg:flex justify-evenly space-x-2 px-4">
      <HorarioSegundaMob />
      <HorarioTercaMob />
      <HorarioQuartaMob />
      <HorarioQuintaMob />
      <HorarioSextaMob />
      <HorarioSabadoMob />
      <HorarioDomingoMob />
    </div>
  );
}
