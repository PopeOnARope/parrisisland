import React from "react";
import Button from "./Button";

import { getScreen, screens } from "../data";

const Alphabetical = ({
  setCurrentScreen,
  setPreviousScreen,
  currentScreen,
  ...props
}) => {
  return (
    <div
      className="w-full h-full border-2 border-green-400 bg-gray-600 flex flex-row justify-end"
      // style={{
      //   background: `url(${require(`../assets/images/ss2.png`).default})`,
      //   backgroundRepeat: "none",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex flex-col mt-36 mr-48">
        <div className="flex flex-row mr-3 mb-4" style={{ height: "100px" }}>
          <Button
            COLOR="GREEN"
            variant="sm"
            width="292px"
            style={
              currentScreen.NAME === "ALPHABETICAL_BATTLES" && "outline"
            }
            onClick={()=>{setCurrentScreen(getScreen("ALPHABETICAL_OPERATIONS"))}}
          >
            OPERATIONS
          </Button>

          <Button
            COLOR="YELLOW"
            style={currentScreen.NAME === "ALPHABETICAL_OPERATIONS" && "outline"}
            variant="sm"
            width="292px"
            onClick={()=>{setCurrentScreen(getScreen("ALPHABETICAL_BATTLES"))}}
          >
            BATTLES
          </Button>
        </div>
        {currentScreen.ACTIONS.map((action) => (
          <Button
            {...action}
            variant="sm"
            alignment={"left"}
            onClick={() => setCurrentScreen(getScreen(action.DIRECTS_TO))}
          >
            {action.LABEL}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
