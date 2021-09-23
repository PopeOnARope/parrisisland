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
  backgrounds,
}) => {
  const [popover, setPopover] = React.useState(false);

  const indexOfCurrentScreen =
    flows[currentFlow].indexOf(
      getScreenFromFlow({ flow: currentFlow, str: currentScreen.NAME })
    ) + 1;
  const numberOfScreens = flows[currentFlow].length;
  const nextButtonDisabled = indexOfCurrentScreen === flows[currentFlow].length;
  const previousButtonDisabled = indexOfCurrentScreen === 1;

  const ref = React.useRef(null)

  function scrollUp(){
    ref.current.scrollTop = 0;
  }

  const extraContentPadding =  (popover && currentScreen.CONTENTCOORDINATES) ? {
    marginTop: `${currentScreen?.CONTENTCOORDINATES?.X}px`,
    marginLeft:`${currentScreen?.CONTENTCOORDINATES?.Y}px`
  } : {}
  return (
    <div
      className=" flex flex-row"
      style={{ height: "2160px" }}
    >
      <div
        className="bg-tan overflow-scroll no-scrollbar"
        style={{ width: "1400px" }}
        ref={ref}
      >
        <div
          className="flex flex-row justify-between border-b-8 border-black ARROWS sticky bg-tan"
          style={{ height: "250px", width:'inherit', position: 'absolute', left: 0 }}
        >
          <button
            className="h-full w-1/3 flex flex-row justify-center items-center"
            disabled={previousButtonDisabled}
            onClick={() => {
              setPopover(false);
              scrollUp()
              setCurrentScreen(flows[currentFlow][indexOfCurrentScreen - 2]);
            }}
          >
            <DoubleArrow
              height="120px"
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
              setPopover(false);
              scrollUp()
              setCurrentScreen(flows[currentFlow][indexOfCurrentScreen]);
            }}
          >
            <DoubleArrow
              height="120px"
              fill={nextButtonDisabled ? "#777" : "black"}
              stroke={nextButtonDisabled ? "#777" : "black"}
            />
          </button>
        </div>
        <div className="w-full bg-yellow border-b-8 border-black flex flex-col align-items-center text-5xl p-4 square mb-10" style={{marginTop: '7.75rem'}}>
          {currentScreen.YEAR}
        </div>
        <h1
          className="text-center ven mb-1 text-uppercase"
          style={{ fontSize: "2.5rem", fontWeight: 800 }}
        >
          {currentScreen.TITLE}
        </h1>
        <h2 className="text-center calibri text-lg mb-5">
          {currentScreen.DATES}
        </h2>
        <div
          className="w-full p-20 pt-0 battle-content"
          style={{fontSize: '1.25rem'}}
          dangerouslySetInnerHTML={{ __html: currentScreen.CONTENT }}
        ></div>
      </div>

      <div
        style={{
          width: "2440px",
          backgroundImage: `url(${backgrounds[currentScreen.BACKGROUND]})`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
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
        <div className="position-absolute bg-yellow m-16 p-8 flex flex-row max-w-xl shadow" style={extraContentPadding}>
          {popover || defaultPopoverContent}
        </div>
      </div>
    </div>
  );
};

export default Battle;
