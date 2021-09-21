import { Terca } from "../../data/Horarios";

export default function HorarioTercaMob(props) {
  return (
    <div className="flex flex-col lg:min-w-[140px] 2xl:min-w-3xl mt-4">
      <div className="flex justify-center bg-yellow-500 py-6 rounded-t-3xl lg:py-3 lg:rounded-t-xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased lg:text-sm">
          Terça-feira
        </div>
      </div>
      {Terca.map((terca, id) => {
        return (
          <div key={terca.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4 lg:p-2">
              <div className="flex flex-col space-y-2 lg:space-y-1">
                <div className="text-xs lg:text-[10px] font-semibold tracking-wider text-red-600">
                  {terca.hora}
                </div>
                <div className="text-xl font-bold tracking-wider leading-6 text-green-800 lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm">
                  {terca.title}
                </div>
                <div className="text-xs lg:text-[10px] font-light tracking-wider text-red-600">
                  {terca.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center py-1 mt-2 bg-yellow-500 rounded-b-xl"></div>
    </div>
  );
}
