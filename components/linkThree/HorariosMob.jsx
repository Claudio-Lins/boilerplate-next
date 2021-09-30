import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import SegundaMob from "./SegundaMob";
import TercaMob from "./TercaMob";
import QuartaMob from "./QuartaMob";
import QuintaMob from "./QuintaMob";
import SextaMob from "./SextaMob";
import SabadoMob from "./SabadoMob";
import DomingoMob from "./DomingoMob";

export default function HorariosMob({ schedule}) {
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
      <div className="mt-2 px-2">
        <SegundaMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <TercaMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <QuartaMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <QuintaMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <SextaMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <SabadoMob schedule={schedule} />
      </div>
      <div className="mt-2 px-2">
        <DomingoMob schedule={schedule} />
      </div>
      
    </Slide>
  );
}
