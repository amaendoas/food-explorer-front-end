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
        <div className="prev">
          <button onClick={handleLeftClick}>
            <MdArrowBack/>
          </button>
        </div>
        <div className="next">
          <button onClick={handleRightClick}>
            <MdArrowForward/>
          </button>
        </div>
      <div className="carousel" ref={carousel}>
        <div
        className="inner"
        >
          {children}
        </div>
      </div>
    </C.Container>
  )
}