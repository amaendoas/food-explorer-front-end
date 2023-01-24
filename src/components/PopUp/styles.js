import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  bottom: 0;
  background-color: #000A0F88;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: calc(20rem + 20vw);
  text-align: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 5px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  position: relative;
`

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  svg {
    color: ${({theme}) => theme.COLORS.RED};
    font-size: calc(3.5rem + 2vw);
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;

  .cancel {
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.RED};
    color: ${({theme}) => theme.COLORS.RED};
  }
`