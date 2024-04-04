import React, { useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import image from './assets/LocAlert(LOGO).jpg';

function LandingPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/website');
  }
  return (
    <div className='w-full h-screen border bg-[#010101] pt-1 text-white'>

      <div className='textstructure mt-40 px-10 flex justify-between items-center'>
        <div className='box self-start'>

          {["MODERN PROBLEMS", "REQUIRE", "MODERN SOLUTIONS"].map((item, index) => {
            return (
              <div className='masker'>
                <div className='w-fit flex items-center'>
                  {index === 1 && (
                    <div className='relative top-1 w-20 h-20 object-fit rounded'><img src={image} /></div>)}
                  <h1 className="uppercase text-[7vw] text-white leading-[7.5vw] tracking-tighter h-full  font-['Founders Grotesk X Condensed'] font-regular">
                    {item}</h1>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
        {["FOR THE PEOPLE OF INDIA", "A PLATFORM FOR YOUR VOICES"].map((item, index) =>
          (<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
        <div className='start flex items-center gap-5'>
          <button onClick={handleLogin} className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase hover:cursor-pointer hover:bg-white hover:text-black'>Start</button>
        </div>
      </div>



    </div>
  )
}

export default LandingPage;