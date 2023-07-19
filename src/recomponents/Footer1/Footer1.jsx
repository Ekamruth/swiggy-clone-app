import React from 'react'

import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer1'>
      <div className='footer1_left'>For better experience,download the Swiggy app now</div>
      <div className='footer1_right promotion_btns'>
          <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=in.swiggy.android"><img className='promotion_btn1' height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" /></a>
          <a target='_blank' rel="noreferrer" href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" /></a>
        </div>
    </div>
  )
}

export default Footer1
