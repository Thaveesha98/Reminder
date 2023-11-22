import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <header className=" top-0 w-full z-0  ">
      <div className=" mx-auto flex ml-0 p-10 relative ">
        <div className="flex w-full ml-0">
          <img
            src="https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png"
            alt="uop Logo"
            className="w-10 h-10 mr-2 aling-left"
          />
          <div className="text-center text-black font-semibold relative">
            <i>FOS</i> <br /> R e m i n d e r
          </div>
        </div>

        <div className="flex justify-end items-center w-full">
          <button
            className="text-black px-4 py-2 rounded-full"
            onClick={() => Navigate("/")}
          >
            Home
          </button>
          <button
            className="text-black px-4 py-2 "
            onClick={() => Navigate("/task")}
          >
            My Task
          </button>

          <button
            className="text-black px-4 py-2 "
            onClick={() => Navigate("/request")}
          >
            Request
          </button>
          <AiOutlineBell className="w-7 h-7 text-black cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
