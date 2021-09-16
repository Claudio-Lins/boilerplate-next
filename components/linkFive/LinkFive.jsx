import Titles from "../assets/Titles";

export default function LinkFive() {
  return (
    <section
      id="linkFive"
      className="w-full px-3 h-auto pt-14 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <Titles title="Quem somos" delay={0.2} />
        </div>
        <hr className="border-white" />
      </div>
    </section>
  );
}
