import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <>
      <div className="header-image">
        <Navbar />
        <h1 className="text-center text-4xl text-white uppercase pt-10 pb-5">
          We are creative
        </h1>
        <div className=" flex items-center justify-center">
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              strokeWidth="6"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
