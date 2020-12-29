import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return ( 
        <>
  
            <header id="topnav" className="defaultscroll sticky bg-white">
      <div className="container">
    
          <div>
              <Link className="logo" to="/">
                  <img src="assets/images/logo-dark.png" height="24" alt="" />
              </Link>
          </div>                 
          <div className="buy-button">
              <Link to="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Buy Now</Link>
          </div>
      
          <div className="menu-extras">
              <div className="menu-item">
               
                  <Link className="navbar-toggle">
                      <div className="lines">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </Link>
                
              </div>
          </div>
  
          <div id="navigation">
 
              <ul className="navigation-menu">
                  <li><Link to="/">Home</Link></li>
                  <li className="has-submenu">
                      <Link to="/service">Service</Link>
                    
                  </li>
  
                  <li className="has-submenu">
                      <Link to="/about-us">About Us</Link>
             
                  </li>
                  <li className="has-submenu">
                      <Link to="contac-us">Contac Us</Link>
                  </li>
              </ul>
              <div className="buy-menu-btn d-none">
                  <Link to="/" target="_blank" className="btn btn-primary" >Buy Now</Link>
              </div>
          </div>
      </div>
  </header>


        </>
    );
}

export default Header;

