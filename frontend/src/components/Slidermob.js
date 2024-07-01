import React, { useEffect, useState } from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import "../styles/SliderHome.css"

function Slidermob() {
  const [width , setwidth] =  useState(45)
  console.log(width , "jyjfug");

  useEffect(() => {
    const swiper = new Swiper('.swiperm', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 45,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>

  </div>

</div>
  </div>
<div className='search'>
    <h1>Fermentum aenean duis</h1>
  <h1 className='ytfiyug'> pellentesque dui. Fusce rutrum
    quis in vulputate. Porttitor faucibus id.</h1>

    <div className='searchinput'>
      <input type='text' placeholder='Search for Designer, Stylist, Footwear, Accessories' />
      <button>search</button>
    </div>
</div>
   </>
  )
}

export default Slidermob
