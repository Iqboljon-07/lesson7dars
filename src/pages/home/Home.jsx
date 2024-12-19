import React from "react";
import str, { age as yosh, arraw } from "../../static/index.js"; //faqat bir marta export defaultni ishlatish mumkin
import { MdOutlineHome } from "react-icons/md";
import { PiAirplaneTakeoffFill, PiAirplaneBold } from "react-icons/pi";
import "./Home.css";

import { PiAcornBold } from "react-icons/pi";
const Home = () => {
  return (
    <div className="home">
      <MdOutlineHome />
      <PiAcornBold id="idea" className="air" />
      <PiAirplaneTakeoffFill />
      <PiAirplaneBold />

      <p>{str} </p>
      <h1>{arraw} </h1>
      <div>{yosh} </div>
    </div>
  );
};

export default Home;
