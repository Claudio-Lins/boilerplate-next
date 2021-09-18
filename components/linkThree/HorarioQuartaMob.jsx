import { Quarta } from "../../data/Horarios";

export default function HorarioQuartaMob(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-6 bg-red-300 rounded-t-3xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased">
          Quarta-feira
        </div>
      </div>
      {Quarta.map((quarta, id) => {
        return (
          <div key={quarta.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4">
              <div className="flex flex-col space-y-2">
                <div className="text-xs font-semibold tracking-wider text-red-600">
                  {quarta.hora}
                </div>
                <div className="text-center text-xl font-bold tracking-wider leading-6 uppercase text-green-800">
                  {quarta.title}
                </div>
                <div className="text-xs font-light tracking-wider text-red-600">
                  {quarta.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
