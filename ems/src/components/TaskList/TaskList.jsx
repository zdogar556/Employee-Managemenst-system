import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

  return (
    <div id='taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-10 flex-nowrap w-full py-5 mt-10'>
    {data.tasks.map((elem,idx )=>{
        if(elem.active){
            return <AcceptTask key={idx} />
        }
        if(elem.NewTask){
            return <NewTask key={idx}/>
        }
        if(elem.Completed){
            return <CompleteTask key={idx}/>
        }
        if(elem.Failed){
            return <FailedTask key={idx}/>
        }

    })}
    
    {/* <AcceptTask/>
    <NewTask/>
    <CompleteTask/>
    <FailedTask/> */}


    </div>
    
  )
}

export default TaskList
