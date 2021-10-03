import Titles from "../assets/Titles";
import CardEquipa from "./CardEquipa";

export default function LinkFour({ team }) {
  return (
    <section
      id="linkFour"
      className="w-full px-3 h-auto py-10 bg-[#1A5B47] bg-opacity-10 shadow-sm"
    >
      <div className="container w-full mx-auto">
        <div className="w-full">
          <Titles title="Equipa" delay={0.2} />
        </div>
        <hr />
        <div className="w-full mx-auto md:flex justify-evenly md:space-x-4">
        {team &&
            team.map((team) => (
                <CardEquipa key={team.id} team={team} />
              ))}
         
        </div>
      </div>
    </section>
  );
}
