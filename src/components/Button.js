import React from 'react'

export const Button = ({name}) => {
  return (
    <div className='m-2'>
        <button className='px-5 py-2 rounded-md bg-gray-200'>{name}</button>
    </div>
  )
}
