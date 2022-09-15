import styled from "styled-components";

export const Container = styled.div`
  height: 45rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 4rem;
  text-align: center;
  gap: 1.6rem;
  margin-left: 5rem;

  .heart {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  img {
    width: 18rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  p {
    &:nth-child(4) {
      font-size: 1.2rem;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    &:nth-child(5) {
      color: ${({theme}) => theme.COLORS.PRIMARY};
      font-size: 3rem;
    }
  }
`

export const Count = styled.div`
  font-size: 2rem;
  gap: 10px;
  display: flex;
  align-items: center;
`