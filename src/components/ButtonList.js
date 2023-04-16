import React from 'react'
import { Button } from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Game"/>
      <Button name="Songs"/>
      <Button name="Soccer"/>
      <Button name="Food"/>
      <Button name="Travell"/>
      <Button name="Programming"/>
      <Button name="Sports"/>
    </div>
  )
}

export default ButtonList