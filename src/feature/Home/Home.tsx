import React, { useState } from "react";
import HeroSection from "./sections/HeroSection";
import PerfectOutfit from "./sections/PerfectOutfit";
import NewCollections from "./sections/NewCollections";
import HouseWild from "./sections/HouseWild";
import RaiseStandards from "./sections/RaiseStandards";
import Sunshine from "./sections/Sunshine";
import NewsLetter from "./sections/NewsLetter";
import Img from "@/shared/Img";

const Home = () => {
  const [isActive, setIsActive] = useState(0);
  const data = [
    {
      tabName: "Asdad",
      tabContent:
        "Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Dsddassdas",
      tabContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ncididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ncididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Sdfvds",
      tabContent:
        "Lorem ipsum dolor sit amet, ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Rtyss",
      tabContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporaliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod temporaliqua.",
    },
  ];
  return (
    <div className="space-y-28 overflow-x-hidden text-white">
      <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_36%)]">
        <HeroSection />
      </div>
      <PerfectOutfit />
      <NewCollections />
      <HouseWild data={data} isActive={isActive} setIsActive={setIsActive} />
      <RaiseStandards />
      <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_36%)]">
        <Sunshine />
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;
