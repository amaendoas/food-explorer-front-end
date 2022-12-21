import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  grid-template-areas: "cart payment";
`

export const Cart = styled.div`
  grid-area: cart;
  padding-right: 5rem;
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

export const Content = styled.div`
  min-height: 20rem;
  
  div.empty-cart {
    display: flex;
    width: 100%;
    min-height: 20rem;
    justify-content: center;
    align-items: center;
  }

`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;


` 

export const Payment = styled.div`
  padding-left: 5rem;
  grid-area: payment;

`
