import { Terca } from "../../data/Horarios";

export default function HorarioTercaMob(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-6 bg-yellow-500 rounded-t-3xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased">
          Terça-feira
        </div>
      </div>
      {Terca.map((terca, id) => {
        return (
          <div key={terca.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4">
              <div className="flex flex-col space-y-2">
                <div className="text-xs font-semibold tracking-wider text-red-600">
                  {terca.hora}
                </div>
                <div className="text-center text-xl font-bold tracking-wider leading-6 uppercase text-green-800">
                  {terca.title}
                </div>
                <div className="text-xs font-light tracking-wider text-red-600">
                  {terca.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
