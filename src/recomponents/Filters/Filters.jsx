import React from 'react'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import {RiArrowDownSLine} from 'react-icons/ri'

import './Filters.css'


const Filters = () => {
  return (
    <div className='filters'>
      <div className='filter_option with_icon'>
        <span className='option_txt'>Filters</span>
        <span className='option_icon'><TbAdjustmentsHorizontal/></span>
      </div>
      <div className='filter_option with_icon'>
        <span className='option_txt'>Sort By</span>
        <span className='option_icon'><RiArrowDownSLine/></span>
      </div>
      <div className='filter_option'>
        Fast Delivery
      </div>
      <div className='filter_option'>
        New on Swiggy
      </div>
      <div className='filter_option'>
        Ratings 4.0+
      </div>
      <div className='filter_option'>
        Pure Veg
      </div>
      <div className='filter_option'>
        Rs.300 - Rs.600
      </div>
      <div className='filter_option'>
        Less than Rs.300
      </div>
    </div>
  )
}

export default Filters
