import React, { useRef, useState } from "react";
import "../scss/slider.scss";

function Slider() {
  const [move, setMove] = useState(0);
  const ref = useRef();
  const moveSlides = val => {
    for (let i of ref.current.children) {
      i.style.transform = `translate(-${val}%)`;
    }
  };
  // setInterval(() => {
  //   moveSlides(val);
  //   val < 300 ? (val += 100) : (val = 0);
  // }, 2000);
  const moveSlides1 = () => {
    setMove(0);
    moveSlides(0);
  };
  const moveSlides2 = () => {
    setMove(100);
    moveSlides(100);
  };
  const moveSlides3 = () => {
    setMove(200);
    moveSlides(200);
  };
  const moveSlides4 = () => {
    setMove(300);
    moveSlides(300);
  };
  return (
    <div className="slider">
      <div className="slides" ref={ref}>
        <div id="slide"></div>
        <div id="slide">2</div>
        <div id="slide">3</div>
        <div id="slide">4</div>
      </div>
      <div className="dots" onClick={moveSlides}>
        <div
          id="dot"
          onClick={moveSlides1}
          style={move === 0 ? { background: "white" } : {}}
        ></div>
        <div
          id="dot"
          onClick={moveSlides2}
          style={move === 100 ? { background: "white" } : {}}
        ></div>
        <div
          id="dot"
          onClick={moveSlides3}
          style={move === 200 ? { background: "white" } : {}}
        ></div>
        <div
          id="dot"
          onClick={moveSlides4}
          style={move === 300 ? { background: "white" } : {}}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
