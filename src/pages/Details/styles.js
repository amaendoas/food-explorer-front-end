import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: 50% 50%;
  grid-template-areas: "img info";
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  border-radius: 10px;
`

export const DishImg = styled.div`
  grid-area: img;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: calc(8rem + 12vw);
    height: auto;
    border-radius: 50%;
  }
`

export const Info = styled.div`
  grid-area: info;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  .ingredients-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .count {
    justify-content: start;
    margin-top: 1rem;
  }
`