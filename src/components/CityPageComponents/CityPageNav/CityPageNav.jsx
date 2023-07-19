import React from 'react'
import { Link } from 'react-router-dom'

import './CityPageNav.css'

import { FaLocationArrow } from 'react-icons/fa'
import swiggy_logo from '../../../swiggy_logo.png'
import { IoIosSearch } from 'react-icons/io'
import { HiUserCircle } from 'react-icons/hi'
import {RiArrowDownSLine} from 'react-icons/ri'


const CityPageNav = () => {
  return (
    <div className='city_nav'>
      <Link to='/'>
        <div className='city_nav_1'>
          <span className='logo_1'><img src={swiggy_logo} alt="" /></span>
          <span className='txt_1'>Swiggy</span>
        </div>
      </Link>
      <div className='city_nav_2'>
        <span className='location_icon'>
          <FaLocationArrow />
        </span>
        <span className='txt_2'>Setup your precise location</span>
        <span className='dropdown_icon'><RiArrowDownSLine/></span>
      </div>
      <div className='city_nav_3'>
        <input className='input_nav_3' type="text" placeholder='Search for restaurant and food' />
        <button className='btn_3'><IoIosSearch /></button>
      </div>
      <div className='user_icon'>
        <HiUserCircle></HiUserCircle>
      </div>

    </div>
  )
}

export default CityPageNav
