import styled from "styled-components";

export const Container = styled.div`
  font-size: calc(1.5rem + 0.5vw);
  width: 100%;
  gap: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    display: inline-block;
    width: 2.8rem;
  }

  svg {
    font-size: calc(1rem + 0.5vw);
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`