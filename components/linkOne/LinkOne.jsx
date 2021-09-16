import Box from "./Box";

export default function LinkOne() {
  return (
    <section
      id="linkOne"
      className="w-full px-3 sm:h-[700px] py-8 bg-pink-600  flex items-center"
    >
      <div className="container mx-auto">
        <h1 className=" text-white font-bold text-2xl text-center sm:text-5xl mb-2 sm:mb-4">Destaque</h1>
        <hr />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <Box title="Destaque #01" />
          <Box title="Destaque #02" />
          <Box title="Destaque #03" />
        </div>
      </div>
    </section>
  );
}
