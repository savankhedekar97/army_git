import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/Carousel";
import Constitution from "../DocumentsAndRules/Constitution";
import DomesticSailingCalendar from "../Event/DomesticSailingCalendar/DomesticSailingCalendar";
import Results from "../Event/Results/Results";
import HomeCards from "./HomeTiles";

const Home = () => {
  return (
    <div className="home-container">
      <ImageCarousel />
      <div>
        <HomeCards />
      </div>
      <div>
        <Constitution page="home" />
      </div>
      <DomesticSailingCalendar />
      <Results />
    </div>
  );
};

export default Home;
