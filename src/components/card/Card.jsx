import React from 'react'
import './card.scss'

const Card = ({ imageUrl, text, active }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt='' />
      <span className='card-text' dangerouslySetInnerHTML={{ __html: text }} />
      <label className='switch'>
        <input type='checkbox' defaultChecked={active} />
        <span className='slider round' />
      </label>
    </div>
  )
}

export default Card
