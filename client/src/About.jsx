import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black'>
        <h1 className='font-[Neue Montreal] text-[4vw] leading-[4vw] tracking-tight'>
        LocAlert empowers communities to address local concerns and drive change. Our digital platform facilitates public discourse and collaboration, enabling citizens to voice issues and propose solutions for their neighborhoods. Join us in shaping a better tomorrow, together.
        </h1>

        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#667230]'>
            <div className='w-1/2 '>
              <h1 className='text-[4vw] '>Our Approach:</h1>
              <button className='flex gap-10 items-center px-7 py-5 mt-7 bg-zinc-900 uppercase rounded-full text-white'>
                Read More
                <div className='w-2.5 h-2.5 bg-zinc-100 rounded-full'></div>
                </button>
            </div>

            <div className='w-1/2 h-[70vh] rounded-xl bg-[#b1c85e] overflow-hidden'>
              <img className='w-full h-full' src="https://bsmedia.business-standard.com/_media/bs/img/article/2014-10/02/full/1412241667-5268.jpg?im=FeatureCrop,size=(826,465)" alt="" />
            </div>

        </div>
    </div>
  )
}

export default About;