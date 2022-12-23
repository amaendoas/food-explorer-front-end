import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  padding: calc(0.8rem + 0.5vw);
  margin: 2rem 0;

  img {
    width: calc(3rem + 1vw);
  }

`

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: calc(0.8rem + 0.7vw);

    span:nth-child(3) {
      margin-left: 0.6rem;
      font-size: calc(0.6rem + 0.5vw);
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
  }

  button {
    font-size: calc(0.8rem + 0.5vw);
    color: ${({theme}) => theme.COLORS.RED};
  }
`