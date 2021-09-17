import Image from "next/image";

export default function CardEquipa(props) {
  return (
    <div className="flex flex-col md:w-1/4 mt-10">
      <div className="w-xs h-96 md:h-80 md:w-sm relative">
        <Image
          src={props.src || "/equipa/img01.jpeg"}
          alt="imagem equipa"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-2">
        <h3 className="mt-2 font-bold text-2xl lg:text-xl">{props.name}</h3>
        <p className="font-light text-xs">{props.cargo}</p>
        <p className="font-light leading-snug text-sm antialiased">
          {props.description}
        </p>
      </div>
    </div>
  );
}
