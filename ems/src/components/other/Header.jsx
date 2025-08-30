import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-3xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold' > Zain 👋 </span> </h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'> Log out</button>
    </div>
  )
}

export default Header
