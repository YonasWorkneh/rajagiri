import React from "react";
import Button from "./Button";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/40 flex justify-center items-center"
      style={{ backdropFilter: "blur(3px)" }}
    >
      <button
        onClick={onClose}
        className="bg-none text-5xl text-[#fff] absolute right-10 top-10 cursor-pointer z-[1000] size-[50px] rounded-full border border-[#ffffff8b] grid place-items-center"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-white text-[25px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
        </svg>
      </button>
      {children}
    </div>
  );
}
