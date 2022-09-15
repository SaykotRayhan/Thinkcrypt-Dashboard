import React from 'react'
import './chart.scss'

const Chart = ({ text, imgUrl, percentage, total }) => {
  return (
    <div className='chart'>
      <span className='chart-text' dangerouslySetInnerHTML={{ __html: text }} />
      <span className='percentage'>{percentage}</span>
      <img src={imgUrl} alt='' />
      <span className='total'>{total}</span>
    </div>
  )
}

export default Chart
