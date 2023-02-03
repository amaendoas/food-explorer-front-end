import { useState, useRef, useEffect } from "react";
import * as C from "./styles";
import { MdArrowForward, MdArrowBack } from "react-icons/md"


export function Carousel({children}) {
  const carousel = useRef();

  function handleLeftClick(e) {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <C.Container>
        <button className="prev" onClick={handleLeftClick}>
          <MdArrowBack/>
        </button>
        <button className="next" onClick={handleRightClick}>
          <MdArrowForward/>
        </button>
      <div className="carousel" ref={carousel}  whileTap={{ cursor: "grabbing"}}>
        <div
        className="inner"
        >
          {children}
        </div>
      </div>
    </C.Container>
  )
}