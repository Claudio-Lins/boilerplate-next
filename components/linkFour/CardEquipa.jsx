import Image from "next/image";

export default function CardEquipa({ team }) {
  
  return (
    <div className="flex flex-col md:w-1/4 mt-10">
      <div className="w-xs h-96 md:h-80 md:w-sm relative">
        <Image
          src={team.cover[0].url || "/assets/picture.svg"}
          alt="imagem equipa"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-2">
        <h3 className="mt-2 font-bold text-2xl lg:text-xl">{team.name}</h3>
        <p className="font-light text-xs">{team.office}</p>
        <p className="font-light leading-snug text-sm antialiased">
          {team.bio}

        </p>
      </div>
    </div>
  );
}
