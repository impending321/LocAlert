import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <div className='h-screen bg-zinc-800 p-20 w-full text-zinc-300'>
      <div className='flex gap-5 w-full h-[99.5%]'>
        <div className='w-1/2 h-full flex flex-col justify-between font-["Founders Grotesk X Condensed"] '>
            <div className='heading leading-[10em]'>
               <h1 className='text-[8vw] tracking-tighter uppercase font-semibold -mb-10'>Empower.</h1>
               <h1 className='text-[8vw] tracking-tighter uppercase font-semibold -mb-10'>Engage.</h1>
               <h1 className='text-[8vw] tracking-tighter uppercase font-semibold -mb-10'>Change.</h1>
            </div>
            <h3>LocAlert</h3>


        </div>


        <div className='w-1/2 flex flex-col gap-5 font-["Founders Grotesk X Condensed"]'>
           

        <div className='dets flex flex-col gap-5 mt-10 mb-10 font-[Neue Montreal]'>
          <a className='flex items-center gap-2 text-xl font-light' href="#"><FaInstagram /> Instagram</a>
          <a className='flex items-center gap-2 text-xl font-light' href="#"><FaFacebook /> Facebook</a>
          <a className='flex items-center gap-2 text-xl font-light' href="#"><FaLinkedin /> LinkedIn</a>
          <a className='flex items-center gap-2 text-xl font-light' href="#"><FaTwitter /> Twitter</a>
        </div>


           <div className='flex flex-col gap-2 mb-10 font-["Founders Grotesk X Condensed"]'>
             <span className=' text-xl font-light'>Location:</span>
             <span className=' text-xl font-light'>NIT Kurukshetra , Haryana</span>
             <span className=' text-xl font-light'>India</span>
           </div>

           <div className='flex flex-col gap-2 font-["Founders Grotesk X Condensed"]'>
             <span className='text-xl font-light'>Email:</span>
             <a className='block text-xl font-light' href="#">localert123@gmail.com</a>
           </div>
        </div>
      </div>

      <div className='border-t-[1px] font-light pt-2 w-full h-[20px] text-center'>© 2024-Present LocAlertCo. Private Limited. All rights reserved.</div>
    </div>

  )
}

export default Footer;