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
        <div className="flex flex-row mr-3 mb-4" style={{ height: "100px" }}>
          <Button
            COLOR="GREEN"
            variant="sm"
            width="292px"
            style={currentScreen.NAME === "ALPHABETICAL_BATTLES" && "outline"}
            onClick={() => {
              setCurrentFlow("ALPHABETICAL_OPERATIONS");
              setCurrentScreen(getScreen("ALPHABETICAL_OPERATIONS"));
            }}
          >
            OPERATIONS
          </Button>

          <Button
            COLOR="YELLOW"
            style={
              currentScreen.NAME === "ALPHABETICAL_OPERATIONS" && "outline"
            }
            variant="sm"
            width="292px"
            onClick={() => {
              setCurrentFlow("ALPHABETICAL_BATTLES");
              setCurrentScreen(getScreen("ALPHABETICAL_BATTLES"));
            }}
          >
            BATTLES
          </Button>
        </div>
        {currentScreen.ACTIONS.map((action) => (
          <Button
            {...action}
            variant="sm"
            alignment={"left"}
            arrow="true"
            onClick={() => {
              setCurrentScreen(getScreen(action.DIRECTS_TO));
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
