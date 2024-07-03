import React, { useEffect, useState } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import "../styles/SliderHome.css"
import { useLocation, useNavigate } from 'react-router-dom';

function Slidermob() {
  const [width , setwidth] =  useState(45)
  console.log(width , "jyjfug");
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState("")

  const searchHandler = (e) => {
      
      e.preventDefault();
      navigate(`/search/${keyword}`)

  }
  useEffect(() => {
    const swiper = new Swiper('.swiperm', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 40,
    });

    // Optionally, you might need to update the swiper when the component is unmounted
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
   <>
  <div className='maingud'>
  <div className="bk-slider">
  <div className="swiperm">
    <div className="swiper-wrapper">
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder1'></div>
      <div className="swiper-slide" id='silder1'></div>
    </div>


  </div>

</div>
  </div>
<div className='search'>
    <h1>Fermentum aenean duis</h1>
  <h1 className='ytfiyug'> pellentesque dui. Fusce rutrum
    quis in vulputate. Porttitor faucibus id.</h1>
    <form onSubmit={searchHandler}>
    <div className='searchinput'>
    <input type='text' onChange={(e)=>{ setKeyword(e.target.value) }}
                value={keyword} placeholder='Search for Designer, Stylist, Footwear, Accessories' />
       <button id="search_btn" >search</button>
    </div>
    </form>
</div>
   </>
  )
}

export default Slidermob
