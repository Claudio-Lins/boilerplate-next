import { Sabado } from "../../data/Horarios";

export default function HorarioSabadoMob(props) {
  return (
    <div className="headerWeek">
      <div className="flex justify-center py-6 bg-black rounded-t-3xl lg:py-3 lg:rounded-t-xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased lg:text-sm">
          Sábado
        </div>
      </div>
      {Sabado.map((sabado, id) => {
        return (
          <div key={sabado.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4 lg:p-2">
              <div className="flex flex-col space-y-2 lg:space-y-1">
                <div className="text-xs lg:text-[10px] font-semibold tracking-wider text-red-600">
                  {sabado.hora}
                </div>
                <div className="text-xl font-bold tracking-wider leading-6 text-green-800 lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm">
                  {sabado.title}
                </div>
                <div className="text-xs lg:text-[10px] font-light tracking-wider text-red-600">
                  {sabado.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="bottonDay bg-black"></div>
    </div>
  );
}
