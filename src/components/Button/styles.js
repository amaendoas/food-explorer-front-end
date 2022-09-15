import styled from "styled-components";

export const Container = styled.button`
  height: 4.5rem;
  width: fit-content;
  padding: 0 3rem;
  background-color: ${({theme}) => theme.COLORS.RED};
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`