import React,{ useState } from 'react'

const Task1 = () => {
    const [count,setCount] = useState(0)
    const increment = () =>{
        setCount(count + 1)
    }
  return (
    <div className='task1'>
        <button onClick={increment}>count({count})</button>
    </div>
  )
}

export default Task1