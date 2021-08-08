import React from "react";
import Button from "./Button";

import { getScreen, screens } from "../data";
import BackButton from "./BackButton";

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
      <div className="h-full w-full flex flex-col justify-end pl-0 pb-16">
        <BackButton
          onClick={() => {
            setCurrentScreen(getScreen("HOME"));
          }}
        />
      </div>

      <div className="flex flex-col mt-36 mr-48">
        {currentScreen.BATTLES.map((battle, idx) => (
          <Button
            color={idx % 2 === 0 ? "GREEN" : "YELLOW"}
            variant="lg"
            alignment={"left"}
            arrow="true"
            onClick={() => {
              setCurrentFlow('CHRONOLOGICAL_BATTLES')
              setCurrentScreen(battle);
            }}
          >
            {battle.NAME}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
