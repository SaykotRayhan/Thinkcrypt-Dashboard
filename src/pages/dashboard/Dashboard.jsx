import React, { Fragment } from 'react'
import Circle from '../../components/circle/Circle'
import './dashboard.scss'
import { campaignData, cardData, chartData, months } from '../../data'
import Card from '../../components/card/Card'
import networkIcon1 from '../../assets/network1.png'
import networkIcon2 from '../../assets/network2.png'
import downArrow from '../../assets/down-arrow.png'
import Chart from '../../components/chart/Chart'

const Dashboard = () => {
  function horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    )
    event.currentTarget.scrollLeft -= delta * 10
    event.preventDefault()
  }

  const getYearList = (fromYear, toYear) => {
    let yearList = []
    for (let i = toYear; i >= fromYear; i--) {
      yearList.push(i)
    }
    return yearList
  }

  return (
    <div className='dashboard-wrapper container'>
      <section className='header'>
        <span>Summary of my campaigns</span>
      </section>
      <section className='glimpses-of-campaigns inner-container'>
        <div className='circle-container'>
          {campaignData?.map((item, index) => (
            <Fragment key={index}>
              <Circle {...item} />
              {campaignData.length > index + 1 && (
                <div className='doted-line' />
              )}
            </Fragment>
          ))}
        </div>
        <div className='glimpses-text'>Glimpses of campaigns</div>
      </section>
      <section className='control-campaigns inner-container'>
        <span>Turn of all campaigns</span>
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round' />
        </label>
        <span>My campaigns</span>
      </section>
      <section
        className='card-container inner-container'
        onWheel={horizontalScroll}
      >
        {cardData?.map(item => {
          return <Card key={item.id} {...item} />
        })}
      </section>
      <section className='inner-container'>
        <div className='yearly-details'>
          <div className='section-header'>
            <div className='icon-container'>
              <img src={networkIcon2} alt='' />
              <img src={networkIcon1} alt='' />
            </div>
            <div className='filter-container'>
              <div className='select-container'>
                <select name='year' id='year'>
                  {getYearList(2015, new Date().getFullYear()).map(
                    (year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    )
                  )}
                </select>
                <img src={downArrow} alt='' />
              </div>
              <div className='sleep'>
                <span>Sleep</span>
                <div></div>
              </div>
              <div className='select-container'>
                <select name='month' id='month'>
                  {months.map((month, index) => {
                    return (
                      <option value={month} key={index}>
                        {month.charAt(0).toUpperCase() + month.slice(1)}
                      </option>
                    )
                  })}
                </select>
                <img src={downArrow} alt='' />
              </div>
              <div className='a-month'>
                <span>a month</span>
                <div></div>
              </div>
              <div className='text'>Data for</div>
            </div>
          </div>
          <div className='chart-container' onWheel={horizontalScroll}>
            {chartData?.map(item => {
              return <Chart key={item.id} {...item} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
