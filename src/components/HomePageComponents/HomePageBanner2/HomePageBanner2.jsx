import React from 'react'
import './HomePageBanner2.css'

const HomePageBanner2 = () => {
  return (
    <div className='banner2'>
      <div className='promotion'>
        <div className='promotion_heading'>Restaurants in your pocket</div>
        <div className='promotion_txt'>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
        <div className='promotion_btns'>
          <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=in.swiggy.android"><img className='promotion_btn1' height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" /></a>
          <a target='_blank' rel="noreferrer" href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" /></a>
        </div>
      </div>
      <img className='promotion_img1' width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" />
      <img className='promotion_img2' width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" />
    </div>
  )
}

export default HomePageBanner2
