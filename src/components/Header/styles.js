import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12rem;
  gap: 2rem;

  svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }

  svg:hover {
    color:  ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .button-menu {
    display: none;
  }

  .show {
    display: flex;
  }
  
  .overlay {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 2;
    }
    
    @media (max-width: 1190px) {
      padding: 0 7rem;

      .hide {
        display: none;
      }

      .button-menu {
        display: block;
        z-index: 6;
      }
    }
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  width: 100%;

  a {
    font-size: 1.5rem;
  }

  a:hover {
    color:  ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1190px) {
    animation: slideRight 1s ease backwards;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    z-index: 5;
    max-width: 30rem;
    height: 100%;
    padding: 7rem 7rem 0 4rem;
    position: absolute;
    flex-direction: column;
    align-items: end;
    justify-content: start;
    gap: 2rem;
    top: 0;
    right: 0;
    bottom: 0;
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
  min-width: 50%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`