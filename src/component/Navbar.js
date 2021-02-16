import React from 'react';
import './navbar.css';


export default function Navbar() {
    return (
        <div>
        <header >
        <div class="logo"> <a><img src="./logo.jpeg" alt="logo"/></a>  </div>
        <nav> 
            <ul class="nav-links"> 
                
                <li>  <a href="#"> PINGPONG  </a> </li> 
                <li>  <a href="#"> Services</a> </li> 
                <li>  <a href="#"> PR </a> </li> 
                <li>  <a href="#"> Careers </a> </li> 
           
                </ul>
        </nav>

    </header>
      </div>
    )
}
