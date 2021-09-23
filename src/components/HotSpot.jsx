import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Hotspot_1_Icon from "../assets/icons/Hotspot_1_Icon";
import Hotspot_2_Icon from "../assets/icons/Hotspot_2_Icon";
import Hotspot_3_Icon from "../assets/icons/Hotspot_3_Icon";
import Hotspot_4_Icon from "../assets/icons/Hotspot_4_Icon";
import Hotspot_5_Icon from "../assets/icons/Hotspot_5_Icon";

const Icons = {
  1: Hotspot_1_Icon,
  2: Hotspot_2_Icon,
  3: Hotspot_3_Icon,
  4: Hotspot_4_Icon,
  5: Hotspot_5_Icon,
};

const HotSpot = (props) => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [isPulse, setIsPulse] = React.useState(false)
  const Icon = Icons[props.id];

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div
      className={`${isPulse && 'pulse-single'}`}
      style={{
        marginTop: `${props.X * 2}px`,
        marginLeft: `${props.Y * 2}px`,
        position: "absolute",
        borderRadius: '100%'
      }}
    >
      <a

        style={{
          display: "inherit",
          background: "#F5D952",
          padding: 0,
          borderRadius: "100%",
          boxShadow: "0px 0px 15px 5px #000000",
        }}
        onTouchStart={
          ()=> {
            props.onClick()
            setIsPulse(true)
            setTimeout(()=>{
              setIsPulse(false)
            }, 500)
          }
        }
      >
        <Icon width="100px" height="100px" fill="#F5D952" />
      </a>
    </div>
  );
};

export default HotSpot;
