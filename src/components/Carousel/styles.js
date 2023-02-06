import styled from "styled-components";

export const Container = styled.div`
   max-width: 80vw;
   margin: 0 auto;
   position: relative;

   .carousel {
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
   }

   .inner {
     display: flex;
     align-items: center;
     justify-content: start;
     gap: 5rem;
   }

   .next, .prev {
    position: absolute;
    bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    z-index: 100;

    width: 8rem;

    button {
      pointer-events: all;
      width: 4rem;
      height: 4rem;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
      font-size: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
   }

   .next {
    right: -20px;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.25) 0%, #000A0F 100%);
    justify-content: end;
  }
  
  .prev {
    justify-content: start;
    left: -20px;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.25) 0%, #000A0F 100%);
   }
   `

