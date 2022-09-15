import React from 'react'
import { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './layout.scss'

const Layout = ({ children }) => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false)
  const closeSidebar = () => {
    setOpenSidebarMenu(false)
  }
  const openSidebar = () => {
    setOpenSidebarMenu(true)
  }
  return (
    <div className='layout__wrapper'>
      <section className='layout__container'>
        <div className='layout__header'>
          <Header openSidebar={openSidebar} />
        </div>

        <div>{children}</div>
      </section>
      <section
        className={`${
          openSidebarMenu ? 'sidebar__open sidebar__overlay' : ''
        } `}
      >
        <div className={`layout__sidebar`}>
          <Sidebar closeSidebar={closeSidebar} />
        </div>
      </section>
    </div>
  )
}

export default Layout
