import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  gap: 1rem;

  svg {
    font-size: 2.3rem;
    color: ${({theme}) => theme.COLORS.RED};
  }
`