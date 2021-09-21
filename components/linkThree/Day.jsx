import { Segunda } from "../../data/Horarios";

export default function Day(props) {
  return (
    <div className="flex flex-col lg:max-w-[140px] 2xl:max-w-3xl mt-4">
      <div className="flex justify-center bg-red-800 py-3 rounded-t-xl">
        <div className="text-white text-sm font-semibold tracking-wider antialiased">
          Segunda-feira
        </div>
      </div>
      {Segunda.map((segunda, id) => {
        return (
          <div key={segunda.id}>
            <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-2">
              <div className="flex flex-col space-y-1">
                <div className="text-[10px] font-semibold tracking-wider text-red-600">
                  {segunda.hora}
                </div>
                <div className=" lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm font-bold text-green-800">
                  {segunda.title}
                </div>
                <div className="text-[10px] font-light tracking-wider text-red-600">
                  {segunda.reprised}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center py-1 mt-2 bg-red-800 rounded-b-xl"></div>
    </div>
  );
}
