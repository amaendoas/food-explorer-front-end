import styled from "styled-components";

export const Containter = styled.div`
  background: ${({theme , isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  width: fit-content;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  

  input {
    height: 100%;
    width: fit-content;
    padding: 0 1rem;
    outline: none;
  }

  button {
    padding: 0 0.7rem;
  }
`