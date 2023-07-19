import React from 'react'

import './CityPageDetails.css'
import DifferentOptionsBtn from '../../../recomponents/DifferentOptionsBtn/DifferentOptionsBtn'
// import ShowMoreBtn from '../../../recomponents/ShowMore/ShowMoreBtn'

const CityPageDetails = () => {

  const localities = [
    "Mahmadpur",
    "Kodchera",
    "Yadgarpalli",
    "Korremal",
    "Pratapsingaram",
    "Pochampally",
    "Cmr College",
    "Porur",
    "Aliabad",
    "Anantaram",
    "Bits",
    "Show More"
]

  const localities_options = localities.map((option)=>{
    return <DifferentOptionsBtn option={option}/>
  })


  return (
    <div className='city_details'>
      <div className='details_culture'>
        <div className='details_culture_heading'>
          Food culture in Hyderabad
        </div>
        <div className='details_culture_table'>
          <div className='culture_table_heading'>
            Order Food from Your Favourite Restaurants in Hyderabad With Swiggy
          </div>
          <p>
            Hyderabad is heaven for every foodie out there. The Pearl city of India offers a rich and vibrant food culture that will satisfy your taste buds. Hyderabadi food is a unique blend of Turkish, Mughal, Arabic and Telugu cultures. And the best thing is you get to savour this unique blend of flavours with us.<br></br><br></br>

            Whether it's slow-cooked mutton, Mutton Dalcha, or Sheer Korma, Swiggy delivers some of the most delicious Hyderabadi cuisines right to your doorstep. Delicious food from popular cafes, eateries, and local food joints gets delivered across the city in no time. So when placing your online food order in Hyderabad, you need to find a restaurant near you that serves your favourite dish and relish in the unique flavours of Hyderabadi cuisines.
          </p>

          <div className='culture_table_subheading'>
            Sit back and enjoy your favourite dishes at your home.
          </div>
          <p>
            Hyderabad is home to millions of people who order food online. To cater to their needs, Swiggy partners with top-rated restaurants, cafes, and food joints to bring you a wide range of food menus.<br></br>

            No need to step out in the city traffic and spend hours waiting to get a table in a restaurant; you can get online food delivery in Hyderabad and savour your favourite dishes while watching your favourite movie or Netflix show.<br></br>

            Are you throwing a weekend house party and worrying about the snacks and food? Let Swiggy take care of it. Order party meals like pizza, burgers, beverages and many other exotic dishes online and let the party begin.
          </p>

          <div className='culture_table_subheading'>
            Enjoy the Unique Blend of Flavours of Local and Exotic Cuisines.
          </div>
          <p>
            Did you know Hyderabad has bagged the 'Creative City of Gastronomy' title by UNESCO? Why wouldn't it? Hyderabadi food is renowned for its rich flavours and various snacks, main courses and desserts. Beyond the famous Hyderabadi Biryani, there are countless delicacies to relish, such as Haleem, Mutton Dalcha, Shikampuri Kebab, Nazaqati Boti Kebab, Khubani ka Meetha and Hyderabadi Phirni. Apart from authentic Hyderabadi dishes, leave room for international cuisines like Mexican, Italian, Chinese, Thai, Taiwanese and Japanese to surprise your taste buds.
          </p>

          <div className='culture_table_subheading'>
            Frequently Asked Questions
          </div>
          <div className='culture_table_question'>
            Is Swiggy Available in Hyderabad?
          </div>
          <p>
            Yes. Swiggy delivers food across more than 40 neighbourhoods in Hyderabad, such as Banjara Hills, Raidurgam, Uppal, Ameerpet, Somajiguda & Khairatabad, Abids & Koti, Suncity & Bandlaguda, Vanasthalipuram and many more.
          </p>

          <div className='culture_table_question'>
            Where can I find the best food delivery Hyderabad offers?*
          </div>
          <p>
            As you look for the best restaurants for 24-hour food delivery in Hyderabad, look for high-rated restaurants in user ratings. Add your favourite snacks and food items to the cart and apply the suggested coupon codes. You can also use the different discounts offered by Swiggy.
          </p>

          <div className='culture_table_question'>
            Where can I find affordable food delivery in Hyderabad?
          </div>
          <p>
            Swiggy helps you find the most affordable restaurants in Hyderabad without much hassle. Once you enter your location, you are presented with various cafes, food joints and restaurants near you. Use the search filter "Cost: Low to High" to find the best restaurants that fit your budget.
          </p>

          <div className='culture_table_question'>
            Does Swiggy offer a cash-on-delivery option in Hyderabad?

          </div>
          <p>
            Yes. Swiggy offers a cash-on-delivery payment option for orders in Hyderabad. Make sure you select the cash-on-delivery option while placing your order, and keep the cash ready to pay when your order gets delivered.
          </p>

          <div className='culture_table_question'>
            How to save money on Swiggy online food orders?
          </div>
          <p>
            There are plenty of ways to save money on your Swiggy food orders. You can use the search filters to find the most affordable restaurants, cafes and food joints near you. Swiggy offers numerous discounts and promo codes that you can use to get discounts on your bill amount. You can also look for free delivery options to save money on delivery charges.
          </p>
        </div>
      </div>
      <div className='details_explore'>
        <div className='details_explore_heading'>Explore localities in and around Hyderabad</div>
        <div className='details_explore_options'>
          {localities_options}
        </div>
      </div>
      <div className='details_explore'>
        <div className='details_explore_heading'>Explore localities in and around Hyderabad</div>
        <div className='details_explore_options'>
          {localities_options}
        </div>
      </div>
      <div className='details_explore'>
        <div className='details_explore_heading'>Explore localities in and around Hyderabad</div>
        <div className='details_explore_options'>
          {localities_options}
        </div>
      </div>
      <div className='details_explore'>
        <div className='details_explore_heading'>Explore localities in and around Hyderabad</div>
        <div className='details_explore_options'>
          {localities_options}
        </div>
      </div>
    </div>
  )
}

export default CityPageDetails
