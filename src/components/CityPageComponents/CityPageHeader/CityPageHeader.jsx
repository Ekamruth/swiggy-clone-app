import React from 'react'

import './CityPageHeader.css'

import { Link } from 'react-router-dom'

const CityPageHeader = () => {
  return (
    <div className='city_header'>
      <div className='city_banner'>
        <div className='city_banner_left'>
          Order Food Online in Hyderabad
        </div>
        <div className='city_banner_right'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header" alt="" />
        </div>
      </div>
      <div className='header_choice_scroll'>
        <div className='choice_heading'>What's on your mind?</div>
        <div className='choice_items'>
          <div className='items_imgs'>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa" alt="" />
            </Link>
            <Link to='/'>
              <img width="144" height="180" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls" alt="" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CityPageHeader
