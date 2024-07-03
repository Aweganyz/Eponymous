import React, { useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import "../../styles/header.css"
import Sidebar from './Sidebar/Sidebar';
import Search from './Search';

export default function Header2 () {
   
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  const profileone = useRef()
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const profile =()=>{
      profileone.current.classList.toggle("hgfiyug")
    }

    return (
<>
<Sidebar isopen={isopen} toggle={toggle} />

<div className="navbarHome" >
        <div className='navbarinner'>
        <div className="navleft">
          <div className="navbar-brand1">
            <Link to="/">
            Eponymous
            </Link>
            </div>
        </div>
  
        <div className='nav02'>
            <div className='nav02a'>
            <Link to="/alldesigners"><div className='nav002'>DESIGNERS</div></Link>
            <Link to="/about">  <div className='nav002'>ABOUT US</div></Link>
            <Link to="/joinus"><div className='nav002'>JOIN US</div></Link> 
            {/* <Search /> */}

            </div>
             
          </div>
        <div className="navright">
          { isAuthenticated ? 
            (
              <div  >
                  <div className='vyttfy' onClick={profile}>
                  {user.name} <img className='hftfuyu' src='/images/down.svg' alt='Eponymous' />
            
                  </div>
                  <div className='ytfyuu' ref={profileone} >
                 
                      <div onClick={() => {
                        navigate('/myprofile')
                        profileone.current.classList.remove("hgfiyug")

                      }} >Profile</div>
                 
                  </div>
              </div>


            )
          
          :

          <div className='navright'>
             {/* <div className='nav003' id='seearch'>
              <img alt='Eponymous' src='/images/search.svg'></img></div> */}
              
         <div id='gfcyuvii'>
         <Search />
          </div>
              
              <a href="/login">      <div className='nav003'><img alt='Eponymous' src='/images/profile.svg'></img></div></a>
                     
               
          </div>
        
          }
        </div>
        </div>
    </div>
<div className='navmob' >
          <div className='innermobile'>
          <div className='navmob1' onClick={toggle}>            <div  className='navmob11'><img alt='Eponymous' src='/images/mob1.svg'></img></div>            </div>
         <a href='/'>   <div  className='navmob2'>            <div  className='navmob21'>Eponymous</div>            </div></a>
            <div className='navmob1111' onClick={toggle}>            <div  className='navmob11'><img alt='Eponymous' src='/images/mob1.svg'></img></div>            </div>

          </div>
        </div>

</>
    )
}
