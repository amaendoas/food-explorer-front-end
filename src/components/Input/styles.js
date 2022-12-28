import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  input {
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    width: 100%;
    height: 4.2rem;
    padding: 0 1rem;
    align-self: center;
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: 1.5rem;
  }

  input[type=file] {
   opacity: 0;
   cursor: pointer;
  }

  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: calc(0.7rem + 0.8rem);
    gap: 1rem;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    padding: 0 1rem;
    height: 4.2rem;
    border-radius: 5px;
    cursor: pointer;

    svg {
      font-size: calc(1.5rem + 0.7rem);
    }
  }
`