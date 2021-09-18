import { Sabado } from "../../data/Horarios";

export default function HorarioSabadoMob(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-6 bg-black rounded-t-3xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased">
          Sábado
        </div>
      </div>
      {Sabado.map((sabado, id) => {
        return (
          <div key={sabado.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4">
              <div className="flex flex-col space-y-2">
                <div className="text-xs font-semibold tracking-wider text-red-600">
                  {sabado.hora}
                </div>
                <div className="text-center text-xl font-bold tracking-wider leading-6 uppercase text-green-800">
                  {sabado.title}
                </div>
                <div className="text-xs font-light tracking-wider text-red-600">
                  {sabado.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
