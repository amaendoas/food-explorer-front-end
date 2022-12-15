import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  height: 100%;
  padding: 3rem 12rem;
  animation: slideUp 1s ease backwards;
`

export const Hero = styled.div`
    width: 100%;
    height: 26rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    margin: 16.4rem 0 6rem;
    position: relative;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: end;
    text-align: start;
    padding: 0 12rem;

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
    }

    img {
      position: absolute;
      bottom: 0;
      left: -5rem;
    }
`

export const Section = styled.section`
  margin: 5rem 0;
  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 4rem;
  }

`