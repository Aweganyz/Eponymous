import React, { useState } from 'react'
import "../styles/Home.css"
// import { useParams } from "react-router-dom";
import SliderHome from './SliderHome'
import Slidermob from './Slidermob'
import Header from './layouts/Header'
import Header2 from './layouts/Header2'
export default function Home() {
    const datasHome = [
        {
            image : "/images/h.svg",
            titile : "FASHION DESIGNERS",
             destination : "View Fashion Designers"
        },
        {
            image : "/images/h1.svg",
            titile : "STYLIST",
             destination : "View Stylist"
        },
        {
            image : "/images/h2.svg",
            titile : "FOOTWEAR",
             destination : "View Footwear"
        },
        {
           image : "/images/h3.svg",
           titile : "ACCESSORIES",
            destination : "View Accessories"
        }
    ]

    return (
        <>
        <Header2 />
            <div className='Home'>
                <div className='Homeinner'>
                   <div className='widowmslider'>
                   <SliderHome />
                   </div>
                   <div className='Mobileslider'>
                   <Slidermob />
                   </div>
                    <div className='lasthome'>
                         <p className='parahome'>Lorem morbi </p>
                         <div className='homedesc'>
                         Viverra sagittis enim in tellus
                         <br /> non posuere tellus viverra. 
                         </div>

                         <div className='Deginershome'>

                            {
                                datasHome.map(iteam =>{
                                    return(
                                        <>
                                          <div className='desiinne'>
                                <img className='hjvuyo' src={iteam.image} />
                                <div className='jgfi7uy'>
                                <h1>{iteam.titile}</h1>
                                </div>
                                <div className='linethrow'></div>
                                <div className='fgyg'>
                                    <div>{iteam.destination}</div>
                                    <div><img id='jhgfyu' src='/images/arrow.svg' /></div>
                                    </div>
                            </div>
                                        </>
                                    )
                                })
                            }
                       
                         
                         </div>

                       <div className='lastfooteend'>
                       <div className='yug8bui'>
                            <div className='lasjio'><div>Fermentum tristique at</div> <div className='lastright'><img id='jhgfyulast' src='/images/arrow.svg' /><a href='/alldesigners'>View All Designers</a></div></div>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
