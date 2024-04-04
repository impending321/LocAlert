import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/website');
  }
  return (
    <div className='fixed z-[999] w-full text-white px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        
        <div className='logo flex items-center justify-center'>
          <h2 className='text-4xl'>LocAlert</h2>
        </div>
    

    </div>
  )
}

export default Navbar