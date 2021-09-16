export default function BoxPrograms(props) {
  return (
    <div className="flex justify-center items-center w-[300px] sm:w-[200px] h-[110px] bg-pink-400 rounded-[15px] shadow">
      {props.title}
    </div>
  );
}
