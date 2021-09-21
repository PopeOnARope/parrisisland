import React from "react";
import Button from "./Button";

import { getScreen, screens } from "../data";
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
    >
      <div className="h-full w-full flex flex-col justify-between pl-0 pb-16">
        <ReturnButton
          onClick={() => {
            setCurrentScreen(getScreen("HOME"));
          }}
        />
        <BackButton
          onClick={() => {
            setCurrentScreen(getScreen("CHRONOLOGICAL"));
          }}
        />
      </div>

      <div className="flex flex-col mt-36 mr-48">
        {currentScreen.BATTLES.map((battle, idx) => (
          <Button
            COLOR={idx % 2 === 0 ? "GREEN" : "YELLOW"}
            variant="sm"
            alignment={"left"}
            arrow="true"
            onClick={() => {
              setCurrentFlow("CHRONOLOGICAL_BATTLES");
              setCurrentScreen(battle);
            }}
          >
            {battle.TITLE.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
