import { Segunda } from "../../data/Horarios";

export default function HorarioSegundaMob(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-4 bg-red-800 rounded-t-3xl">
        <div className="text-white text-xl font-semibold tracking-wider antialiased">
          Segunda
        </div>
      </div>
      {Segunda.map((segunda, id) => {
        return (
          <div key={segunda.id}>
            <div className="mt-2 bg-gray-50 flex justify-center rounded-xl shadow-md p-4">
              <div className="flex flex-col space-y-2 text-center">
                <div className="text-xs font-semibold tracking-wider text-red-600">
                  {segunda.hora}
                </div>
                <div className="flex text-center text-lg font-bold tracking-wider leading-6 uppercase text-green-800">
                  {segunda.title}
                </div>
                <div className="text-xs font-light tracking-wider text-red-600">
                  {segunda.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
