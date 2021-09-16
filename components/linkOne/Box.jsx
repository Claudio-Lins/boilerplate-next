export default function Box(props) {
  return (
    <div className="sm:w-[370px] h-[436px] w-full my-4 rounded-md shadow bg-purple-500 flex justify-center items-center">
      {props.title}
    </div>
  );
}
