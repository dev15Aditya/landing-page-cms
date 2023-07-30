import React from 'react';

export default function Hero() {
  return (
    <div className="flex justify-between pl-16 items-center">
      <h1 className="font-bold">Art & Future</h1>
      <ul className="flex">
        <li>Gallery</li>
        <li className="mx-2 md:mx-10">Schedule</li>
        <li>About us</li>
      </ul>
      <div className="bg-[#F4935C] px-16 py-14 w-[250px]">
        <button className="border border-black px-7 py-2 rounded-full">
          TICKETS
        </button>
      </div>
    </div>
  );
}
