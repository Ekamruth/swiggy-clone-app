import React from 'react'
import Dialogues from '../HomePageDialogues/Dialogues'
import swiggyIcon from '../../../swiggy_icon.png'
import Button from '../../../recomponents/Button/Button'
import {PiCrosshairFill} from 'react-icons/pi'
import './HomePageHeader.css'
import { Link } from 'react-router-dom'

const HomePageHeader = (props) => {
  return (
    <div className='homepage_header'>
      <div className='header_left'>
        <div className='header_left_icon'>
          <img src={swiggyIcon} alt="" />
        </div>
        <div className='header_left_btns'>
          <div className='login_btn'>
            <button onClick={props.loginModal}>Login</button>
          </div>
          <div className='signup_btn'>
            <button onClick={props.signUpModal}>Sign up</button>
          </div>
        </div>
        <div className='dialogues_element'>
          <Dialogues />
        </div>
        <p className='under_dialogues'>Order food from favourite restaurants near you.</p>
        <div className='search_find'>
          <div className='search_area' id='search_area'>
            <input type='text' className='input_txt' id='input_txt' placeholder='Enter your delivery location'></input>
            <span className='input_txt_locateme'>
              <Button><span className='locateme_icon'><PiCrosshairFill></PiCrosshairFill></span>
                <span>Locate Me</span></Button>
            </span>
          </div>
          <span className='find_btn'>
            <Button>FIND FOOD</Button>
          </span>
        </div>
        <p className='cities_heading'>POPULAR CITIES IN INDIA</p>
        <ul className='list_cities'>
          <li>Ahmedabad</li>
          <li>Bangalore</li>
          <li>Chennai</li>
          <li>Delhi</li>
          <li>Gurgaon</li>
          <li><Link to='/city'>Hyderabad</Link></li>
          <li>Kolkata</li>
          <li>Mumbai</li>
          <li>Pune</li>
          <li>& more</li>
        </ul>
      </div>
      <div className='header_right' style={{
        backgroundImage: 'url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq")'
      }}>
      </div>
    </div>
  )
}

export default HomePageHeader
