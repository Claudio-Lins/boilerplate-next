export default function TesteStrapi({ schedule }) {
  return (
    <div className=" container mx-auto flex flex-col justify-evenly sm:flex-row">
      {schedule &&
        schedule
          .sort((a, b) => a.ordem - b.ordem)
          .map((schedule) => {
            return (
              <div key={schedule.id}>
                <div className="w-[200px] mt-4">
                  <div className={
                    new Date(schedule.day).getDay() === 1 ? 'segunda' : '' ||
                    new Date(schedule.day).getDay() === 2 ? 'terca' : '' ||
                    new Date(schedule.day).getDay() === 3 ? 'quarta' : '' ||
                    new Date(schedule.day).getDay() === 4 ? 'quinta' : '' ||
                    new Date(schedule.day).getDay() === 5 ? 'sexta' : '' ||
                    new Date(schedule.day).getDay() === 6 ? 'sabado' : '' ||
                    new Date(schedule.day).getDay() === 0 ? 'domingo' : '' 
                  }>
                    <div className="flex text-white text-sm text-center font-semibold tracking-wider antialiased">
                      {new Date(schedule.day).getDay() === 1
                        ? "Segunda-feira"
                        : ""}
                      {new Date(schedule.day).getDay() === 2
                        ? "Terça-feira"
                        : ""}
                      {new Date(schedule.day).getDay() === 3
                        ? "Quarta-feira"
                        : ""}
                      {new Date(schedule.day).getDay() === 4
                        ? "Quinta-feira"
                        : ""}
                      {new Date(schedule.day).getDay() === 5
                        ? "Sexta-feira"
                        : ""}
                      {new Date(schedule.day).getDay() === 6 ? "Sábado" : ""}
                      {new Date(schedule.day).getDay() === 0 ? "Domingo" : ""}

                      {/* {console.log(new Date(schedule.day).getDay())} */}
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
  const res = await fetch(
    "https://boilerplate-api-mongo.herokuapp.com/schedules"
  );
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
