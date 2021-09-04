import Link from "next/link";
import Image from "next/image";

export default function LogoMarca() {
  return (
    <>
      <div className=" flex items-center mt-2 ml-4 cursor-pointer drop-shadow hover:drop-shadow-none">
        <Link href="/" passHref>
          <Image
            src="/logo/logoMarca.svg"
            alt="Rede Sem Fronteiras"
            width={256}
            height={85}
          />
        </Link>
      </div>
    </>
  );
}
