import Titles from "../assets/Titles";
import CardEquipa from "./CardEquipa";

export default function LinkFour() {
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
          <CardEquipa
            name="André dias"
            cargo="Desing/Web Developer"
            description="Eu sou aquela pessoa que nunca ouves mas vês o que faço."
            src="/equipa/img02.jpeg"
          />
          <CardEquipa
            name="André Melão"
            cargo="co-CEO / Locutor"
            description="Esta é a voz da Rádio Radical, mas ninguém quer saber"
            src="/equipa/img03.jpeg"
          />
          <CardEquipa
            name="Catia Barbosa"
            cargo="Locutora / Jornalista"
            description="Licenciada em Jornalismo e Com. apaixonada por rádio e teatro."
            src="/equipa/img01.jpeg"
          />
          <CardEquipa
            name="Cézar Ferreira"
            cargo="Locutor"
            description="Tenho algumas qualidades, mas a maior de todas é ser bo Benfica."
            src="/equipa/img04.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
