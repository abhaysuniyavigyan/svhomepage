import React from "react";
import ajay from "../../assets/ajay.png";
import ankit from "../../assets/ankit.png";

export default function Team() {
  return (
    <>
      <div className="text-center text-3xl p-3 mt-[5rem]">Our Team </div>
      <div className="flex flex-col md:flex-row mb-6 my-3 p-3 mx-auto w-fit">
        <a
          href="https://www.linkedin.com/in/ajayprakash1"
          target="_blank"
          rel="noreferrer"
          data-aos="flip-left"
          className="border hover:border-[#4395f5] hover:text-[#4395f5] transition-all flex flex-row h-fit px-3 py-2 m-1 rounded rounded-xl bg-white shadow-lg"
        >
          <div className="w-[5.5rem] md:w-[6rem] p-2 my-auto">
            <img src={ajay} className="rounded rounded-full" alt="AJay" />
          </div>
          <div className="py-3 flex flex-col justify-center">
            <div className="text-md">Ajay </div>
            <div className=" text-gray-700">Co-Founder</div>
            <div className="text-xs lg:text-sm text-gray-500">
              ajay@shuniyavigyan.com{" "}
            </div>
          </div>
        </a>

        <div
          // <div
          // href="https://www.linkedin.com/in/"
          // target="_blank"
          // rel="noreferrer"
          data-aos="flip-right"
          className="border hover:border-[#4395f5] hover:text-[#4395f5] transition-all flex flex-row h-fit px-3 py-2 m-1 rounded rounded-xl bg-white shadow-lg"
        >
          <div className="w-[5.5rem] md:w-[6rem] p-2 my-auto">
            <img src={ankit} className="rounded rounded-full" alt="ankit" />
          </div>
          <div className="py-3 flex flex-col justify-center">
            <div className="text-md">Ankit</div>
            <div className="text-gray-700">Co-Founder</div>
            <div className="text-xs lg:text-sm text-gray-500">
              ankit@shuniyavigyan.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
