import React from 'react'
import './circle.scss'

const Circle = ({ title, active }) => {
  return (
    <section className='circle'>
      <span className='text'>{title}</span>
      <label className='switch'>
        <input type='checkbox' defaultChecked={active} />
        <span className='slider round' />
      </label>
    </section>
  )
}

export default Circle
