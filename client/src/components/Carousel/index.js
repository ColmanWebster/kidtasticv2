import { Carousel, RadioGroup, Divider, Radio } from "rsuite";
import React from "react";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};
function FrontCar() {
  return (
    <Carousel className="custom-slider">
      <img
        alt=""
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
        height="250"
      />
      <img
        alt=""
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
        height="250"
      />
      <img
        alt=""
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
        height="250"
      />
      <img
        alt=""
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
        height="250"
      />
      <img
        alt=""
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
        height="250"
      />
    </Carousel>
  );
}

export default FrontCar;
