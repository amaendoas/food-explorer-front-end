import styled from "styled-components";

export const Container = styled.button`
  height: calc(3rem + 0.7vw);
  width: fit-content;
  padding: 0 calc(0.8rem + 0.2vw);
  background-color: ${({theme}) => theme.COLORS.RED};
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  white-space: nowrap;
  font-size: calc(1rem + 0.2vw);
  align-items: center;
  justify-content: center;
  gap: 5px;

 svg.btn-icon {
    font-size: calc(1.2rem + 0.6vw);
  }
`