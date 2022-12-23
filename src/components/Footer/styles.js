import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  height: 100%;
  padding: 0 12rem;
  font-size: calc(1rem + 0.4vw);

  img {
    width: calc(12rem + 4vw);
  }

  p {
    width: fit-content;
    white-space: nowrap;
  }

  @media (max-width: 1190px) {
    padding: 0 7rem;
  }

  @media (max-width: 800px) {
    p {
      text-align: end;
    }
    padding: 0 3rem;
  }
`