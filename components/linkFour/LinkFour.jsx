import Titles from "../assets/Titles";
import CardEquipa from "./CardEquipa";

export default function LinkFour() {
  return (
    <section
      id="linkFour"
      className="w-full h-auto pt-10 pb-14 px-2 bg-white flex justify-center mx-auto"
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
