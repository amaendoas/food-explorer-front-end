import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12rem;
  font-size: 1.4rem;
`