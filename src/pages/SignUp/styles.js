import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: auto 50%;
  grid-template-rows: 100%;
  grid-template-areas:
  "logo content"
  "logo content";
  
  img {
    width: 30rem;
  }
  
  
  
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
  
  `

export const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  animation: slideUp 1s ease backwards;
  h1 {
    font-weight: 500;
    font-size: 3rem;
  }

  button {
    width: 35rem;
  }
`