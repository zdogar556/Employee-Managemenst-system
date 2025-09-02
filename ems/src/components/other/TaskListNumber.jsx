import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=' rounded-xl w-[45%] py-6 px-7 bg-red-400'>
      <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
      <h3 className='text-2xl font-medium'>New task</h3>
      </div>

      <div className=' rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
      <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
      <h3 className='text-2xl font-medium'>Complete Task</h3>
      </div>

      <div className=' rounded-xl w-[45%] py-6 px-9 bg-green-400'>
      <h2 className='text-3xl text-black font-semibold'>{data.taskSummary.complete}</h2>
      <h3 className='text-2xl  text-black font-medium'>Accepted Task</h3>
      </div>

      <div className=' rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
      <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
      <h3 className='text-2xl font-medium'>New task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
