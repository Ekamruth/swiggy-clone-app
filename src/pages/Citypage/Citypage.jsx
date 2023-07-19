import React from 'react'

import './Citypage.css'

import CityPageNav from '../../components/CityPageComponents/CityPageNav/CityPageNav'
import CityPageHeader from '../../components/CityPageComponents/CityPageHeader/CityPageHeader'
import CityPageMenu from '../../components/CityPageComponents/CityPageMenu/CityPageMenu'
import CityPageDetails from '../../components/CityPageComponents/CityPageDetails/CityPageDetails'
import Footer1 from '../../recomponents/Footer1/Footer1'
import Footer from '../../recomponents/Footer/Footer'

const Citypage = () => {
  return (
    <div>
      <CityPageNav/>
      <CityPageHeader/>
      <CityPageMenu/>
      <CityPageDetails/>
      <Footer1/>
      <Footer/>
    </div>
  )
}

export default Citypage
