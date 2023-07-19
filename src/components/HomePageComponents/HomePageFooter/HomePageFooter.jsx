import React from 'react'

import './HomePageFooter.css'
import Footer from '../../../recomponents/Footer/Footer'
import Citylist_1 from '../../../dummydata/CityList/CityList'
import {CityList_2, CityList_3, CityList_4} from '../../../dummydata/CityList/CityList'

const HomePageFooter = () => {

  const city_list_1 = Citylist_1.map((city)=>{
    return <li><a href="/">{city}</a></li>
  })

  const city_list_2 = CityList_2.map((city)=>{
    return <li><a href="/">{city}</a></li>
  })

  const city_list_3 = CityList_3.map((city)=>{
    return <li><a href="/">{city}</a></li>
  })

  const city_list_4 = CityList_4.map((city)=>{
    return <li><a href="/">{city}</a></li>
  })
  
  return (
    <Footer>

      {/* Home Page Footer 1 */}
      <div className='home_footer_1'>
        <div className='footer_1_one'>
          <div className='footer_heading'>
            COMPANY
          </div>
          <div className='footer_list_elements'>
            <ul>
              <li><a href="/">About us</a></li>
              <li><a href="/">Team</a> </li>
              <li><a href="/">Careers</a> </li>
              <li><a href="/">Swiggy Blog</a> </li>
              <li><a href="/">Bug Bounty</a> </li>
              <li><a href="/">Swiggy One</a> </li>
              <li><a href="/">Swiggy Corporation</a> </li>
              <li><a href="/">Swiggy Instamart</a> </li>
              <li><a href="/">Swiggy Genie</a> </li>
            </ul>
          </div>
        </div>
        <div className='footer_1_two'>
          <div className='footer_heading'>
            CONTACT
          </div>
          <div className="footer_list_elements">
            <ul>
              <li><a href="/">Help & Support</a></li>
              <li><a href="/">Partner with us</a></li>
              <li><a href="/">Ride with us</a></li>
            </ul>
          </div>
        </div>
        <div className='footer_1_three'>
          <div className='footer_heading'>
            LEGAL
          </div>
          <div className="footer_list_elements">
            <ul>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Refund & Cancellation</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Cookie Policy</a></li>
              <li><a href="/">Offer Terms</a></li>
              <li><a href="/">Phishing & Fraud</a></li>
              <li><a href="/">Corporate - Swiggy Money Codes Terms and Conditions</a></li>
              <li><a href="/">Corporate - Swiggy Discount Voucher Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className='footer_1_four'>
          <div className='footer_promotion_btns'>
            <div className='footer_promotion_btn'>
              <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=in.swiggy.android"><img height="58" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" /></a>
            </div>
            <div className='footer_promotion_btn'>
              <a target='_blank' rel="noreferrer" href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img height="58" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Home Page Footer 2 */}
      <div className='home_footer_2'>
        <div className='footer_heading'>
          WE DELIVER TO
        </div>
        <div className='footer_list_elements footer_city_list'>
          <div className='city_list'>
            <ul>
              {city_list_1}  
            </ul>
          </div>
          <div className='city_list'>
            <ul>
              {city_list_2}
            </ul>
          </div>
          <div className='city_list'>
            <ul>
              {city_list_3}
            </ul>
          </div>
          <div className='city_list'>
            <ul>
              {city_list_4}
            </ul>
          </div>
        </div> 
      </div>

      {/* Home Page Footer 3 */}
      <div className='home_footer_3'>
        <img width="142" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="" />
        <div className='footer_3_mid'>© 2023 Swiggy</div>
        <div className='footer_3_end'>
          <a href="https://www.facebook.com/swiggy.in" rel="noreferrer" target='_blank'>
            <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" alt="" />
          </a>
          <a href="https://in.pinterest.com/swiggyindia/" rel="noreferrer" target='_blank'>
            <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" alt="" />
          </a>
          <a href="https://www.instagram.com/swiggyindia/" rel="noreferrer"  target='_blank'>
            <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" alt="" />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fswiggy" rel="noreferrer" target='_blank'>
            <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" alt="" />
          </a>
        </div>
      </div>
    </Footer>
  )
}

export default HomePageFooter
