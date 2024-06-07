import React from 'react'



export const UltimetElements = ({deleteAllTodo, nume}) => {
  return (
    <div className='UltimetElements'>
        <div className='item-counter'>
            <p>{nume}</p>
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
