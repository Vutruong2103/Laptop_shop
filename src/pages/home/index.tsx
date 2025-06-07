import React from "react";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import Homebanner from "../../components/home-banner";

const Home = () => {
  return (
    <div>
      <Homebanner/>
      <Brand/>
      <HotProducts/>
    </div>
  )
};
export default Home;
