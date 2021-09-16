import Button from "../assets/Button";
import Titles from "../assets/Titles";
import Lupa from "../icons/Lupa";
import Box from "./Box";
import Busca from "./Busca";

export default function LinkOne() {
  return (
    <section
      id="linkOne"
      className="w-full px-3 min-h-screen py-8 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <Titles title="Destaque" delay={0.2} />
          <Busca />
        </div>

        <hr className="border-white" />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <Box title="Destaque #01" />
          <Box title="Destaque #02" />
          <Box title="Destaque #03" />
        </div>
        <Button title="Todos" />
      </div>
    </section>
  );
}
