import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div  className='w-full h-screen bg-[#010101] pt-1'>

        <div className='textstructure mt-40 px-10 flex justify-between items-center'>
            <div className='box self-start'>

                {["MODERN PROBLEMS","REQUIRE","MODERN SOLUTIONS"].map((item,index)=>{
                  return( 
                  <div className='masker'>
                      <div className='w-fit flex items-center'>
                        {index === 1 && (
                        <div className='relative top-[0.4vw]  w-[7vw] h-[5vw] bg-red-500 rounded'></div> )}
                        <h1 className="uppercase text-[7vw] text-white leading-[7.5vw] tracking-tighter h-full  font-['Founders Grotesk X Condensed'] font-regular">
                        {item}</h1>
                      </div>
                    
                  </div>
                );
                })}
            </div>

        </div>
        
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {["FOR THE PEOPLE OF INDIA","A PLATFORM FOR YOUR VOICES"].map((item,index)=>
            (<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase hover:cursor-pointer hover:bg-white hover:text-black'>Start</div>
                <div className='w-10 h-10 flex justify-center items-center border-[1px] border-zinc-400 rounded-full hover:cursor-pointer hover:bg-white hover:text-black'>
                    <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
            </div>
        </div>



    </div>
  )
}

export default LandingPage;