import React from 'react'

import './ShowMoreBtn.css'

import {RiArrowDownSLine} from 'react-icons/ri'

const ShowMoreBtn = (props) => {
  return (  
      <button className='show_more_btn' onClick={props.handleShowMore}>Show more <span className='arrow_icon'><RiArrowDownSLine></RiArrowDownSLine></span></button>
  )
}

export default ShowMoreBtn
