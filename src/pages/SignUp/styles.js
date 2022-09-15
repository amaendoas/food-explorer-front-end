import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: auto 40%;
  grid-template-rows: 100%;
  grid-template-areas:
  "logo content"
  "logo content";

  img {
    width: 30rem;
  }
`

export const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  h1 {
    font-weight: 500;
    font-size: 3rem;
  }

  button {
    width: 35rem;
  }
`