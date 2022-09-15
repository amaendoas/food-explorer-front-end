import styled from "styled-components";

export const Container = styled.div`
  label {
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: 1.6rem;
    gap: 8px;

    input {
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
      padding: 1.6rem 1.4rem;
      width: 35rem;
      border-radius: 5px;
      color: ${({theme}) => theme.COLORS.GRAY_200};
      font-size: 1.5rem;
    }
  }
`