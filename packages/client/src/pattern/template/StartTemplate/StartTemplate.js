import React from 'react'
import Header from '../../molecule/navigation/Header'
import SideBar from '../../molecule/navigation/SideBar'
import HeroBanner from '../../molecule/banner/HeroBanner'

const StartPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  return (
    <div>
      <Header>Number Sequence</Header>
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <SideBar />
        <HeroBanner>
          <h1 className="f000-light mb-4">Number Sequence</h1>
          <div className="f2-light pb-4">Number Sequence Demo</div>
        </HeroBanner>
      </div>
    </div>
  )
}

export default StartPage
