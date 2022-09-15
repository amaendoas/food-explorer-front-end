import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12rem;

  a {
    font-size: 1.5rem;
  }

  .logout {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Search = styled.div`
  input {
    background: transparent;
    border: none;
    padding: 0 1.5rem;
    width: 100%;
    outline: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  padding: 1.5rem 1.6rem;
  width: 50%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`