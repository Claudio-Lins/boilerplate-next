export default function Button(props) {
  return (
    <div className="bg-green-700 px-4 py-2 text-center text-white rounded-md w-1/3 sm:w-1/4 mx-auto mt-4 shadow-md">
      {props.title}
    </div>
  );
}
