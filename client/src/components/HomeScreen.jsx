import React from "react";

import Slider from "./slider/Slider";
import DarazMall from "./DarazMall/DarazMall";
import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
import JustForYou from "./JustForYou/JustForYou";

export default function HomeScreen() {
  return (
    <div>
      <Slider />
      <FlashSale />
      <DarazMall />
      <Categories />
      <JustForYou />
    </div>
  );
}
