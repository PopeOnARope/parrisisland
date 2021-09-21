import React from "react";
import Button from "./Button";

import { getScreen, screens, flows } from "../data";

const TextBox = ({
  setCurrentFlow,
  setPreviousScreen,
  setCurrentScreen,
  backgrounds,
  currentScreen,
  ...props
}) => {
  return (
    <div className="w-full h-full bg-gray-600 flex flex-row justify-end">
      <div className="flex flex-col mt-80" style={{zIndex: 100}}>
        <h1 className="ven text-5xl tracking-wider text-white">
          INTERACTIVE GUIDE TO
        </h1>
        <h1 className="square text-7xl mb-44 text-green tracking-super-wide">
          OPERATIONS
        </h1>
        {currentScreen.ACTIONS.map((action) => (
          <Button
            {...action}
            variant="lg"
            alignment="right"
            onClick={() => {
              setCurrentFlow(action.DIRECTS_TO);
              setCurrentScreen(getScreen(action.DIRECTS_TO));
            }}
          >
            {action.LABEL}
          </Button>
        ))}
      </div>
      <img src={backgrounds[currentScreen.BACKGROUND]} className='absolute' />
    </div>
  );
};

export default TextBox;
