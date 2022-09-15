import React from 'react'
import './sidebar.scss'
import sectionImg from '../../assets/avatar.png'
import logoutIcon from '../../assets/vector.png'
import plusIcon from '../../assets/plus.png'
import crossIcon from '../../assets/crossIcon.png'

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className='sidebar-wrapper'>
      <div onClick={closeSidebar} className='close-btn-container'>
        <img src={crossIcon} alt='' />
        <span className='close-text'>Close Menu</span>
      </div>
      <div className='top'>
        <img className='section-img' src={sectionImg} alt='' />
        <div className='title-container'>
          <div className='title'>LOREM IPSUM</div>
          <div className='sub-title'>DOLOR SIT AMAT</div>
        </div>
        <img className='logout-icon' src={logoutIcon} alt='' />
      </div>
      <div className='bottom'>
        <ul>
          <li>Summary</li>
          <li className='img-container'>
            <img src={plusIcon} alt='' />
            <span>Lead campaigns</span>
          </li>
          <li className='img-container'>
            <img src={plusIcon} alt='' />
            <span>Social management cam...</span>
          </li>
          <li>Business definitions</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
