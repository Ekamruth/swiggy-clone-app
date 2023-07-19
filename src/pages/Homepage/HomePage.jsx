import React, { useState } from 'react'

import './HomePage.css'

import HomePageHeader from '../../components/HomePageComponents/HomePageHeader/HomePageHeader'
import HomePageBanner from '../../components/HomePageComponents/HomePageBanner/HomePageBanner'
import HomePageBanner2 from '../../components/HomePageComponents/HomePageBanner2/HomePageBanner2'
import HomePageFooter from '../../components/HomePageComponents/HomePageFooter/HomePageFooter'
import LoginModal from '../../components/LoginModal/LoginModal'
import SignUpModal from '../../components/SignUpModal/SignUpModal'


const HomePage = () => {
  const [LoginIsOpen, setLoginIsOpen] = useState(false)
  const [SignUpIsOpen, setSignUpIsOpen] = useState(false)
  return (
    <div className='homepage'>
      {LoginIsOpen ?
          <LoginModal modalClose={()=>setLoginIsOpen(false)} /> : null}
      {SignUpIsOpen ?
        <SignUpModal modalClose={()=>setSignUpIsOpen(false)} /> : null}
      <HomePageHeader 
        loginModal={() => setLoginIsOpen(true)}
        signUpModal={()=> setSignUpIsOpen(true)}
      />
      <HomePageBanner />
      <HomePageBanner2 />
      <HomePageFooter />
    </div>
  )
}

export default HomePage
