import Image from "next/image";

export default function Lupa() {
  return (
    <Image
      src="/icons/lupa.svg"
      className="cursor-pointer flex"
      alt="lupa"
      width={20}
      height={23}
    />
  );
}
