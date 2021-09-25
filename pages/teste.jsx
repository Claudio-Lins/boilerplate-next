export default function Teste({ schedule }) {
  return (
    <div className=" container mx-auto">
      {schedule.map((schedule) => {
        return (
          <div key={schedule.id}>
            <div className="w-[200px] mt-4">
              <div className="flex justify-center bg-red-800 py-3 rounded-t-xl">
                <div className="flex text-white text-sm font-semibold tracking-wider antialiased">
                  {schedule.weekDay}
                </div>
              </div>
              <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-2">
                <div className="flex flex-col space-y-1">
                  <div className="text-[10px] font-semibold tracking-wider text-red-600">
                    {schedule.timeStart.hours}:00
                  </div>
                  <div className=" lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm font-bold text-green-800">
                    {schedule.title}
                  </div>
                  <div className="text-[10px] font-light tracking-wider text-red-600">
                    {schedule.subTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://sintonizat-api.algoritmodigital.pt/schedule");
  const schedule = await res.json();

  return {
    props: {
      schedule,
    },
    revalidate: 1,
  };
}

{
  /* <div className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-2">
                  <div className="flex flex-col space-y-1">
                    <div className="text-[10px] font-semibold tracking-wider text-red-600">
                      {schedule.timeStart.hours}:00
                    </div>
                    <div className=" lg:max-w-[140px] 2xl:max-w-3xl lg:text-sm font-bold text-green-800">
                      {schedule.title}
                    </div>
                    <div className="text-[10px] font-light tracking-wider text-red-600">
                      {schedule.subTitle}
                    </div>
                  </div>
                </div> */
}
