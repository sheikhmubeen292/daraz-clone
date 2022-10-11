import React from 'react'
import './dropdown.css'
// import logo from "../../assets/daraz.png";

export default function Dropdown1() {
    
  return (
    <div>
 <nav className="menu">
    <ul>
      <li>
        <ul>
          <li><a href="http://localhost:3000/categoryPage/cleaninggloves">Cleaning Gloves
</a></li>
          <li><a href="http://localhost:3000/categoryPage/alaramclocks">Health and beauty</a></li>
          <li><a href="http://localhost:3000/product/634507f58000a613bc142a62">Mens Fashion</a></li>
          <li><a href="http://localhost:3000/categoryPage/kidswears">Baby and Toys</a>
            <ul className='second'>
              <li><a href="http://localhost:3000/categoryPage/microcard">Feeding</a></li>
              <li><a href="http://localhost:3000/product/633c254de61b3de006af2aa9">Baby Gear</a></li>
              <li><a href="http://localhost:3000/categoryPage/garlictools">Toys and Games</a>
              <ul className='third'>
                  <li><a href="http://localhost:3000/product/633c2c95e61b3de006af2ae7">Art and Cart for kids</a></li>
                  <li><a href="http://localhost:3000/product/633c2ae2e61b3de006af2ad5">Dolls and Accessories</a></li>
                  <li><a href="http://localhost:3000/product/633c2898e61b3de006af2ac5">Learning and Education</a></li>
                  <li><a href="#">Stuffed Toyes</a></li>
                </ul>
              </li>
              <li><a href="http://localhost:3000/product/633c2ac4e61b3de006af2ad3">Clothing and Games</a></li>
              <li><a href="http://localhost:3000/categoryPage/diningsets">Remote controle & Vehicles</a></li>

            </ul>
          </li>
          <li><a href="http://localhost:3000/product/633c2a69e61b3de006af2acf"> Home and LifyStyle</a></li>
          <li><a href="http://localhost:3000/categoryPage/mobiles"> Electronic Devices</a></li>
          <li><a href="http://localhost:3000/product/633d21b0da90b1266dd260c8"> Watches, bags and Jewellery</a></li>
          <li><a href="http://localhost:3000/categoryPage/paintguns"> Sports and Outdoor</a></li>
          <li><a href="http://localhost:3000/categoryPage/diningsets"> TV & Home Appliances</a></li>
          <li><a href="http://localhost:3000/categoryPage/featurephone"> Automotiv & Jewellary</a></li>

        </ul>
      </li>
    </ul>
  </nav>

    </div>
  )
}
