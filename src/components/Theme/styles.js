import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 7rem auto 7rem;
  grid-template-areas: "header"
  "content"
  "footer";
`

export const Content = styled.main`
  grid-area: content;
  padding: 3rem 12rem;
  animation: slideUp 1s ease backwards;

  @media (max-width: 1180px) {
    padding: 3rem 7rem;
  }
`