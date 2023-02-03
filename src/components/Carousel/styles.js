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
     justify-content: center;
     gap: 5rem;
   }

   .next, .prev {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    width: 8rem;
    cursor: pointer;
    z-index: 100;
   }

   .next {
    right: -20px;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.25) 0%, #000A0F 100%);
   }

   .prev {
    left: -20px;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.25) 0%, #000A0F 100%);
   }
   `

