import {SelectItemsCountry} from '../form/SelectItemsCountry'

export default function SelectForm(props) {
  return (
    <div className="relative">
      <select
        id={props.id}
        name={props.name}
        className="border-0 peer h-10 w-full border-b border-gray-300 placeholder-transparent text-gray-900 focus:outline-none focus:border-pink-600 focus:ring-transparent"
      >
        <option value=""></option>
        {SelectItemsCountry.map((country, index) => {
            return (
              <option value={country.value} key={index}>{country.name}</option>
            );
          })}
      </select>
      <label
        htmlFor={props.name}
        className="absolute left-0 -top-3.5 transition-all text-gray-600 text-xs peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-600 peer-focus:text-xs"
      >
        {props.field}
      </label>
    </div>
  );
}
