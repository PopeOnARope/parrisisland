import React from "react";
import Button from "./Button";

import { getScreen, screens, flows } from "../data";

const TextBox = ({
  setCurrentFlow,
  setPreviousScreen,
  setCurrentScreen,
  ...props
}) => {
  return (
    <div
      className="w-full h-full border-2 border-green-400 bg-gray-600 flex flex-row justify-end"
      style={{
        background: `url(${
          require(`../assets/images/Home_Menus_BaseMap.jpg`).default
        })`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mt-80">
        <h1 className="ven text-5xl tracking-wider text-white">
          INTERACTIVE GUIDE TO
        </h1>
        <h1 className="square text-7xl mb-44 text-green tracking-super-wide">
          OPERATIONS
        </h1>
        {props.ACTIONS.map((action) => (
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
    </div>
  );
};

export default TextBox;
