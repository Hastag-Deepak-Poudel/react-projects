import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-15 py-8 mb-20'>
      <button className=" bg-black rounded-xl text-amber-50 px-2 py-1">
        Target Audience
      </button>
      <button className=" bg-gray-400 rounded-xl text-amber-50 px-2 py-1">
        Digital Banking Platform
      </button>
    </div>
  )
}

export default Navbar
