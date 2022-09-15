import React from 'react'
import './header.scss'
import logo from '../../assets/logo.png'
import hamIcon from '../../assets/hamIcon.png'

const Header = ({ openSidebar }) => {
  return (
    <div className='header-wrapper container'>
      <img className='logo' src={logo} alt='company-logo' />
      <img onClick={openSidebar} className='menu' src={hamIcon} alt='' />
    </div>
  )
}

export default Header
