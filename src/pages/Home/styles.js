import styled from "styled-components";

export const Hero = styled.div`
    width: 100%;
    height: fit-content;
    margin: 10rem 0 17rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: calc(2rem + 5vw);
    text-align: start;
    padding: 0 2rem;
    position: relative;

    .home-text {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    ::after {
      left: 0;
      content: '';
      height: calc(10rem + 10vw);
      width: 100%;
      position: absolute;
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      z-index: -1;
      border-radius: 8px;
    }

    p {
      font-size: calc(0.5rem + 1vw);
    }

    img {
      width: calc(10rem + 30vw);
      margin: -5rem;
    }
`

export const Section = styled.section`
  margin: 5rem 0;
  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  .carrousel {
    display: flex;
  }
`