export default function TesteStrapi({ schedule }) {

  const weekDay = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const formatDate = new Date();
  const dayOfWeek = schedule[0].day

  console.log(dayOfWeek)

  return (
    <div className=" container mx-auto flex flex-col justify-evenly sm:flex-row">
      {schedule.map((schedule) => {
        return (
          <div key={schedule.id}>
            <div className="w-[200px] mt-4">
              <div className="flex justify-center bg-red-800 py-3 rounded-t-xl">
                <div className="flex text-white text-sm text-center font-semibold tracking-wider antialiased">
                  {dayOfWeek}
                  {/* {schedule.day} */}
                </div>
              </div>
              {schedule.programacao.map((programacao) => {
                return (
                  <div
                    key={programacao.id}
                    className="mt-2 text-center bg-gray-50 flex justify-center rounded-xl shadow-md p-2"
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="text-[10px] font-bold tracking-wider text-red-600">
                        {programacao.hour.slice(0, 5)}
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
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/schedules");
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
