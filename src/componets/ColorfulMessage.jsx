import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contesStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contesStyle}>{children}</p>;
};

export default ColorfulMessage;
