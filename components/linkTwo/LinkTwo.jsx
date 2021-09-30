import Titles from "../assets/Titles";
import BoxPrograms from "./BoxProgramas";
import CardProgramas from "./CardProgramas";

export default function LinkTwo({ programas }) {
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
        <div className="flex flex-wrap gap-8 justify-center items-center mt-10 mb-12">
        {programas &&
            programas.map((programas) => (
                <CardProgramas key={programas.id} programas={programas} />
              ))}
          
        </div>
      </div>
    </section>
  );
}
