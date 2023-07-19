import React from 'react'
import './HomePageBanner.css'

const HomePageBanner = () => {
  return (
    <div className='banner'>
      <div className='banner_flex'>
        <div className='banner__'>
          <div className='banner_image'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
          </div>
          <div className='img_title'>No Minimum Order</div>
          <div className='img_desc'>Order in for yourself or for the group, with no restrictions on order value</div>
        </div>
        <div className='banner__'>
          <div className='banner_image'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
          </div>
          <div className='img_title'>Live Order Tracking</div>
          <div className='img_desc'>Know where your order is at all times, from the restaurant to your doorstep</div>
        </div>
        <div className='banner__'>
          <div className='banner_image'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="" />
          </div>
          <div className='img_title'>Lightning-Fast Delivery</div>
          <div className='img_desc'>Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
        </div>
      </div>
    </div>
  )
}

export default HomePageBanner
