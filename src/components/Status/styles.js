import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(0.8rem + 0.5vw);
  gap: calc(0.5rem + 0.5vw);;

  svg {
    font-size: calc(1rem + 1vw);
    color: ${({theme}) => theme.COLORS.RED};
  }
`