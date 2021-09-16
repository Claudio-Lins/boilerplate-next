import Titles from "../assets/Titles";
import { useScroll } from "../assets/useScroll";
import { motion } from "framer-motion";
import { scaleAnimationUp } from "../../utils/Animations";

export default function LinkFive() {
  const [element, controls] = useScroll();
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
        <motion.div
          ref={element}
          variants={scaleAnimationUp}
          animate={controls}
          transition={{ delay: 0.4, type: "tween" }}
          className="border border-[#1A5B47] rounded-xl p-4"
        >
          <div className="bg-[#1A5B47] rounded-xl px-4 py-6">
            <p className="text-center text-white text-sm tracking-wider leading-relaxed antialiased md:p-44 md:text-2xl">
              A Rádio Miúdos é a primeira rádio portuguesa que iniciou as
              emissões experimentais em novembro de 2015. É uma rádio
              exclusivamente on-line com emissão 24 horas/ 7 dias por semana.
              <br />
              <br />O projeto foi premiado pela fundação Calouste Gulbenkian, na
              última edição do conscurso FAZ IDEIAS DE ORIGEM PORTUGUESA 2015,
              um concurso de empreeddorismosocial na diáspora e pela
              representação da Comissão Europeia em Portugal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
