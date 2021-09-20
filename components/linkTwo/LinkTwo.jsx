import Titles from "../assets/Titles";
import BoxPrograms from "./BoxProgramas";

export default function LinkTwo() {
  return (
    <section
      id="linkTwo"
      className="w-full px-3 h-auto pt-10 pb-14 bg-white flex justify-center"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <Titles title="Programas" delay={0.2} />
        </div>
        <hr />
        <div className="flex flex-wrap gap-8 justify-center items-center mt-4 mb-12">
          <BoxPrograms title="Programa 01" />
          <BoxPrograms title="Programa 02" />
          <BoxPrograms title="Programa 03" />
          <BoxPrograms title="Programa 04" />
          <BoxPrograms title="Programa 05" />
          <BoxPrograms title="Programa 06" />
          <BoxPrograms title="Programa 07" />
          <BoxPrograms title="Programa 08" />
          <BoxPrograms title="Programa 09" />
          <BoxPrograms title="Programa 10" />
          <BoxPrograms title="Programa 11" />
          <BoxPrograms title="Programa 12" />
        </div>
      </div>
    </section>
  );
}
