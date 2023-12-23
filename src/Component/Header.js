import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {

    //aos library
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <header  data-aos="zoom-in">
    <div class="header-container">
      <h1>Paragraph Generator</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
