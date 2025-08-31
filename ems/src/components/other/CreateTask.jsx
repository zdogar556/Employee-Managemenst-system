import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between' >
          <div className='w-1/2'>
            <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Tittle</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' /></div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" placeholder='Date' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev etc' />
          </div>
          </div>
          
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" columns="30" rows="10"></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 mt-4 text-sm rounded w-full'>Create Task</button>
          </div>  
        </form>
      </div>
  )
}

export default CreateTask
