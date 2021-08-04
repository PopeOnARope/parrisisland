import * as React from "react";

function DoubleArrow(props) {
  return (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 72 72"
      xmlSpace="preserve"
      {...props}
    >
      {/*<style>{`.prefix__st0{fill:${props.fill || "#eee"}`}</style>*/}
      <path
        fill={props.fill || "#eee"}
        d="M28.19 5.74h-3.62L54.83 36 24.57 66.26h3.62L58.45 36z"
      />
      <path
        fill={props.fill || "#eee"}
        d="M17.17 5.74h-3.62L43.81 36 13.55 66.26h3.62L47.43 36z"
      />
    </svg>
  );
}

export default DoubleArrow;
