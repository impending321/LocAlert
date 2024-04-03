import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/website');
  }
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        
        <div className='logo flex items-center justify-center'>
          <h2 className='text-4xl'>LocAlert</h2>
        </div>

        <div className='links flex gap-10'>
            {["Services","Our Work" ,"About Us","Insights","Contact Us"].map((item,index)=>(
                <a key={index} className={`text-lg capitalize font-light hover:text-yellow-200 cursor-pointer ${index === 4 && "ml-32" }`}>{item}</a>
            ))}
            <button onClick={handleLogin} type='button' className='text-lg capitalize font-light hover:text-yellow-200 cursor-pointer'>Login</button>
        </div>
    

    </div>
  )
}

export default Navbar