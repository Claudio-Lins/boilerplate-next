import TitlesW from "../assets/TitlesW";
import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { scaleAnimationUp } from "../../utils/Animations";

export default function LinkFive() {
  const [element, controls] = useScroll();
  return (
    <section
      id="linkFive"
      className="w-full px-3 h-auto py-10 bg-[#1A5B47] shadow-sm flex items-center"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <TitlesW title="Quem somos" delay={0.2} />
        </div>
        <hr className="border-white" />
        <motion.div
          ref={element}
          variants={scaleAnimationUp}
          animate={controls}
          transition={{ delay: 0.4, type: "tween" }}
          className="border border-[#1A5B47] rounded-xl p-4"
        >
          <div className="flex justify-center px-2">
            <div className="hidden w-full sm:flex"></div>
            <div className="flex sm:w-full">
              <p className=" text-justify text-white text-sm font-light tracking-wider leading-relaxed antialiased sm:p-10 sm:text-lg xl:p-20 xl:text-xl">
                A Rádio Miúdos é a primeira rádio portuguesa que iniciou as
                emissões experimentais em novembro de 2015. É uma rádio
                exclusivamente on-line com emissão 24 horas/ 7 dias por semana.
                <br />
                <br />
                <hr className="w-1/2 mx-auto" />
                <br />O projeto foi premiado pela fundação Calouste Gulbenkian,
                na última edição do conscurso FAZ IDEIAS DE ORIGEM PORTUGUESA
                2015, um concurso de empreeddorismosocial na diáspora e pela
                representação da Comissão Europeia em Portugal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
