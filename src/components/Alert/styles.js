import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(150px);
  } to {
    transform: translateX(0);
  }
`

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 50px;
  z-index: 1000;
  margin: 1rem;
  padding: 1.2rem;
  border-left: 8px solid ${({theme, isSuccess}) => isSuccess ? theme.COLORS.GREEN : theme.COLORS.RED};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  gap: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  font-size: 1.6rem;
  animation: ${slideIn} 1s;

  svg {
    font-size: 2.5rem;
  }

  button {
    display: flex;
    align-items: center;
  }
`