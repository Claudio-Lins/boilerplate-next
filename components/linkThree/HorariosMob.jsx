import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import HorarioDomingoMob from "./HorarioDomingoMob";
import HorarioQuartaMob from "./HorarioQuartaMob";
import HorarioQuintaMob from "./HorarioQuintaMob";
import HorarioSabadoMob from "./HorarioSabadoMob";
import HorarioSegundaMob from "./HorarioSegundaMob";
import HorarioSextaMob from "./HorarioSextaMob";
import HorarioTercaMob from "./HorarioTercaMob";

export default function HorariosMob() {
  const properties = {
    duration: 50000,
    transitionDuration: 400,
    infinite: true,
    canSwipe: true,
    prevArrow: <div className="hidden"></div>,
    nextArrow: <div className="hidden"></div>,
  };

  return (
    <Slide {...properties}>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioSegundaMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioTercaMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioQuartaMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioQuintaMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioSextaMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioSabadoMob />
      </div>
      <div className="mt-2 px-2 lg:hidden">
        <HorarioDomingoMob />
      </div>
    </Slide>
  );
}
