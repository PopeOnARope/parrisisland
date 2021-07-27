import React from "react";
import Button from "./Button";

import { getScreen, screens } from "../data";
import DoubleArrow from "../assets/images/DoubleArrow";
import HotSpot from "./HotSpot";
import CloseButton from "./CloseButton";

const TextBox = ({ setCurrentScreen, setPreviousScreen, currentScreen }) => {
  return (
    <div
      className="w-full h-full border-2 border-green-400 bg-gray-600 flex flex-row"
      // style={{
      //   background: `url(${require(`../assets/images/ss3.png`).default})`,
      //   backgroundRepeat: "none",
      //   backgroundSize: "cover",
      // }}
    >
      <div
        className="border-l-8 border-gray-900 bg-tan"
        style={{ width: "700px" }}
      >
        <div
          className="flex flex-row justify-between"
          style={{ height: "125px" }}
        >
          <button className="h-full w-1/3 flex flex-row justify-center items-center">
            <DoubleArrow
              height="60px"
              transform="rotate(180)"
              fill="black"
              stroke="black"
            />
          </button>
          <div className="h-full w-1/3 flex flex-row justify-center items-center text-4xl">
            1/2
          </div>
          <button className="h-full w-1/3 flex flex-row justify-center items-center">
            <DoubleArrow height="60px" fill="black" stroke="black" />
          </button>
        </div>

        <div
          className="w-full p-20"
          dangerouslySetInnerHTML={{ __html: currentScreen.CONTENT }}
        ></div>
      </div>

      <div
        style={{
          width: "1220px",
          background: `url(${
            require(`../assets/images/${currentScreen.BACKGROUND}.jpg`).default
          })`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
        className="flex flex-end"
      >
        <CloseButton />
        {currentScreen?.HOTSPOTS?.map((hotspot) => {
          return <HotSpot {...hotspot} />;
        })}
      </div>
    </div>
  );
};

export default TextBox;
