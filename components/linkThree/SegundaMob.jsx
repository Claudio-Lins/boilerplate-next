export default function SegundaMob({ schedule }) {
  return (
    <div className=" container mx-auto flex justify-evenly my-2">
      <div className="lg:hidden w-full xs:w-[320px] mt-4">
          <div className="segunda flex text-white text-sm text-center font-semibold tracking-wider antialiased">
            {schedule[0].label}
          </div>
        {schedule[0].programacao.map((programacao) => {
          return (
            <div
              key={programacao.id}
              className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-2"
            >
              <div className="flex flex-col space-y-1">
                <div className="flex mx-auto text-[10px] font-bold tracking-wider text-red-600">
                  {programacao.hourStart.slice(0, 5)} - {programacao.hourEnd.slice(0, 5)}
                </div>
                <hr className=" border-red-200 my-1" />
                <div className="text-[10px] font-light tracking-wider text-red-600">
                  {programacao.preTitle}
                </div>
                <div className=" lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm font-bold text-green-800">
                  {programacao.title}
                </div>
                <div className="text-[10px] font-light tracking-wider text-red-600">
                  {programacao.posTitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
