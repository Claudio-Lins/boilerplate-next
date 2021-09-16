import Lupa from "../icons/Lupa";

export default function Busca() {
  return (
    <div className="flex justify-end pr-2">
      <input
        className="border-none rounded-md h-[30px] w-4/6 sm:w-full bg-gray-200"
        type="text"
      />
      <Lupa />
    </div>
  );
}
