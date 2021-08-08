import React from "react";
import Button from "./Button";

import { getScreen, getYear, screens } from "../data";
import BackButton from "./BackButton";
import ReturnButton from "./ReturnButton";

const Alphabetical = ({
  setCurrentScreen,
  setCurrentFlow,
  setPreviousScreen,
  currentScreen,
  ...props
}) => {
  return (
    <div
      className="w-full h-full bg-gray-600 flex flex-row justify-end"
      style={{
        backgroundRepeat: "none",
        background: `url(${
          require(`../assets/images/Home_Menus_BaseMap.jpg`).default
        })`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full flex flex-col justify-end pl-0 pb-16 justify-between">
        <ReturnButton
          onClick={() => {
            setCurrentScreen(getScreen("HOME"));
          }}
        />
        <BackButton
          onClick={() => {
            setCurrentScreen(getScreen("HOME"));
          }}
        />
      </div>

      <div className="flex flex-col mt-36 mr-0">
        {currentScreen.ACTIONS.map((action) => (
          <Button
            {...action}
            variant="yr"
            alignment="center"
            arrow="true"
            onClick={() => {
              setCurrentScreen(getYear(action.DIRECTS_TO));
            }}
          >
            {action.LABEL}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
