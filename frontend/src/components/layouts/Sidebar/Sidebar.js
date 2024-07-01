import React from "react";
import "./Sidebar.css";
const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
    >
      <div className="icon">
        <div className="iconkop">
          {/* <a href='/'> <div className='nav11'> <img src='/images/navlogo.svg'></img></div></a> */}
          <div onClick={toggle}><img src="/images/close.svg" /></div>
        </div>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {/* <hr /> */}

      
          <a href="/alldesigners">  <div id="hgfuj">DESIGNERS</div></a>
          <hr />

          <a href="/about">  <div >ABOUT US</div></a>
          <hr />

          <a href="/joinus">  <div>JOIN US</div></a>
          <hr />
          <a href="/login">  <div>LOGIN</div></a>
          <hr />
        
          {/* <div id="hgfuj">Contact</div> */}

        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
