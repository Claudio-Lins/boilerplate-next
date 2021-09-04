import React, { useState } from "react";
import Link from "next/link";
import { DropItems } from "./DropItems";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdownMenu hideem" : "dropdownMenu"}
      >
        {DropItems.map((item, index) => {
          return (
            <div
              className="flex justify-center px-3 py-4 rounded shadow hover:bg-[#70161E] hover:text-white transition duration-500 ease-in-out"
              key={index}
            >
              <Link
                className="dropdownMenu"
                // className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                <a>{item.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
