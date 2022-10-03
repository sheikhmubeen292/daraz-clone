import React from "react";
import Navbar from "./navbar/navbar";
import Slider from "./slider/Slider";
import DarazMall from "./DarazMall/DarazMall";
import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Slider />
      <FlashSale />
      <DarazMall />
      <Categories />
    </div>
  );
}
