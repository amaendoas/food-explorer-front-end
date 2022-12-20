import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0;
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;

    span:nth-child(3) {
      margin-left: 0.6rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
  }

  button {
    color: ${({theme}) => theme.COLORS.RED};
  }
`