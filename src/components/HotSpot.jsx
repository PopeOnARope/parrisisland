import React from "react";
import ReactTooltip from "react-tooltip";

class HotSpot extends React.Component {
  render() {





    return (
      <div style={{marginTop: `${this.props.X}px`, marginLeft: `${this.props.Y}px`, position: "absolute"}}>
        <p data-tip={this.props.CONTENT}>Tooltip</p>
        <ReactTooltip place='bottom'/>
      </div>
    );
  }
}

export default HotSpot;
