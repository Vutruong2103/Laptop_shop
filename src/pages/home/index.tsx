import React from "react";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import Homebanner from "../../components/home-banner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";

const Home = () => {
  return (
    <div>
      <Homebanner />
      <Brand />
      <HotProducts />
      <HomePromotion />
      <HomeTypeProducts />
    </div>
  );
};
export default Home;
