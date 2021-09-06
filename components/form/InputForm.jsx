export default function ImputForm(props) {
  return (
    <div className="relative">
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="border-0 peer h-10 w-full border-b border-gray-300 placeholder-transparent text-gray-900 focus:outline-none focus:border-pink-600"
      />
      <label
        htmlFor={props.htmlFor}
        className="absolute left-0 -top-3.5 transition-all text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-600 peer-focus:text-xs"
      >
        {props.field}
      </label>
    </div>
  );
}
