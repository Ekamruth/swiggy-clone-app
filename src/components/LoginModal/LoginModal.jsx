import React from 'react'

import './LoginModal.css'

import Modal from '../../recomponents/Modal/Modal'
import '../../recomponents/Modal/Modal'


const LoginModal = (props) => {
  return (
    <Modal closeModal={props.modalClose}>
      <div className='login_header'>
        <div className='login_heading'>
          <div className='login_head'>
            Login
          </div>
          <div className='login_txt'>
            or <a href="/">create an account</a>
          </div>
        </div>
        <img className='login_header_img' width="100" height="105" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
      </div>
      <form>
        <div className='input'>
          <label className='input_label' htmlFor="">Phone number</label>
          <input type="tel" maxlength="10" autocomplete="off" className='input_num'/>
        </div>
        <div className='input_login_btn'>
          <input className='submit_btn' type="submit" value={"LOGIN"}/>
        </div>
        <p className='terms_p'>By clicking on Login, I accept the <span><a href="https://www.swiggy.com/terms-and-conditions">Terms & Conditions</a></span> & <span><a href="https://www.swiggy.com/privacy-policy">Privacy Policy.</a></span></p>
      </form>
    </Modal>
  )
}

export default LoginModal
