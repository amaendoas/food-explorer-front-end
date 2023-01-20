import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateY(-50px);
  } to {
    transform: translateY(0);
  }
`

export const Container = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 100;
  width: fit-content;
  padding: 1.2rem;
  border-left: 8px solid ${({theme, isSuccess}) => isSuccess ? theme.COLORS.GREEN : theme.COLORS.RED};
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  font-size: 1.6rem;
  animation: ${slide} 1s;

  svg {
    font-size: 2.5rem;
  }

  button {
    display: flex;
    align-items: center;
  }
`