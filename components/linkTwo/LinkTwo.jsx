import Titles from "../assets/Titles";

export default function LinkTwo() {
  return (
    <section
      id="linkTwo"
      className="w-full min-h-screen pt-[100px] bg-white flex justify-center"
    >
      <div className="container mx-auto">
        <div className="flex justify-between w-full">
          <Titles title="Programas" delay={0.2} />
        </div>
        <hr />
      </div>
    </section>
  );
}
