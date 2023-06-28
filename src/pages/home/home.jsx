import React from "react";
import "./Style.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/topRated";
const home = () => {
  return (
    <>
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
};

export default home;
