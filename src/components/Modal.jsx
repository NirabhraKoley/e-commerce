import React from "react";
import { TbNumber2Small } from "react-icons/tb";

export const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return TbNumber2Small;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModelOpen(false)}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
