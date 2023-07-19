import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'


import './CityPageMenu.css'

import { MdStars } from 'react-icons/md'
import Gridlist from '../../../dummydata/Gridlist/Gridlist'
import ShowMoreBtn from '../../../recomponents/ShowMore/ShowMoreBtn'
import Filters from '../../../recomponents/Filters/Filters'

const CityPageMenu = () => {

  const [visibleItems, setVisibleItems] = useState(6)

  const handleShowMore = () => {
    let prevVisibleItems = visibleItems
    setVisibleItems(prevVisibleItems + 6)
  }

  const grid_menu = Gridlist.slice(0, visibleItems).map((item) => {
    return (
      <div className='grid_scroll_card'>
        <Link to='/'>
          <div className='grid_card_img'>
            <img src={item.img} alt="" />
          </div>
          <div className='card_details'>
            <div className='card_title'>
              {item.name.slice(0,23)}... 
            </div>
            <div className='card_rating'>
              <span className='rating_icon'><MdStars></MdStars></span>
              <span className='rating_num'>{item.rating}</span>
            </div>
            <div className='card_overview'>
              {item.categories.slice(0, 32)}...<br></br>
              {item.location}
            </div>
          </div>
        </Link>
      </div>)
  })

  return (
    <Fragment>
      <div className='city_menu'>
        <h2>Top restaurant chains in Hyderabad</h2>
        <div className='topres_scroll'>
          <div className='scroll_card'>
            <Link to='/'>
              <div className='card_img'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hnx9nazpxdpqpypjo8ld" alt="" />
              </div>
              <div className='card_details'>
                <div className='card_title'>
                  Shah Ghouse Hotel & Restaurant
                </div>
                <div className='card_rating'>
                  <span className='rating_icon'><MdStars></MdStars></span>
                  <span className='rating_num'>4</span>
                </div>
                <div className='card_overview'>
                  Biryani, North Indian, Chinese, Mughlai,...<br></br>
                  Hitec City
                </div>
              </div>
            </Link>
          </div>
          <div className='scroll_card'>
            <Link to='/'>
              <div className='card_img'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sigvm4gmkn6jlk5qu16a" alt="" />
              </div>
              <div className='card_details'>
                <div className='card_title'>
                  The Funnel Hill Creamery
                </div>
                <div className='card_rating'>
                  <span className='rating_icon'><MdStars></MdStars></span>
                  <span className='rating_num'>4</span>
                </div>
                <div className='card_overview'>
                  Desserts, Bakery, American, Italian <br></br>
                  Film Nagar
                </div>
              </div>
            </Link>
          </div>
          <div className='scroll_card'>
            <Link to='/'>
              <div className='card_img'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" alt="" />
              </div>
              <div className='card_details'>
                <div className='card_title'>
                  McDonald's
                </div>
                <div className='card_rating'>
                  <span className='rating_icon'><MdStars></MdStars></span>
                  <span className='rating_num'>4.1</span>
                </div>
                <div className='card_overview'>
                  Burgers, Beverages, Cafe, Desserts <br></br>
                  Madhapur
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='restaurants'>
        <h2>Restaurants with online food delivery in Hyderabad</h2>
        <Filters/>
        <div className='grid_menu'>
          {grid_menu}
        </div>
        {Gridlist.length <= visibleItems ? null :
          <div className='show_more'>
            <ShowMoreBtn handleShowMore={handleShowMore}/>
          </div>
        }
      </div>
    </Fragment>
  )
}

export default CityPageMenu
