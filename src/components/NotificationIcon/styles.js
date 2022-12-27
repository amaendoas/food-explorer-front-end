import styled from "styled-components";

export const Container = styled.button`
  position: relative;

  svg {
    font-size: 2.7rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    position: absolute;
    background-color: ${({theme}) => theme.COLORS.RED};
    right: -5px;
    bottom: 0px;
  }
`