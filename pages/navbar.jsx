import Navbar from "../components/navbar/Navbar";

export default function Nav() {
  return (
    <>
      <Navbar />
      <div className="bg-purple-600 flex justify-center w-full min-h-screen">
        <h1 className="text-5xl text-white font-bold mt-10">Navbar</h1>
      </div>
    </>
  );
}
