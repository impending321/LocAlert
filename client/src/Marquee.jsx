import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#FF7722] overflow-x-hidden'>
       <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
          <motion.h1 
            initial={{ x: "0%" }} 
            animate={{ x: "-100%" }} 
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }} 
            className='text-[17vw] leading-none tracking-tighter uppercase pb-[10px] -bottom-20 pr-[1em] -mb-[3.7vw] font-semibold font-["Founders Grotesk"]'
          >
            We are LocAlert
          </motion.h1>
          <motion.h1 
            initial={{ x: "0%" }} 
            animate={{ x: "-100%" }} 
            transition={{ ease: "linear", repeat: Infinity, duration: 6}} 
            className='text-[17vw] leading-none tracking-tighter uppercase pb-20 -bottom-20  pr-[1em] -mb-[3.7vw] font-semibold font-["Founders Grotesk"]'
          >
            We are LocAlert
          </motion.h1>
       </div>
    </div>
  )
}

export default Marquee;
