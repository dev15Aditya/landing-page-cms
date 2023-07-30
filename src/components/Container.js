import React from 'react';

export default function Container() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-16">
          <h1 className="text-[#252525] text-[4rem]">
            THE WORLD <br /> OF LIVE ART
          </h1>
          <p className="text-[#252525]">
            We bring art to life with wall projections inside <br /> the whole
            art space.
          </p>
          <div className="flex">
            <button className="bg-[#252525] text-white px-3 rounded-full">
              SCHEDULE
            </button>
            <button className="bg-transparent text-[#252525] border-2 border-black p-2 rounded-full">
              INFO
            </button>
          </div>
        </div>
        <div className="flex">
          <img
            className="h-[300px] w-[250px] rounded-tl-[40px] rounded-br-[40px]"
            src="./images/pic2.jpg"
            alt="xyz"
          />
          <div className="bg-gradient-to-b from-[#F4935C] to-[#E9E1D6]">
            <img
              className="h-[250px] w-[250px] border-[20px] border- rounded-full"
              src="./images/pic1.png"
              alt="xyz"
            />
          </div>
        </div>
      </div>
      <div className="p-16 flex justify-between">
        {/* img  */}
        <img
          className="w-[350px] rounded-tr-[40px] rounded-bl-[40px]"
          src="./images/pic3.jpg"
          alt="xyz"
        />
        {/* schedule  */}
        <div>
          <hr className="bg-black h-[2px] mb-5" />
          <div className="flex justify-between w-[500px] text-sm">
            <div className="h-10 w-10 bg-black"></div>
            <div>
              <p>'Time Left.'</p>
              <p>iF + Delia Rosenbaum Jr.</p>
            </div>
            <p>12.03.23</p>
            <div className="h-4 w-4 bg-black rounded-full"></div>
          </div>
          <hr className="bg-black h-[2px] my-5" />
          <div className="flex justify-between w-[500px] text-sm">
            <div className="h-10 w-10 bg-black"></div>
            <div>
              <p>'Time Left.'</p>
              <p>iF + Delia Rosenbaum Jr.</p>
            </div>
            <p>12.03.23</p>
            <div className="h-4 w-4 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
