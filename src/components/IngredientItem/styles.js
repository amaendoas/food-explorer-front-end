import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme , isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  min-width: 13rem;
  height: 4.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  

  input {
    height: 100%;
    min-width: 13rem;
    width: fit-content;
    padding: 0 0.8rem;
    outline: none;
  }

  button {
    padding: 0 1rem;
  }

  .select-div {
    border: none;
  }
`