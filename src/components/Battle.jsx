import React from "react";
import Button from "./Button";

import { getScreen, getScreenFromFlow, screens, flows } from "../data";
import DoubleArrow from "../assets/icons/DoubleArrow";
import HotSpot from "./HotSpot";
import CloseButton from "./CloseButton";

const defaultPopoverContent = (
  <p className="m-0 fw-bold flex flex-row align-items-center">
    {" "}
    Touch{" "}
    <span
      className="h-6 w-6 p-4 rounded-full inline-flex m-2"
      style={{
        boxShadow: "0px 0px 10px 1px #000000",
        background: "#F5D952",
      }}
    />{" "}
    for more information
  </p>
);

const Battle = ({
  setCurrentScreen,
  setPreviousScreen,
  currentScreen,
  currentFlow,
}) => {
  const [popover, setPopover] = React.useState(false);

  const indexOfCurrentScreen =
    flows[currentFlow].indexOf(
      getScreenFromFlow({ flow: currentFlow, str: currentScreen.NAME })
    ) + 1;
  const numberOfScreens = flows[currentFlow].length;
  const nextButtonDisabled = indexOfCurrentScreen === flows[currentFlow].length;
  const previousButtonDisabled = indexOfCurrentScreen === 1;
  return (
    <div className="w-full h-full border-2 border-green-400 bg-gray-600 flex flex-row">
      <div
        className="border-l-8 border-gray-900 bg-tan overflow-scroll no-scrollbar"
        style={{ width: "700px" }}
      >
        <div
          className="flex flex-row justify-between"
          style={{ height: "125px" }}
        >
          <button
            className="h-full w-1/3 flex flex-row justify-center items-center"
            disabled={previousButtonDisabled}
            onClick={() => {
              setPopover(false)
              setCurrentScreen(flows[currentFlow][indexOfCurrentScreen - 2]);
            }}
          >
            <DoubleArrow
              height="60px"
              transform="rotate(180)"
              fill={previousButtonDisabled ? "#777" : "black"}
              stroke={previousButtonDisabled ? "#777" : "black"}
            />
          </button>
          <div className="h-full w-1/3 flex flex-row justify-center items-center text-4xl">
            {indexOfCurrentScreen} / {numberOfScreens}
          </div>
          <button
            className="h-full w-1/3 flex flex-row justify-center items-center square"
            disabled={nextButtonDisabled}
            onClick={() => {
              setPopover(false)
              setCurrentScreen(flows[currentFlow][indexOfCurrentScreen]);
            }}
          >
            <DoubleArrow
              height="60px"
              fill={nextButtonDisabled ? "#777" : "black"}
              stroke={nextButtonDisabled ? "#777" : "black"}
            />
          </button>
        </div>
        <div className="w-full bg-yellow border-t-4 border-b-4 border-black flex flex-col align-items-center text-5xl p-2 square mb-5">
          {currentScreen.YEAR}
        </div>
        <h1
          className="text-center ven mb-1 text-uppercase"
          style={{ fontSize: "28px", fontWeight: 800 }}
        >
          {currentScreen.TITLE}
        </h1>
        <h2 className="text-center calibri text-lg mb-5">
          {currentScreen.DATES}
        </h2>
        <div
          className="w-full p-20 pt-0 battle-content"
          dangerouslySetInnerHTML={{ __html: currentScreen.CONTENT }}
        ></div>
      </div>

      <div
        style={{
          width: "1220px",
          backgroundImage: `url(${
            require(`../assets/images/${currentScreen.BACKGROUND}.jpg`).default
          })`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
          backgroundPosition: 'bottom'
        }}
        className="flex flex-end"
      >
        <CloseButton
          onClick={() =>
            setCurrentScreen(
              getScreen(
                getScreenFromFlow({
                  flow: currentFlow,
                  str: currentScreen.NAME,
                }).PREVIOUS_SCREEN
              )
            )
          }
        />
        {currentScreen?.HOTSPOTS?.map((hotspot) => {
          return (
            <HotSpot
              {...hotspot}
              onClick={() => {
                setPopover(hotspot.CONTENT);
              }}
            />
          );
        })}
        <div className="position-absolute bg-yellow m-16 p-8 flex flex-row max-w-xl shadow">
          {popover || defaultPopoverContent}
        </div>
      </div>
    </div>
  );
};

export default Battle;
