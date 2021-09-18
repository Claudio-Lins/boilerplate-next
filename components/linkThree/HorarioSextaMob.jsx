import { Sexta } from "../../data/Horarios";

export default function HorarioSextaMob(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-6 bg-[#744253] rounded-t-3xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased">
          Sexta-feira
        </div>
      </div>
      {Sexta.map((sexta, id) => {
        return (
          <div key={sexta.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-4">
              <div className="flex flex-col space-y-2">
                <div className="text-xs font-semibold tracking-wider text-red-600">
                  {sexta.hora}
                </div>
                <div className="text-center text-xl font-bold tracking-wider leading-6 uppercase text-green-800">
                  {sexta.title}
                </div>
                <div className="text-xs font-light tracking-wider text-red-600">
                  {sexta.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
