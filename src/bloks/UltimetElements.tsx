import React from 'react'



const UltimetElements = ({deleteAllTodo}) => {
  return (
    <div className='UltimetElements'>
        <div className='item-counter'>
            <p>0</p>
            <p>items left</p>
        </div>
        <div className='other-options'>
            <p className='all'>All</p>
            <p className='active'>Active</p>
            <p className='complete'>Complete</p>
        </div>
        <div>
            <p className='clear-complete' onClick={deleteAllTodo}>Clear Complete</p>
        </div>
      
    </div>
  )
}

export default UltimetElements
