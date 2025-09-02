import React from 'react'

const CompleteTask = () => {
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-5 py-2 rounded-lg'>High</h3>
                <h4 className='text-sm'>30 August 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a website</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, est recusandae! Blanditiis voluptatum repellat mollitia laborum, modi in dolorum expedita ullam eaque voluptates, nisi harum accusantium sint impedit consectetur doloremque.
            </p>
            <div className='mt-2'>
                <button className='w-full'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
