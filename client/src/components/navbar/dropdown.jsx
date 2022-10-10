import React from 'react'
import './dropdown.css'
import logo from "../../assets/daraz.png";

export default function Dropdown1() {
    
  return (
    <div>
  <nav id="menu">
    <ul>
      <li><a href="#" ><img
                      src={logo}
                      width={200}
                      height={60}
                      alt=""
                      /></a>
        <ul>
          <li><a href="#">Categories and Pets
</a></li>
          <li><a href="#">Health and beauty</a></li>
          <li><a href="#">Mens Fashion</a></li>
          <li><a href="#">Baby and Toys</a>
            <ul id='second'>
              <li><a href="#">Feeding</a></li>
              <li><a href="#">Baby Gear</a></li>
              <li><a href="#">Toys and Games</a>
              <ul id='third'>
                  <li><a href="#">Art and Cart for kids</a></li>
                  <li><a href="#">Dolls and Accessories</a></li>
                  <li><a href="#">Learning and Education</a></li>
                  <li><a href="#">Stuffed Toyes</a></li>
                </ul>
              </li>
              <li><a href="#">Clothing and Games</a></li>
              <li><a href="#">Remote controle & Vehicles</a></li>

            </ul>
          </li>
          <li><a href="#"> Home and LifyStyle</a></li>
          <li><a href="#"> Electronic Devices</a></li>
          <li><a href="#"> Watches, bags and Jewellery</a></li>
          <li><a href="#"> Sports and Outdoor</a></li>
          <li><a href="#"> TV & Home Appliances</a></li>
          <li><a href="#"> Automotiv & Jewellary</a></li>

        </ul>
      </li>
    </ul>
  </nav>

    </div>
  )
}
