import React from "react";
import Button from "./Button";

import { getScreen, screens } from "../data";

const TextBox = ({ setCurrentScreen, setPreviousScreen, ...props }) => {
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
            onClick={() => setCurrentScreen(getScreen(action.DIRECTS_TO))}
          >
            {action.LABEL}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
