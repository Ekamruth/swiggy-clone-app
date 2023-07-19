import React, {useState} from 'react'

import './SignUpModal.css'

import Modal from '../../recomponents/Modal/Modal'

const SignUpModal = (props) => {

  const[isReferral, setIsReferral] = useState(false)

  return (
    <Modal closeModal={props.modalClose}>
      <div className='login_header'>
        <div className='login_heading'>
          <div className='login_head'>
            Sign Up
          </div>
          <div className='login_txt'>
            or <a href="/">login to your account</a>
          </div>
        </div>
        <img className='login_header_img' width="100" height="105" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
      </div>
      <form>
        <div className='signup_input'>
          <label className='input_label' htmlFor="">Phone number</label>
          <input type="tel" maxlength="10" autocomplete="off" className='input_num' />
        </div>
        <div className='signup_input'>
          <label className='input_label' htmlFor="">Name</label>
          <input type="text" autocomplete="off" className='input_num' />
        </div>
        <div className='signup_input_email'>
          <label className='input_label' htmlFor="">Email</label>
          <input type="email" autocomplete="off" className='input_num'/>
        </div>
        {isReferral ? (<div className='signup_input_referral'>
          <label className='input_label' htmlFor="">Referral code</label>
          <input type="text" autocomplete="off" className='input_num' />
        </div>) : null}
        {!isReferral ? (<button className='referral_link' onClick={()=>setIsReferral(true)}>Have a referral code?</button>) : null}
        <div className='input_login_btn'>
          <input className='submit_btn' type="submit" value={"CONTINUE"} />
        </div>
        <p className='terms_p'>By creating an account, I accept the <span><a href="https://www.swiggy.com/terms-and-conditions">Terms & Conditions</a></span> & <span><a href="https://www.swiggy.com/privacy-policy">Privacy Policy.</a></span></p>
      </form>
    </Modal>
  )
}

export default SignUpModal
